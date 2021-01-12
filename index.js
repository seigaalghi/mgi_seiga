require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.use(cors());

app.use("/api", router);

console.log(process.env.MONGO_URI);

app.listen(port, () => console.log(`Server is running at port ${port}`));
