var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genre = new Schema(
  {
    genre_name: {type: String, required: true, min:100, max: 100},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.genre_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
