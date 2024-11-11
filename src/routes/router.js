import express from "express";
import axios from "axios";
import { cache } from "../cache.js";
import { argv } from "process";

const router = express.Router();

router.get("*", async (req, res) => {
  const newUrl = req.origin + req.url;
  const cachedResponse = cache.get(newUrl);
  if (cachedResponse) {
    res.setHeader("X-Cache", "HIT");
    return res.status(200).json(cachedResponse);
  }
  try {
    const response = await axios.get(newUrl);
    const data = response.data;
    res.setHeader("X-Cache", "MISS");
    res.set(response.headers);
    cache.set(newUrl, data);
    return res.status(200).json(data);
  } catch (error) {}
});

export { router };
