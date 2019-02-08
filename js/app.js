// Library array
const myLibrary = [{
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
  pages: 300,
  read: false
}]

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

// Function that returns all books in the library
function index(booksArr) {
  // return a list of objects containing
  return booksArr;
}