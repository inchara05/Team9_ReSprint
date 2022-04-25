const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(4000, (err) => {
  if (err) console.log("Some error occurred when booting up the server");
  console.log("We've got a server running at 4000!");
});
