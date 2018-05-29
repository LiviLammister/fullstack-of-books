const Book = require('./book');
const User = require('./user');

User.belongsToMany(Book, {through: 'book_user'});
Book.belongsToMany(User, {through: 'book_user'});

module.exports = {
  Book,
  User,
}
