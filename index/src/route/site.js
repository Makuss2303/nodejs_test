const express = require('express')
const router = express.Router() //Router() hàm có sẵn
const siteController = require('../app-controller/SiteController')
router.use('/', siteController.index)

module.exports = router
