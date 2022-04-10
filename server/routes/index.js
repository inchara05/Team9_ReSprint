const routes = require("./users");
const sequences = require("./sequence");

const constructorMethod = (app) => {
  app.use("/api", sequences);
  app.use("/", routes);
};

module.exports = constructorMethod;
