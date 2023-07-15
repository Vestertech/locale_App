const Redis = require("redis");
require("dotenv").config();

class Cache {
  constructor() {
    this.redis = null;
  }

  async connect() {
    try {
      this.redis = await Redis.createClient({
        url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      });

      this.redis.connect();

      this.redis.on("connect", () => {
        console.log("Redis connected");
      });

      this.redis.on("error", () => {
        console.log("Redis connection error");
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const instance = new Cache();
module.exports = instance;
