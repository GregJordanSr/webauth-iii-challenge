const express = require('express');
const helmet = require('helmet');

const server = express();

// global middleware and route handler

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send({ message: "Server is running!!!"})
})


module.exports = server;