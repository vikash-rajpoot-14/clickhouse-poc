import { usersModel } from "../model/users.js";

export const CreateUser = async (req, res) => {
  const data = req.body;

  const userExist = await usersModel.find(data?.Id);
  if (userExist) {
    return res.status(400).json({
      message: "user already exist with this Id",
      data: [],
    });
  }
  const userCreate = await usersModel.create(data);

  return res.status(200).json({
    message: "user created successfully",
    data: userCreate,
  });
};

export const Users = async (req, res) => {
  const users = await usersModel.find({
    select: "*",
  });
  return res.status(200).json({
    message: "user created successfully",
    data: users,
  });
};
