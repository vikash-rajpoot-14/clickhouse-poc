import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const commentsSchema = {
  tableName: "comments",
  schema: {
    Id: { type: DATA_TYPE.Int64 },
    UserId: { type: DATA_TYPE.Int64 },
    CreationDate: { type: DATA_TYPE.DateTime, default: Date },
    PostId: { type: DATA_TYPE.Int64 },
    Score: { type: DATA_TYPE.Int64 },
    Text: { type: DATA_TYPE.String },
    userDisplayName: { type: DATA_TYPE.String },
  },
  options: `ENGINE = ReplacingMergeTree() ORDER BY (CreationDate)`,
  autoCreate: true,
  autoSync: true,
};

export const commentsModel = await clickhouse.model(commentsSchema);
