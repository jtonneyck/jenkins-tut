const express = require("express");
const app = express();

app.set("PORT", 3000)
app.get("/", (req, res)=> {
    res.send("hello world")
})

app.listen(app.get("PORT"), ()=> {
    console.log("listening on port:", app.get("PORT"));
})

module.exports = app;