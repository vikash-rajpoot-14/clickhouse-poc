import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const votesSchema = {
  tableName: "votes",
  schema: {
    Id: { type: DATA_TYPE.Int64 },
    PostId: { type: DATA_TYPE.Int32 },
    CreationDate: { type: DATA_TYPE.DateTime, default: Date },
    userId: { type: DATA_TYPE.Int64 },
    BountyAmount: { type: DATA_TYPE.Int64 },
    voteTypeId: { type: DATA_TYPE.Int64 }
  }, 
  options: `ENGINE = ReplacingMergeTree() ORDER BY (CreationDate)`,
  autoCreate: true,
  autoSync: true,
};

export const votesModel = await clickhouse.model(votesSchema);
