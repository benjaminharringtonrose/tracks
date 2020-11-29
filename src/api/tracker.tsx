import axios from "axios";

// npx ngrok http 3000
// the script above restarts our session

export default axios.create({
  baseURL: "http://20d624993ab3.ngrok.io",
});
