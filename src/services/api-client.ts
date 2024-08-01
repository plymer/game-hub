import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "867d3948cc9947e2ad9a952573c7f60d",
  },
});
