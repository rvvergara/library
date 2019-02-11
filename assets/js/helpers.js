// Function to render the library
function render(library) {
  let books = document.getElementById("bookList");
  library.arr.forEach(book => {
    appendBook(library, books, book);
  });
}

// Appending a new book to library and to html
function appendBook(library, books, book) {
  let bookTr = document.createElement("tr"),
    status = book.read === 'true' ? "already read" : "not yet read";
  bookTr.setAttribute("id", `book-${book.id}`);

  bookTr.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td> 
    <span id="book-status-${book.id}">${status}</span> 
    <button id="read-toggle-${book.id}">Toggle</button> 
    <button id="delete-book-${book.id}">Delete</button>
  </td>`;


  books.appendChild(bookTr);

  // Add functionality to toggle button

  toggleStatus(document.getElementById(`read-toggle-${book.id}`), book);

  // Add functionality to toggle button
  deleteBtn(document.getElementById(`delete-book-${book.id}`), library, book, bookTr);
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
    library.removeBook(library.arr, book.id);
    bookLi.parentElement.removeChild(bookLi);
  });
}

// Function to show form
function showForm() {
  document.getElementById("addBookForm").removeAttribute("class");
}

// Function to get all the data from form

function getBookInfoFromForm() {
  let title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    pages = document.getElementById("pages").value,
    read = document.getElementById("read").value;
  return [title, author, pages, read];
}
// Function for submit all info get from form

function submitForm(library) {
  library.addBook(...getBookInfoFromForm());
  document.getElementById("addBookForm").reset();
  document.getElementById("addBookForm").setAttribute("class", "d-none");
  let books = document.getElementById("bookList");
  let book = library.arr[library.arr.length - 1];
  appendBook(library, books, book);
}