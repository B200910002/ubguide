require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

//api
const API = require("./const/api/Api");

//routes
const userRoute = require("./routes/userRoute");
const entertainmentRoute = require("./routes/EntertainmentRoute");

//uses
app.use(fileUpload());
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//use api
app.use(API.userAPI, userRoute);
app.use(API.entertainmentAPI, entertainmentRoute);

app.listen(process.env.PORT, () => {
  console.log(process.env.LOCAL_HOST_PORT);
});
