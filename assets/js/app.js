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


// Function to create/instantiate a new book
function create(title, author, pages, read) {
  return new Book(title, author, pages, read);
}

// Function to render the library
function render(bookArr) {
  let books = document.getElementById("bookList");
  bookArr.forEach(book => {
    let bookLi = document.createElement("li"),
      status = book.read ? "already read" : "not yet read"
    bookLi.innerHTML = `${book.title}, by ${book.author}, ${book.pages} pages, ${status}  <button>Toggle</button> <button>Delete</button>`;
    books.appendChild(bookLi);
  });
}

// Function to show form
function showForm() {
  document.getElementById("addBookForm").removeAttribute("class");
}

window.addEventListener("load", e => render(myLibrary));

document.getElementById("addBook").addEventListener("click", e => showForm());

// Function to get all the data from form

function getBookInfo() {
  let title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    pages = document.getElementById("pages").value,
    read = document.getElementById("read").value;
  return [title, author, pages, read];
}

document.getElementById("addBookForm").addEventListener("submit", e => addBookToLibrary(...getBookInfo()));