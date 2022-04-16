const searchRouter = require('./search')
const sitepage = require('./site')
const anime_names_page = require('./anime_names')

function route(app) {
    app.use('/search', searchRouter)
    app.use('/anime_names', anime_names_page)



    app.use('/', sitepage)
}

module.exports = route
