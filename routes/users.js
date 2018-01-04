const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    email: req.body.email,
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    city: req.body.city,
    phone: req.body.phone,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const companyName = req.body.companyName;
//  const userName = req.body.userName;
  const password = req.body.password;

  //User.getUserByUsername(userName, (err, user) => {
    User.getUserByEmail(email, (err, user) => {
    if(err) {
      console.log(err);
    };
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    };

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) {
        console.log(err);
      };
      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: "JWT "+token,
          user: {
            id: user._id,
            email: user.email,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            companyName: user.companyName,
            city: user.city,
            phone: user.phone
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user})
});

module.exports = router;
