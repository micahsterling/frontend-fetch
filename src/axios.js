import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://frontend-take-home.fetchrewards.com"
      : "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});