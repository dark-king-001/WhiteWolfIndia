const express = require("express");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const env = require("dotenv");
const path = require("path");

env.config();
const port = process.env.PORT || 3000;
const database = "super_blogger";
const app = express();

app.use(
  session({
    secret: process.env.Secret_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 100 * 60 * 60 * 1000, // expires after 100 hours in milliseconds
      secure: false,
    },
    store: MongoStore.create({
      mongoUrl:
        process.env.MongoDB_URL ||
        `mongodb://127.0.0.1:27017/${database}?retryWrites=true&w=majority`, // Adjust to your MongoDB connection string
      ttl: 14 * 24 * 60 * 60, // Session TTL in seconds (e.g., 14 days)
    }),
  })
);
app.set("trust proxy", 1);

// Create a write stream for the log file
const fs = require("fs");
const logStream = fs.createWriteStream(
  path.join(__dirname, "accessData.csv.log"),
  { flags: "a" }
);
const csvFormat =
  ":date[iso],:remote-addr,:remote-user,:method,:url,:http-version,:status,:res[content-length],:referrer,:user-agent";
app.use(morgan(csvFormat, { stream: logStream }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// setting up cors and express sessions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the React app;
app.use(express.static(path.join(__dirname, "./client/build")));

const backend = require("./backend-code/backendPorter");
app.use(backend);

app.get("/web-admin", (req, res) => {
  res.sendFile(__dirname + "/web-admin/index.html");
});

app.get("*", (req, res) => {
  try {
    const allowedUrls = {
      "/": "Home",
      "/about": "About",
    };
    const title = allowedUrls[req.originalUrl];
    if (title) {
      fs.readFile(
        path.join(__dirname, "./client/build/index.html"),
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Internal Server Error");
            return;
          }
          const htmlContent = data
            .replace("{title}", title)
            .replace(
              "{metadescription}",
              "content='White Wolf India - Your destination for high-quality content and services.')"
            )
            .replace(
              "{metakeywords}",
              "content='White Wolf, India, services, content, high-quality'"
            )
            .replace("{metaauthor}", "content='Your Name'");
          res.send(htmlContent);
        }
      );
    } else {
      res.status(404).send("Page Not Found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

mongoose
  .connect(
    process.env.MongoDB_URL ||
      `mongodb://127.0.0.1:27017/${database}?retryWrites=true&w=majority`
  )
  .then(
    console.log(
      `MongoDB Conneted (${
        process.env.MongoDB_URL ||
        `mongodb://127.0.0.1:27017/${database}?retryWrites=true&w=majority`
      })`
    )
  )
  .then(
    app.listen(port, "127.0.0.1", () => {
      console.log(`Server Listen On ${port}`);
    })
  )
  .catch((err) => {
    console.log("An error occured at Mongo Connection\n" + err);
  });
