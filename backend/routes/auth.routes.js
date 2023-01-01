const express = require('express')
const { registerUser, loginUser, getMe } = require('../controllers/auth.controller')
const { protect } = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router