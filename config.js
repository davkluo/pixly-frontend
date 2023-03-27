/** Shared config for application; can be required many places. */

require("dotenv").config();

const S3_BASE_URL = process.env.AWS_BUCKET_BASE_URL;
const BASE_URL = process.env.PIXLY_API_BASE_URL || "http://localhost:5000";

module.exports = {
  S3_BASE_URL,
  BASE_URL,
};
