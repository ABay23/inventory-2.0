const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your Name'],
  },
  email: {
    type: String,
    required: [true, 'Please add your email'],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a Password'],
    minLenght: [6, 'Password needs to be at least 6 characters'],
    maxLenght: [25, `Password can't be more than 25 characters`],
    unique: true,
  },
  photo: {
    type: String,
    required: false,
    default: 'url image',
  },
  userAdmin: {
    type: String,
    required: false,
    isAdmin: false,
    default: 'Manager',
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
