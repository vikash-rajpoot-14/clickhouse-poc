import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const postHistoryschema = {
  tableName: "postHistory",
  schema: {
    Id: { type: DATA_TYPE.Int64 },
    postHistoryTypeId: { type: DATA_TYPE.Int64 },
    CreationDate: { type: DATA_TYPE.DateTime, default: Date },
    PostId: { type: DATA_TYPE.Int64 },
    RevisionGUID: { type: DATA_TYPE.String },
    userId: { type: DATA_TYPE.Int64 },
    Text: { type: DATA_TYPE.String },
    ContentLicense: { type: DATA_TYPE.String },
    Comment: { type: DATA_TYPE.String },
    userDisplayName: { type: DATA_TYPE.String },
  },
  options: `ENGINE = ReplacingMergeTree() ORDER BY (CreationDate)`,
  autoCreate: true,
  autoSync: true,
};

export const postHistoryModel = await clickhouse.model(postHistoryschema);
