import { postHistoryModel } from "../model/posthistory.js";

export const CreatePosthistory = async (req, res) => {
  const data = req.body;

  const posthistoryExist = await postHistoryModel.find(data?.Id);
  if (posthistoryExist) {
    return res.status(400).json({
      message: "posthistory already exist with this Id",
      data: [],
    });
  }
  const posthistoryCreate = await postHistoryModel.create(data);

  res.status(200).json({
    message: "posthistory created successfully",
    data: posthistoryCreate,
  });
};

export const PostHistorys = async (req, res) => {
  const postHistory = await postHistoryModel.find();
  res.status(200).json({
    message: "user created successfully",
    data: postHistory,
  });
};
