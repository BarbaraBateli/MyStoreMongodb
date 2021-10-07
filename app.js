require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors({ origin: process.env.REACT_APP_URL }));
require("./config/db.config")();

const productRouter = require("./router/product.router");
app.use("/", productRouter);

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
