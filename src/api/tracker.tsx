import axios from "axios";

// npx ngrok http 3000
// the script above restarts our session

export default axios.create({
  baseURL: "http://6c7841bd6e0c.ngrok.io",
});
