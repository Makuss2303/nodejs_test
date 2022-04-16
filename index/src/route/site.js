const express = require('express')
const router = express.Router() //Router() hàm có sẵn
const siteController = require('../app-controller/SiteController')
//route
router.get('/:slug', siteController.show)
router.get('/', siteController.index)


module.exports = router
