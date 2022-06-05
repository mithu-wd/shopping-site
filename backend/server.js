const app = require("./app");
const dotenv = require("dotenv");
const database_connect = require("./config/db");
dotenv.config({ path: "backend/config/config.env" });
database_connect();
app.listen(process.env.PORT, () => {
  console.log("server is running",process.env.PORT);
});
