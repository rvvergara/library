// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  Book.count++;
  this.id = Math.round(Math.random() * 1000000000);
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
}