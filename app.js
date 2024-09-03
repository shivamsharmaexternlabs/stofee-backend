require('dotenv').config();
const express = require("express");

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("Hello form server!")
})

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`))