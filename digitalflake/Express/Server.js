const express = require('express');
const HOST = "localhost";
const PORT = 1500;
const router = require('./Router');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use(router);

server.all("*", (req, res) => {
  res.json("Invalid Path");
});

server.listen(PORT, HOST, (err) => {

    if (err) {
      console.log("Error : ", err);
    } else {
      console.log('Server is running Successfully.....');
    }

});   