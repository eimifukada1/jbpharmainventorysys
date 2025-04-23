require("dotenv").config();
const app = require("./src/app");
const { ConnectDB } = require("./src/config/db.config");
// const { PUBLIC_DATA } = require("./src/constants"); // You might not need this line anymore

ConnectDB();

const port = process.env.PORT || 8000; // Use process.env.PORT with a fallback

app.listen(port, () => {
  console.log(`The app is listening at http://localhost:${port}`);
});
