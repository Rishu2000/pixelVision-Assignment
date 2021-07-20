const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const data = [
    {"username":"Rishav@098", "password":"dark123"},
    {"username":"Ankit@098", "password":"hello123"},
    {"username":"Ramesh@098", "password":"ram123"},
    {"username":"Corona@098", "password":"corona123"}
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('server is running')          
})

app.post('/', (req, res) => {
    const user = req.body.username;
    const found = data.find(userData => userData.username === user);
    if(found){
        if(found.password === req.body.password){
            //User Authentication granted
            res.json({username:req.body.username, errorMessage:null});
        }else{
            //User Found but wrond password
            res.json({username:null, errorMessage:"Please enter correct password."});
        }
    }else{
        // User Not Found
        res.json({username:null, errorMessage:"Please enter correct username."});
    }
})

app.listen(port, () => {
    console.log('server has started on port ' + port)
});