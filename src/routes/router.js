import express from "express";
import axios from "axios";
import { cache } from "../cache.js";
import url from "url";
const router = express.Router();

router.get("*", async (req, res) => {
  const newUrl = req.origin + req.url;
  const cachedResponse = cache.get(newUrl);
  console.log({ ...url.parse(req.url, true).query });
  const params = new URLSearchParams({
    [req.apiKeyName]: req.apiKeyValue,
    ...url.parse(newUrl, true).query,
  });
  if (cachedResponse) {
    res.setHeader("X-Cache", "HIT");
    return res.status(200).json(cachedResponse);
  }
  try {
    const response = await axios.get(newUrl, { params });
    const data = response.data;
    res.setHeader("X-Cache", "MISS");
    res.set(response.headers);
    cache.set(newUrl, data);
    return res.status(200).json(data);
  } catch (error) {}
});

export { router };
