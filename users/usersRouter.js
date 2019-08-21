const express = require('express');
const Users = require('./helpers.js');
const router = express.Router();

const restrict = require('../auth/middleware')

router.get('/users', (req, res) => {

    Users.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({message: "You are not allowed in!!!!"});
        });
});
module.exports = router;