import { clickhouse } from "../db/clickhouseConfig.js";

export const BufferInsert = async (req, res) => {
  const dateInsert = await insertData();
  console.log("dataInsert", dateInsert);
  await verifyInsert();
  res.status(200).json({
    message: "data inserted successfully",
  });
};

const tableName = "ecom_orders_buffer";
const numRows = 100000;
const batchSize = 1000;
const dbName = 'vikash_rajpoot'

// Base date for generating random order dates
const baseDate = new Date("2023-10-27T15:00:00");

// Helper function to generate random order data
function generateOrderData(batchSize) {
  const rows = [];
  for (let i = 0; i < batchSize; i++) {
    const order_id = Math.floor(Math.random() * 1000000) + 1;
    const customer_id = Math.floor(Math.random() * 100000) + 1;
    const order_date = new Date(
      baseDate.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000
    );
    const total_amount = (Math.random() * 490 + 10).toFixed(2);
    const status = ["completed", "pending", "shipped", "returned"][
      Math.floor(Math.random() * 4)
    ];
    rows.push(
      `(${order_id}, ${customer_id}, '${order_date
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")}', ${total_amount}, '${status}')`
    );
  }
  return rows;
}

// Main function to insert rows in batches
async function insertData() {
  for (let i = 0; i < numRows; i += batchSize) {
    const batchData = generateOrderData(batchSize);
    const values = batchData.join(", ");
    const query = `INSERT INTO ${dbName}.${tableName} (order_id, customer_id, order_date, total_amount, status) VALUES ${values}`;

    try {
      const data = await clickhouse.client.query(query).toPromise();
      console.log(`Inserted batch ${i + batchSize} / ${numRows}`, data);
    } catch (error) {
      console.error(
        `Error inserting batch ${i + batchSize} / ${numRows}:`,
        error
      );
    }
  }
  console.log("Finished inserting rows into ecom_orders_buffer");
}

async function verifyInsert() {
  try {
    const result = await clickhouse.client
      .query(`SELECT COUNT(*) AS count FROM ${dbName}.${tableName}`)
      .toPromise();
    console.log(`Total rows in ${tableName}:`, result);
  } catch (error) {
    console.error("Error verifying insert:", error);
  }
}

