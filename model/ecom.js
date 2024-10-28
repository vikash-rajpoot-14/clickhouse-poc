import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const ecom_orders_Schema = {
  tableName: "ecom_orders",
  schema: {
    order_id: { type: DATA_TYPE.UInt64 },
    customer_id: { type: DATA_TYPE.UInt64 },
    order_date: { type: DATA_TYPE.DateTime, default: Date },
    total_amount: { type: DATA_TYPE.Float64 },
    status: { type: DATA_TYPE.String }
  }, 
  options: `ENGINE = MergeTree() ORDER BY (order_date, customer_id) PARTITION BY toYYYYMM(order_date)`,
  autoCreate: true,
  autoSync: true,
};

export const ecom_orders = await clickhouse.model(ecom_orders_Schema);
