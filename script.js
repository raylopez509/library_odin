const myLibrary = [];

function Book(title, author, genre, pages, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.isRead = isRead;
  this.index = undefined;

}

function addBookToLibrary(book) {
  let index = myLibrary.length;
  book.index = index;
  myLibrary.push(book);
  console.log(book.index);
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
displayCards();

function createCard(book) {

  const main = document.querySelector(".main");

  const card = document.createElement("div");
  main.appendChild(card);

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

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    main.removeChild(card);
  });
  card.appendChild(deleteButton);

  const readButton = document.createElement("button");
  readButton.textContent = "Change Read Status";
  readButton.addEventListener("click", () => {
    book.isRead = !book.isRead;
    if (book.isRead) {
      isRead.textContent = "Read";
    } else {
      isRead.textContent = "Unread";
    }
  });
  card.appendChild(readButton);
}

function displayCards() {
  for (book of myLibrary) {
    createCard(book);
  }
}


const dialog = document.querySelector("dialog");

const addBookButton = document.querySelector("#add");
const confirmAddButton = document.querySelector("#modal-add");
const cancelButton = document.querySelector("#cancel");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let genre = document.querySelector(".genre").value;
  let pages = document.querySelector(".pages").value;
  let read = document.querySelector(".read").checked;
  createBookCard(title, author, genre, pages, read);
  dialog.close();
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

function createBookCard(title, author, genre, pages, isRead) {
  let book = new Book(title, author, genre, pages, isRead);
  addBookToLibrary(book);
  createCard(book);
}

const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", () => {
  const main = document.querySelector(".main");
  main.parentNode.removeChild(main);
});
