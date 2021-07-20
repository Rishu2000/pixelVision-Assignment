const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Server is started.')
})

app.post('/', (req, res) => {
    res.json(req.body.username);
})

app.listen(port, () => {
    console.log('server has started on port ' + port)
});