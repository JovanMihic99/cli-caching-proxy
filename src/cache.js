import NodeCache from "node-cache";

const cacheOptions = {
  stdTTL: 0, // 0 - indefinite TTL, (60 * 15) -  15 minutes
};

const cache = new NodeCache(cacheOptions);

export default cache;
