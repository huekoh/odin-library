const myLibrary = [];

function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.")
    }
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        const message = `${this.title} by ${this.author}, ${this.pages} pages, `;
        if (this.isRead) {
            return message + 'has been read.';
        } else {
            return message + 'has not been read.';
        }
    }

    this.setReadStatus = function(status) {
        this.isRead = status;
    }
}

function displayLibraryBooks() {
    for (book of myLibrary) {
        console.log(book.info());
    }
}

function openForm() {
    document.getElementById("my-form").style.display = "flex";
}

function closeForm() {
    document.getElementById("my-form").style.display = "none";
}

function addBook(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const title = formData.get("title");
    const author = formData.get("author");
    const pages = parseInt(formData.get("pages"));
    const isRead = formData.get("isRead") !== null;

    const newBook = new Book(title, author, pages, isRead);

    myLibrary.push(newBook);

    displayLibraryBooks();

    form.reset();
    closeForm();
}

/* main program */
function main() {
    // implement form buttons
    const openFormButton = document.querySelector("#open-form");
    const closeFormButton = document.querySelector("#close-form");
    const form = document.querySelector("#add-book-form");

    openFormButton.addEventListener("click", () => {
        openForm();
    });
    closeFormButton.addEventListener("click", () => {
        closeForm();
    });
    form.addEventListener("submit", (event) => {
        addBook(event);
    });
}

main();