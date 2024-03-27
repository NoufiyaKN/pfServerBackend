const express = require('express')
const userController = require('../Controller/userController')

const router = new express.Router()

// register
router.post('/register',userController.register)

// Export router
module.exports = router