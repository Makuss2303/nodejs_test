class SearchController {
    
    //[GET] -> search
    index(req, res) {
        res.render('main')
    }
    //[GET] -> /search/:random
    show(req, res){
        res.send('Check OK!')
    }
}

module.exports = new SearchController
