import NodeCache from "node-cache";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const cacheFilePath = path.join(__dirname, "cache.json");

const cache = new NodeCache();

const loadCacheFromFile = () => {
  try {
    const data = fs.readFileSync(cacheFilePath, "utf-8");
    const cacheData = JSON.parse(data);
    cache.mset(cacheData);
    console.log(`Loaded ${cacheData.length} cached entries from file.`);
  } catch (error) {
    console.warn("No cache file found. Starting with empty cache.");
  }
};

const saveCacheToFile = () => {
  const allKeys = cache.keys();

  const entries = [];
  for (const url in cache.data) {
    if (Object.prototype.hasOwnProperty.call(cache.data, url)) {
      let obj = { key: "", val: "" };
      const element = cache.data[url];
      obj.key = url;
      obj.val = element.v;
      entries.push(obj);
    }
  }
  fs.writeFileSync(cacheFilePath, JSON.stringify(entries), "utf-8");
  console.log("Cache saved to file");
};

loadCacheFromFile();

setInterval(saveCacheToFile, 1000 * 30); // save cache every 30 seconds

export default cache;
