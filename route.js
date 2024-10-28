import express from "express";
import { CreateUser, Users } from "./Controller/Users.js";
import { Comments, CreateComments } from "./Controller/Comments.js";
import { Badges, Createbadge } from "./Controller/Badges.js";
import { CreatePosts, Posts } from "./Controller/posts.js";
import { CreatePosthistory, PostHistorys } from "./Controller/postHistory.js";
import { CreateVotes, rawInsert, Votes } from "./Controller/Votes.js";
import { BufferInsert } from "./Controller/Ecom.js";

export const router = express.Router();

router.route("/user").post(CreateUser).get(Users);
router.route("/comment").post(CreateComments).get(Comments);
router.route("/badge").post(Createbadge).get(Badges);
router.route("/post").post(CreatePosts).get(Posts);
router.route("/posthistory").post(CreatePosthistory).get(PostHistorys);
router.route("/votes").post(CreateVotes).get(Votes);
router.route("/raw-votes").post(rawInsert)
router.route("/buffer").post(BufferInsert);



