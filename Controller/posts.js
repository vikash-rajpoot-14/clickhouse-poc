import { postsModel } from "../model/posts.js";

export const CreatePosts = async (req, res) => {
  const data = req.body;

  const postsExist = await postsModel.find(data?.Id);
  if (postsExist) {
    return res.status(400).json({
      message: "posts already exist with this Id",
      data: [],
    });
  }
  const postsCreate = await postsModel.create(data);

  return res.status(200).json({
    message: "posts created successfully",
    data: postsCreate,
  });
};

export const Posts = async (req, res) => {
  const posts = await postsModel.find();
  return res.status(200).json({
    message: "user created successfully",
    data: posts,
  });
};
