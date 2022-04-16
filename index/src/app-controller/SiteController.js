const anime_names = require('./models/anime_name_models');
const { show } = require('./SearchController');

class SiteController {
    
    //[GET] -> homepage
    index(req, res, next) {
        anime_names.find({})
            .then(anime_names => res.render('anime.ejs',{
                anime_names: anime_names
            }))
            .catch(next);
    }
    show(req, res){
        res.send('Check homepage OK!')
    }
}

module.exports = new SiteController
