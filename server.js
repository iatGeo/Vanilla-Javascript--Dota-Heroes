const express = require('express')
const app = express()
require('dotenv').config()
const mainRoute = require("./routes/main")

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

//Static Folder
app.use(express.static("public"))

//Setup Route For Which The Server Is Listening
app.use("/", mainRoute)

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`);
})