// Function to render the library
function render(bookArr) {
  let books = document.getElementById("bookList");
  bookArr.forEach(book => {
    appendBook(bookArr, books, book);
  });
}

// Appending a new book to library and to html
function appendBook(library, books, book) {
  let bookLi = document.createElement("li"),
    status = book.read === 'true' ? "already read" : "not yet read";
  bookLi.setAttribute("id", `book-${book.id}`);
  bookLi.innerHTML = `${book.title}, by ${book.author}, ${book.pages} pages, <span id="book-status-${book.id}">${status}</span> <button id="read-toggle-${book.id}">Toggle</button> <button id="delete-book-${book.id}">Delete</button>`;
  books.appendChild(bookLi);

  // Add functionality to toggle button
  let toggleBtn = document.getElementById(`read-toggle-${book.id}`);
  toggleStatus(toggleBtn, book);

  debugger;
  // Add functionality to toggle button
  deleteBtn(document.getElementById(`delete-book-${book.id}`), library, book, bookLi);
}

// Function for toggle button
function toggleStatus(btn, book) {
  btn.addEventListener("click", e => {
    book.toggleRead();
    let status = book.read ? "already read" : "not yet read";
    document.getElementById(`book-status-${book.id}`).innerText = status;
  });
}

function deleteBtn(btn, library, book, bookLi) {
  btn.addEventListener("click", e => {
    removeBook(library, book.id);
    bookLi.parentElement.removeChild(bookLi);
  });
}


// Function to show form
function showForm() {
  document.getElementById("addBookForm").removeAttribute("class");
}

// Function to get all the data from form

function getBookInfo() {
  let title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    pages = document.getElementById("pages").value,
    read = document.getElementById("read").value;
  return [title, author, pages, read];
}
// Function for submit all info get from form

function submitForm(library) {
  library.addBook(...getBookInfo());
  document.getElementById("addBookForm").reset();
  let books = document.getElementById("bookList");
  let book = library.arr[library.arr.length - 1];
  appendBook(books, book);
}