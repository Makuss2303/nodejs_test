class SearchController {
    
    //[GET] -> search
    index(req, res) {
        res.render('main')
    }
    //[GET] -> /search/:slug
    show(req, res){
        res.send('Check search page OK!')
    }
}

module.exports = new SearchController
