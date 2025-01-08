const myLibrary = [];

function Book(title, author, genre, pages, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let book1 = new Book("1984", "George Orwell", "Dystopian", 328, true);
let book2 = new Book(
  "The Outsiders",
  "S.E. Hinton",
  "Young adult Fiction",
  192,
  true
);

addBookToLibrary(book1);
addBookToLibrary(book2);

for (book of myLibrary) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const genre = document.createElement("div");
  const pages = document.createElement("div");
  const isRead = document.createElement("div");
  title.textContent = book.title;
  author.textContent = book.author;
  genre.textContent = book.genre;
  pages.textContent = book.pages;
  if (book.isRead) {
    isRead.textContent = "Read";
  } else {
    isRead.textContent = "Unread";
  }
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(genre);
  card.appendChild(pages);
  card.appendChild(isRead);
  const main = document.querySelector(".main");
  main.appendChild(card);
}

const dialog = document.querySelector("dialog");

const addBookButton = document.querySelector("#add");
const confirmAddButton = document.querySelector("#modal-add");

// dialog.addEventListener("close", (e) => {
//   dialog.close();
// });

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

// confirmAddButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   dialog.close();
// });

dialog.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let genre = document.querySelector(".genre").value;
  let pages = document.querySelector(".pages").value;
  let read = document.querySelector(".read").checked;
  // if (document.querySelector(".read").value == "Read") {
  //   test = "read";
  // } else {
  //   test = "unread";
  // }
  console.log(read);
  dialog.close();
});
