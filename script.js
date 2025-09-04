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

    this.getTitle = function() {
        return this.title;
    }

    this.getAuthor = function() {
        return this.author;
    }

    this.getPages = function() {
        return this.pages;
    }

    this.getIsRead = function() {
        return this.isRead;
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

    populatePageBoard();

    form.reset();
    closeForm();
}

function populatePageBoard() {
    console.log("these are the books in the library:");
    displayLibraryBooks();

    const pageBoard = document.querySelector(".page-body");

    for (book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        
        const coverImage = document.createElement("img");
        coverImage.classList.add("cover-image");
        coverImage.src = "./images/book_cover_default.png";
        coverImage.alt = `${book.title} cover`;

        const bookDescription = document.createElement("div");
        bookDescription.classList.add("book-description");

        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = book.getTitle();

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = book.getAuthor();

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = book.getPages();

        bookDescription.appendChild(title);
        bookDescription.appendChild(author);
        bookDescription.appendChild(pages);

        bookCard.appendChild(coverImage);
        bookCard.appendChild(bookDescription);

        pageBoard.appendChild(bookCard);
    }
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
        console.log("submit button has been hit!")
        addBook(event);
    });
}

main();