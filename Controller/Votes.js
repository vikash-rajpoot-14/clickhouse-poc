import { clickhouse } from "../db/clickhouseConfig.js";
import { votesModel } from "../model/votes.js";

export const CreateVotes = async (req, res) => {
  const data = req.body;

  const votesExist = await votesModel.find(data?.Id);
  if (votesExist) {
    return res.status(400).json({
      message: "votes already exist with this Id",
      data: [],
    });
  }
  const votesCreate = await votesModel.create(data);

  return res.status(200).json({
    message: "votes created successfully",
    data: votesCreate,
  });
};

export const Votes = async (req, res) => {
  const votes = await votesModel.find();
  return res.status(200).json({
    message: "user created successfully",
    data: votes,
  });
};

export const rawInsert = async (req, res) => {
  const query = ` INSERT INTO vikash_rajpoot.votes1
SELECT 
    toUInt32(Id) AS Id, 
    toInt32(PostId) AS PostId, 
    toInt32(VoteTypeId) AS VoteTypeId, 
    toDateTime(CreationDate) AS CreationDate, 
    toUInt32(UserId) AS UserId, 
    toNullable(toInt32(BountyAmount)) AS BountyAmount
FROM s3(
    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/stackoverflow/parquet/votes.parquet', 
    'Parquet',
    'Id UInt32, PostId Int32, VoteTypeId Int32, CreationDate DateTime, UserId UInt32, BountyAmount Nullable(Int32)'
);`;
  const response = await clickhouse.client.query(query);
console.log("---",res)
res.status(200).json({
  message: "Success",
  data: response,
});
};
