const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const { title } = require("process");
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const cardRoutes = require("./routes/card");
const coursesRoutes = require("./routes/courses");
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/courses", coursesRoutes);
app.use("/card", cardRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
