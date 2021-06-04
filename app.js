const express = require("express");
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    // res.render(views/list)

    let today = new Date();
    var currentDay = today.getDay();
    let day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default: 
        console.log("Error: current day is equal to:" + currentDay)
    }

    res.render("list", {
        typeOfDay: day
    })
})

app.listen(3000, function () {
    console.log("Server running on port 3000")
});