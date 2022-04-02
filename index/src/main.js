const express = require('express')
//const { path } = require('express/lib/application')
const path = require('path')
const req = require('express/lib/request')
const res = require('express/lib/response')
const morgan = require('morgan')
const app = express()
const port = 3000

// static and check path
//console.log('path', __dirname)
app.use(express.static(__dirname))

//use morgan
app.use(morgan('combined'))

//use ejs
app.set('view engine', 'ejs')
app.set('views', './index/src')
app.get('/makuss', (req, res) =>{
  res.render('main')
})

//homepage
app.get('/', (req, res) => {
  res.send(`
    <h1> Hello World! </h1>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


