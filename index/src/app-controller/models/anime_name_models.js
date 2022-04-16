const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const anime_names = new Schema({
    name: String,
    description: String,
    image: String ,
    episode: String,
    videoID: String,
    slug: { type: String, slug: 'name', unique: true },
}, { 
    //timestamps: true
});

module.exports = mongoose.model('anime_names', anime_names);
