// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  Book.count++;
  // Generate randomized unique ID for every new book
  this.id = Math.round(Math.random() * 1000000000);
}
// Method to change 'read' status of book
Book.prototype.toggleRead = function () {
  this.read = !this.read;
}