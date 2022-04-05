class SiteController {
    
    //[GET] -> homepage
    index(req, res) {
        res.send(`
        <h1> Hello Makuss !! </h1>
        `)
    }
}

module.exports = new SiteController
