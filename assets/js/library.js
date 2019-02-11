function Library() {
  this.arr = [];
}

// Adding a new book to library
Library.prototype.addBook = function (title, author, pages, read) {
  // 1. Instantiate a new book
  let book = new Book(...arguments);
  // 2. Push this new book to myLibrary
  this.arr.push(book);
  return this.arr;
}