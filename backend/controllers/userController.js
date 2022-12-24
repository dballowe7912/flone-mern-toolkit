const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
}

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  Public
const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
  
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
}



module.exports = { 
    registerUser,
    authUser
}