import express from "express";
import NodeCache from "node-cache";
import axios from "axios";

const cacheOptions = {
  stdTTL: 5 * 60, // time to live 5 mins
};
const cache = new NodeCache(cacheOptions);

const router = express.Router();

router.get("*", async (req, res) => {
  const newUrl = req.origin + req.url;
  const cachedResponse = cache.get(newUrl);

  if (cachedResponse) {
    res.setHeader("X-Cache", "HIT");
    return res.status(200).json(cachedResponse.data);
  }
  try {
    res.setHeader("X-Cache", "MISS");
    const response = await axios.get(newUrl);
    const data = response.data;
    cache.set(newUrl, data);
    return res.status(200).json(data);
  } catch (error) {}
});

export { router };
