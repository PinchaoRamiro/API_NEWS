import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://eventregistry.org/api/v1";

class NEWS_API { 
  static api = axios.create({
    baseURL: BASE_URL, 
    params: {
      apiKey: API_KEY,
    },          
  });

  static async get(endpoint, params) {
    return this.api.get(endpoint, params);
  }
}

export default NEWS_API;
