import express from "express";
import NodeCache from "node-cache";
import axios from "axios";

const cacheOptions = {
  stdTTL: 60 * 5, // time to live 5 mins
};
const myCache = new NodeCache(cacheOptions);
const router = express.Router();

router.get("*", async (req, res) => {
  const newUrl = req.origin + req.url;
  const response = await axios.get(newUrl);
  res.status(200).json({ ...response.data });
});

export { router };
