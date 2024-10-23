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
