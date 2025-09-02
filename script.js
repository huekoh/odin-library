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

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayLibraryBooks() {
    for (book of myLibrary) {
        console.log(book.info());
    }
}

const hobbit = new Book("The Hobbit", "Tolkein", 295, false);
const bible = new Book("The Bible", "God", 1000, true);
addBookToLibrary(hobbit);
addBookToLibrary(bible);
displayLibraryBooks();
