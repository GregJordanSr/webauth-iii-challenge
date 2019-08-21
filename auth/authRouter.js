const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/helpers.js');

// endpoints for /api/auth routes

router.post('/register', (req, res) => {
    let user = req.body;
    const hash =  bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.addUsers(user)
        .then(addedUser => {
            res.status(201).json(addedUser);
        })
        .catch(err => {
            res.status(500).json({message: "You can't pass!!!!"});
        })
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Users.findByUser({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
        
            }
        })
});

router.get('/loggedin', (req, res) => {
    
});


module.exports = router;