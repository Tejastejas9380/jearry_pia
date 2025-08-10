require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "AI server running" }));
app.use("/api", require("./routs/AiBtnRoute"));
app.use("/api", require("./routs/ImageGenRoute"));

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);