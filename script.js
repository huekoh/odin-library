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

function main() {
    const openFormButton = document.querySelector("#open-form");
    const closeFormButton = document.querySelector("#close-form");

    openFormButton.addEventListener("click", () => {
        openForm();
    });
    closeFormButton.addEventListener("click", () => {
        closeForm();
    });
}

main();