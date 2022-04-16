const express = require('express')
const router = express.Router() //Router() hàm có sẵn
const anime_names_Controller = require('../app-controller/anime_names_Controller')
//route
router.get('/create', anime_names_Controller.create)
router.post('/store', anime_names_Controller.store)
router.get('/:slug', anime_names_Controller.show)

module.exports = router
