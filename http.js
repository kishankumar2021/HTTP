const express = require('express')
const app = express();
app.use(express.json());

// var user = require("/MOCK_DATA.json")

app.listen(1234, () => {
    console.log("listen to port 1234");
})

app.get("/kishan", function (req, res) {
    return res.send("welcome to homepage");
})

app.post("/kishan", function (req, res) {
    var obj = req.body;
    user.unshift(obj);
    res.send(user)
})

app.patch("/kishan", function (req, res) {
    console.log("update package by patch")
    var id = req.params.id;
    var data = req.body;
    var item = JSON.parse(data);
    


    var j = 0;

        if (j== id)
            
            
            user[j].first_name = data.first_name;
   


    console.log(user[j]);
    
     return res.send(user)
})

app.delete("/kishan", function (req, res) {
    return res.send("delete json file");
})

