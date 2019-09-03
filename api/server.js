const express = require('express');
const helmet = require('helmet');

const userRouter = require('../users/usersRouter');
const authRouter = require('../auth/authRouter');

const server = express();

// global middleware and route handler

server.use(helmet());
server.use(express.json());
server.use('/api', userRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send({ message: "Server is running!!!"})
})


module.exports = server;