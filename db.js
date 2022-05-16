// https://mongoosejs.com/docs/index.html
const mongoose = require("mongoose");

const mongooseURL = "mongodb://localhost:27017/simpleDB";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongooseURL);
}

module.exports = main;
