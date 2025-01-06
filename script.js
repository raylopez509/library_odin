const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let test = new Book("test", "ray");
let test2 = new Book("test", "ray");

addBookToLibrary(test);
addBookToLibrary(test2);

for (book of myLibrary) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  title.textContent = book.title;
  const author = document.createElement("div");
  author.textContent = book.author;
  card.appendChild(title);
  card.appendChild(author);
  const main = document.querySelector(".main");
  main.appendChild(card);
}
