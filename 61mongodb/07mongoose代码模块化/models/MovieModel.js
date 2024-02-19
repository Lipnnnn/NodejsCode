/**
 * 新建一个MovieModel
 */

const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
    name: String,
    actor: String
});

let MovieModel = mongoose.model('movies',MovieSchema);

module.exports = MovieModel;