const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/", (req,res) => {
    res.send("It's Working");
});

// var show = function (req,res,next) {
    let date = new Date();
    let d = date.toLocaleDateString();
    let t = date.toLocaleTimeString();
    let img = "🕑";
    if(!fs.existsSync("Timestamp")){
        fs.mkdirSync("Timestamp");
        fs.writeFile(path.resolve("Timestamp", "date.txt"),
        `${img} Timestamp: ${d}, ${t}`,
          (err) => {
        if(err){
            console.log(err);
        }
        console.log("File Created");
    });
    }else{
        fs.writeFile(path.resolve("Timestamp", "date.txt"),
        `${img} Timestamp: ${d}, ${t}`,
          (err) => {
        if(err){
            console.log(err);
        }
        console.log("File Created");
    });
    }
    // next();
// }
// app.use(show);

app.get("/date", (req, res) => {

    // var t = timestamp + " " + ti
    // res.send(t);

    res.sendFile(path.resolve(__dirname, "Timestamp", "date.txt"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running");
});