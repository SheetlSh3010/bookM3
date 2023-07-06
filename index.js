const express = require('express');
const { connection } = require('./db');
var cors = require('cors');
const { BookRoute } = require('./routes/bookroute');
require('dotenv').config()
const app = express();
app.use(express.json())
app.use(cors())
app.use("/book", BookRoute)

app.listen(4500, async () => {

    try {
        await connection
        console.log("server is running on port 4800");
    } catch (error) {
        console.log("not connected");
    }
})