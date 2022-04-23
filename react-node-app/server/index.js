// server/index.js

const express = require("express");
const res = require("express/lib/response");
const fs = require("fs");
const { errorMonitor } = require("events");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

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
        fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify(data, null, '\t'), 'utf8', err =>{;
            if (err) throw err;
        });
    });
});

app.delete("/deletePet", (req, res) => {
    fs.readFile(__dirname + "/" + "pets.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        delete data["pet4"];
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify(data, null, '\t'), 'utf8', err =>{;
            if (err) throw err;
        });
    });
})

app.put("/updatePet/:pet", (req, res) => {
    fs.readFile(__dirname    + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        if (data[req.params.pet]){
            const npet ={
                name: req.body.name,
                type: req.body.type,
                owner: req.body.owner,
                color: req.body.color,
                id: data[req.params.pet]["id"]
            };

            data[req.params.pet] = npet
            fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify(data, null, '\t'), 'utf8', (err, data) => {
                if (err) {
                    console.log(err)
                    return
                }
            })

            console.log(data);
            res.end(JSON.stringify(data));

        }
        else {
            res.status(404).json({msg: "Pet not found"});
        }
    });
})


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