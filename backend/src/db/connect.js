const mongoose = require("mongoose");
const config = require("../config/config");

function connect() {
  // return mongoose.connect("mongodb://localhost:27017/node-mvc-react", {
  console.log(config.db.url);
  return mongoose.connect(`${config.db.url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    // useFindAndModify: false,
  });
}

module.exports = connect;
