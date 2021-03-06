const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const logger = require("./middleware/logger");
const members = require("./members");

const app = express();

// Init middleware (logger)
//app.use(logger);

// Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Init Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) =>
  res.render("index", { title: "Member app", members })
);

/* 
  // Serve the index.html file for the route '/'
  app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); */

// Set static folder
// Creates a static web server, that serves static files
//app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
