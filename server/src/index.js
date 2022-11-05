require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const fileUpload = require("express-fileupload");

// app.use(fileUpload());

//api
const API = require("./const/api/Api");

//routes
const userRoute = require("./routes/userRoute");

//uses
// app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//use api
app.use(API.userAPI, userRoute);

app.listen(process.env.PORT, () => {
  console.log(process.env.LOCAL_HOST_PORT);
});
