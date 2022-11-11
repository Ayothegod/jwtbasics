const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main.js')
const authentication = require('../middleware/auth.js')

router.post('/login',login)
router.get('/dashboard',authentication,dashboard)

module.exports = router