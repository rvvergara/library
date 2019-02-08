// Library array
const myLibrary = []

// Book Class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Adding a new book to library
function addBookToLibrary(title, author, pages, read) {
  // 1. Instantiate a new book
  let book = new Book(title, author, pages, read);
  // 2. Push this new book to myLibrary
  myLibrary.push(book);
}