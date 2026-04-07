import createApp from "./app.js";
import { API_PORT } from "./config/constants.js";

const app = createApp();

app.listen(API_PORT, () => {
  console.info(`🚀 Server is listening on port: ${API_PORT}`);
});
