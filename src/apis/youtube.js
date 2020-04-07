import axios from "axios";

const KEY = "AIzaSyCf_UicKISEgNwUvFzBkc7um1ic0flFHbc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: `${KEY}`,
  },
});
