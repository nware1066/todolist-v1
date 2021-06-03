const express = require("express");
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    // res.render(views/list)

    let today = new Date();
    var currentDay = today.getDay();
    let day = "";

    if (today.getDay() === 6 || today.getDay() === 0) {
        day = "Weekend";
    } else {
        day = "Weekday"
    }
    
    res.render("list", {typeOfDay: day})
})

app.listen(3000, function() {
    console.log("Server running on port 3000")
});