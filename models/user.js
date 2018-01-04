const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  userName: String,
  firstName: String,
  lastName: String,
  companyName: String,
  city: String,
  phone: String,
  password: String
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

/*odule.exports.getUserByUsername = function(userName, callback){
  const query = {userName: userName}
  User.findOne(query, callback);
}*/

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) {
        console.log(err);
      } else {
        newUser.password = hash;
        newUser.save(callback);
      }
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) {
      console.log(err);
    } else {
      callback(null, isMatch);
    }
  });
};