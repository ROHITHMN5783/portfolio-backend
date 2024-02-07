const mongoose = require("mongoose");

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;
const contactrouter = require("./routes/contact.routes");
const projrouter = require("./routes/project.routes");
const DataSubmitHandler = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rohithmnprince4:7s6cQ5WXNyjBSIXi@cluster0.1kv5hth.mongodb.net/portfolio?retryWrites=true&w=majority"
    )
    .then((connection) => {
      console.log("Mongodb connected successfully");
    })
    .catch((error) => {
      console.log("error caught", error);
    });
};
DataSubmitHandler();
app.use("/api", contactrouter);
app.use("/api", projrouter);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
