const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const db = require("../models");

router.post('/', (req, res) => {
  const { name, username, password } = req.body;

  if(!name || !username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  
  db.User.findOne({ username })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        username,
        password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
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
            });
        })
      })
      .catch(err);
    })
});

module.exports = router;