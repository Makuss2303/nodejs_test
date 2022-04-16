const anime_names = require('./models/anime_name_models');

class anime_names_Controller {
    
    //[GET] -> /anime_names/:slug
    show(req, res, next){
        anime_names.findOne({slug: req.params.slug})
            .then( animeInfo =>{
                res.render('anime_names/show', { animeInfo: animeInfo })
            })
            .catch(next);
    }
    //[GET] -> create
    create(req, res, next){
        res.render('anime_names/create')
    }
    //[POST] -> store
    store(req, res, next){
        // res.json(req.body);
        const post_info  = new anime_names(req.body);
        post_info.save()
            .then(()=> res.redirect('/'))
    }
}

module.exports = new anime_names_Controller();
