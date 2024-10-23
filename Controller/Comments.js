import { commentsModel } from "../model/comments.js";

export const CreateComments = async (req, res) => {
  const data = req.body;

  const commentsExist = await commentsModel.find(data?.Id);
  if (commentsExist) {
    return res.status(400).json({
      message: "comments already exist with this Id",
      data: [],
    });
  }
  const commentsCreate = await commentsModel.create(data);

  return res.status(200).json({
    message: "comments created successfully",
    data: commentsCreate,
  });
};

export const Comments = async (req, res) => {
  const comments = await commentsModel.find();
  return res.status(200).json({
    message: "user created successfully",
    data: comments,
  });
};
