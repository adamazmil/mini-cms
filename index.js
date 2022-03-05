require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { auth } = require("express-openid-connect");
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};
var video = require("./routes/VideoRouter.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(auth(config));
app.get("/", (request, response) => {
  response.json({ info: "Video serving cms webapp" });
});
app.use("/", video);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
