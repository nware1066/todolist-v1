const express = require("express");
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    let today = new Date();
   
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        typeOfDay: day
    })
})

app.listen(3000, function () {
    console.log("Server running on port 3000")
});