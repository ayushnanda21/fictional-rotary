//acquiring packages
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet =require("helmet");
const morgan =require("morgan");
const cors = require('cors');
const multer = require('multer');
const path = require('path');


//acquiring routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());






//db connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Connecting...");
        console.log("Database Successfully connected");
    }
});

//middlewares
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/conversations" ,conversationRoute);
app.use("/api/messages" , messageRoute);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });
  

//server listening port
app.listen(process.env.PORT || 5000, function(req,res){
    console.log("Backend-Server is running on port 5000");
})