//npm start
//npm run watch | transfer scss to css
const express = require('express')
//const { path } = require('express/lib/application')
const path = require('path')
const req = require('express/lib/request')
const res = require('express/lib/response')
const morgan = require('morgan')
const app = express()
const port = 3000
const route = require('./route')

// static and check path
//console.log('path', __dirname)
app.use(express.static(__dirname))

//middleware
app.use(express.urlencoded({
  extended: true
}
))
app.use(express.json())

//use morgan
//app.use(morgan('combined'))

//use ejs
app.set('view engine', 'ejs')
app.set('views', './index/src/ejsTemplate')

route(app)
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


