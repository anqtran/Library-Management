var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genre = new Schema(
  {
    genre_name: {type: String, max: 100},
  }
);

// Virtual for author's full name
genre
.virtual('name')
.get(function () {
  return this.genre_name;
});

// Virtual for author's URL
genre
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', genre);
