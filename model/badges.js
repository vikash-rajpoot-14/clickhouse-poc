import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";
const badgesSchema = {
  tableName: "badges",
  schema: {
    Id: { type: DATA_TYPE.Int64 },
    UserId: { type: DATA_TYPE.Int64 },
    CreationDate: { type: DATA_TYPE.DateTime, default: Date },
    TageBased: { type: DATA_TYPE.Int64 },
    Class: { type: DATA_TYPE.Int64 },
    Name: { type: DATA_TYPE.String },
  },
  options: `ENGINE = ReplacingMergeTree() ORDER BY (CreationDate)`,
  autoCreate: true,
  autoSync: true,
};

export const badgesModel = await clickhouse.model(badgesSchema);
