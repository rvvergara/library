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

// Removing a book from the library
Library.prototype.removeBook = function (booksArr, param) {
  // Find book from array using param -> identification of a particular book and then find its index in the library
  index = param;
  booksArr.splice(index, 1);
  return booksArr;
}