import express from "express";
import axios from "axios";
import { cache } from "../cache.js";
import url from "url";
const router = express.Router();

router.get("*", async (req, res) => {
  const newUrl = req.origin + req.url;
  const cachedResponse = cache.get(newUrl);
  const params = new URLSearchParams({
    [req.apiKeyName]: req.apiKeyValue,
    ...url.parse(newUrl, true).query, // add the query params from original request
  });
  if (cachedResponse) {
    res.setHeader("X-Cache", "HIT");
    return res.status(200).json(cachedResponse);
  }
  try {
    const response = await axios.get(newUrl, { params }); //send request with params
    const data = response.data;
    res.setHeader("X-Cache", "MISS"); // set cache headers
    res.set(response.headers); // set headers
    cache.set(newUrl, data); // save to cache
    return res.status(200).json(data);
  } catch (error) {}
});

export { router };
