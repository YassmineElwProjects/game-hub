import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "44ef7bf2decf4698bf58b6edb2013283",
  },
});
