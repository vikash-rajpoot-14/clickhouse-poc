import { badgesModel } from "../model/badges.js";

export const Createbadge = async (req, res) => {
  const data = req.body;

  const userExist = await badgesModel.find(data?.Id);
  if (userExist) {
    return res.status(400).json({
      message: "badge already exist with this Id",
      data: [],
    });
  }
  const badgeCreate = await badgesModel.create(data);

  return res.status(200).json({
    message: "badge created successfully",
    data: badgeCreate,
  });
};

export const Badges = async (req, res) => {
  const badges = await badgesModel.find();
  return res.status(200).json({
    message: "user created successfully",
    data: badges,
  });
};
