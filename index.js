import express from "express";
import "dotenv/config";
import "./db/clickhouseConfig.js";
import { usersModel } from "./model/users.js";
import { badgesModel } from "./model/badges.js";
import { postHistoryModel } from "./model/posthistory.js";
import { postsModel } from "./model/posts.js";
import { votesModel } from "./model/votes.js";
import { router } from "./route.js";
import { commentsModel } from "./model/comments.js";
import { ecom_orders } from "./model/ecom.js";
import { ecom_orders_buffer } from "./model/ecomBuffer.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
usersModel
badgesModel
commentsModel
postHistoryModel
postsModel
votesModel
ecom_orders
ecom_orders_buffer

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json("server is running");
});
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
