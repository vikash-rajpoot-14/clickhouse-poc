import { DATA_TYPE } from "clickhouse-orm";
import { clickhouse } from "../db/clickhouseConfig.js";

const postsschema = {
  tableName: "posts",
  schema: {
    Id: { type: DATA_TYPE.Int64 },
    CreationDate: { type: DATA_TYPE.DateTime, default: Date },
    userId: { type: DATA_TYPE.Int64 },
    userDisplayName: { type: DATA_TYPE.String },
    postTypeId: { type: DATA_TYPE.Int64 },
    AcceptedAnswerId: { type: DATA_TYPE.Int64 },
    Score: { type: DATA_TYPE.Int64 },
    ViewCount: { type: DATA_TYPE.Int64 },
    Body: { type: DATA_TYPE.String },
    OwnerUserId: { type: DATA_TYPE.Int64 },
    OwnerDisplayName: { type: DATA_TYPE.String },
    LastEditorUserId: { type: DATA_TYPE.Int64 },
    LastEditorDisplayName: { type: DATA_TYPE.String },
    lastEditDate: { type: DATA_TYPE.DateTime },
    LastActivityDate: { type: DATA_TYPE.DateTime },
    Title: { type: DATA_TYPE.String },
    Tags: { type: DATA_TYPE.String },
    AnswerCount: { type: DATA_TYPE.Int64 },
    CommentCount: { type: DATA_TYPE.Int64 },
    FavoriteCount: { type: DATA_TYPE.Int64 },
    ContentLicense: { type: DATA_TYPE.String },
    ParentId: { type: DATA_TYPE.String },
    CommunityOwnerDate: { type: DATA_TYPE.DateTime },
    ClosedDate: { type: DATA_TYPE.DateTime },
  },
  options: `ENGINE = ReplacingMergeTree() ORDER BY (CreationDate)`,
  autoCreate: true,
  autoSync: true,
};

export const postsModel = await clickhouse.model(postsschema);
