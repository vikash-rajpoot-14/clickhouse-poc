import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const usersSchema = {
  tableName: "users",
  schema: {
    Id: { type: DATA_TYPE.Int64 },
    Reputation: { type: DATA_TYPE.Int32 },
    CreationDate: { type: DATA_TYPE.DateTime, default: Date },
    LastAccessDate: { type: DATA_TYPE.DateTime },
    AboutMe: { type: DATA_TYPE.String },
    Views: { type: DATA_TYPE.Int64 },
    UpVotes: { type: DATA_TYPE.Int64 },
    DownVotes: { type: DATA_TYPE.Int64 },
    WebsiteURL: { type: DATA_TYPE.String },
    Location: { type: DATA_TYPE.String },
    AccountID: { type: DATA_TYPE.String },
  },
  options: `ENGINE = ReplacingMergeTree() ORDER BY (CreationDate)`,
  autoCreate: true,
  autoSync: true,
};
export const usersModel = await clickhouse.model(usersSchema);
