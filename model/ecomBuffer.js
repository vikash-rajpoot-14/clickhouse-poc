import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const ecom_orders_buffer_Schema = {
  tableName: "ecom_orders_buffer",
  schema: {
    order_id: { type: DATA_TYPE.UInt64 },
    customer_id: { type: DATA_TYPE.UInt64 },
    order_date: { type: DATA_TYPE.DateTime, default: Date },
    total_amount: { type: DATA_TYPE.Float64 },
    status: { type: DATA_TYPE.String },
  },
  options: `ENGINE = Buffer(vikash_rajpoot, ecom_orders, 16, 1, 10, 1, 100, 5000, 41943)`,
  autoCreate: true,
  autoSync: true,
};

export const ecom_orders_buffer = await clickhouse.model(
  ecom_orders_buffer_Schema
);
