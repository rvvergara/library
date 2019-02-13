// Library array
const myLibrary = new Library();

myLibrary.addBook("Rich Dad Poor Dad", "Robert Kiyosaki", 300, false);

window.addEventListener("load", e => render(myLibrary));

document.getElementById("addBook").addEventListener("click", e => showForm());

document.getElementById("addBookForm").addEventListener("submit", e => {
  e.preventDefault();
  submitForm(myLibrary);
});