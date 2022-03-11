// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const fs = require("fs");

const newPet = {
    "pet4" : {
        "name" : "nala",
        "type" : "dog",
        "owner" : "jonathan",
        "color" : "salt and pepper",
        "id" : 4
    }
}

app.post("/addPet", (req, res) => {
    fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        data["pet4"] = newPet["pet4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});


app.get("/api", (req, res) => {
    res.json({message: "Hello from server side!" });
});

app.get("/pets", (req, res) => {
    fs.readFile(__dirname + "/" + "pets.json", "utf-8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});