const express = require("express")
const router = express.Router()

const UserController = require('../app/controllers/userController')

// router.get('/:slug', UserController.show)
router.get('/:slug', UserController.index)


module.exports = router
