const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const cookieParser = require("cookie-parser");

// New Express Instance
const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
// const db = config.get("mongoURI");
const db = process.env.MONGO_URI ? process.env.MONGO_URI : config.get('mongoURI')

  

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/data", require("./routes/api/data"));

// Serve Static Assets If In Production
if (process.env.NODE_ENV === "production") {
  // Set Static Folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
