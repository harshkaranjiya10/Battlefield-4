const express = require("express");
const cors = require('cors');
const mainRoute = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());

// Server-Info path
app.use("/api/v1/server-Info", mainRoute);

app.get("/", (req,res) => {
    res.send("Helloworld");
})

app.listen(5000, ()=>{
    console.log("http://localhost:5000");
})

module.exports = app;