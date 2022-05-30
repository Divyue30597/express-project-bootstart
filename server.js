const dotenv = require("dotenv");
// mongoDb database connection
// const mongoose = require("mongoose");

const app = require("./app");

dotenv.config({ path: "./config.env" });

// DB connection

// const DB = process.env.DATABASE.replace({
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// })

// mongoose.connect(DB, {
//   newUrlParser: true,
//   autoIndex: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Database connection was successful")
// })

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
