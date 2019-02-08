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
  let book = create(...arguments);
  // 2. Push this new book to myLibrary
  myLibrary.push(book);
  return myLibrary;
}

function removeBook(booksArr, param) {
  // Find book from array using param -> identification of a particular book and then find its index in the library
  index = param;
  booksArr.splice(index, 1);
  return booksArr;
}

// Function that returns all books in the library -> Controller index
function index(booksArr) {
  // return a list of objects containing
  return booksArr;
}

// Function to create/instantiate a new book
function create(title, author, pages, read) {
  return new Book(title, author, pages, read);
}