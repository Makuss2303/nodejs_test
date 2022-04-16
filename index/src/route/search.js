const express = require('express')
const router = express.Router() //Router() hàm có sẵn
const searchController = require('../app-controller/SearchController')

//route here
router.get('/:slug', searchController.show)


router.get('/', searchController.index)
module.exports = router
