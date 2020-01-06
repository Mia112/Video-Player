const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');


const db = require("../models");

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if(!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  db.User.findOne({ username })
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'Username Does not exist' });

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  username: user.username
                }
              });
            }
          )
        })
        .catch(err);
    });
});


router.get('/users', auth, (req, res) => {
  db.User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;