const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./routes/users.js")

require("dotenv").config()

const app = express();
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

const uri = process.env.LOGIN_URI;
mongoose.connect(uri, {})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("Database connection established.")
})

app.use("/users", userRoute)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})