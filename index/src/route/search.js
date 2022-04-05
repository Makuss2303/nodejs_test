const express = require('express')
const router = express.Router() //Router() hàm có sẵn
const searchController = require('../app-controller/SearchController')

//route here
router.use('/:random', searchController.show)


router.use('/', searchController.index)
module.exports = router
