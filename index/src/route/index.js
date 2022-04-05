const searchRouter = require('./search')
const sitepage = require('./site')

function route(app) {
    app.use('/search', searchRouter)




    app.use('/', sitepage)
}

module.exports = route
