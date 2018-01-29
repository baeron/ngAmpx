const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const nodemailer = require('nodemailer');

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

// Contact us
router.post('/contacts', (req, res, next) => {
  const output = `
    <p>Your hame new contact us message</p>
    <h3>Message Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone Number: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: 'baranoffei@gmail.com',
          pass: 'baeron314'
      },
      tls:{
        rejectUnautorized: false
      }
  });

  //email for USER
  let mailOptionsForUser = {
      from: '"AMP X Contact Us" <baranoffei@gmail.com>',
      to: req.body.email,
      subject: 'Support service AMP X',
      text: 'Thank you for your message. As soon as we process it, we will contact you.'
  };

    //email for ADMIN
    let mailOptionsForAdmin = {
      from: '"You have a new message from the form Contact us from the site AMP X" <baranoffei@gmail.com>',
      to: 'baranoffei@gmail.com',
      subject: 'You have new message from Contact Us form',
      text: 'You have new message from Contact Us form',
      html: output
  };

  // send mail to User
  transporter.sendMail(mailOptionsForUser, (error, info) => {
      if (error) {
        res.json({success: false, msg:'Failed to send message'});
          return console.log(error);
      } else {
        res.json({success: true, msg:'The message was sent.'});
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });

    // send mail to ADMIN
    transporter.sendMail(mailOptionsForAdmin, (error, info) => {
      if (error)  return console.log(error);
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
  //
});


// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user})
});

module.exports = router;
