const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const user = User.create(req.body);

   return res.status(201).json({
      status: 'success',
      user,
    });
  } catch (error) {
  return  res.status(400).json({
      status: 'fail',
      error,
    });
  }
};


exports.loginUser =  (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    console.log(email);
   

     User.findOne({ email }, (err, user) => {
      if (user) {
        console.log(user);
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            console.log(same);
            // USER SESSION
            res.status(200).send('YOU ARE LOGGED IN');
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};