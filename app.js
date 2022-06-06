let myLibrary = [];

class Book {
    constructor(bookName, author, pages, image, color) {
        this.bookName = bookName;
        this.author = author;
        this.pages = pages;
        this.image = image;
        this.color = color;
    }
}

function addBookToLibrary () {
    const book = Object.create(Book);
    book.bookName = nameInput.value;
    book.author = authorInput.value;
    book.pages = pagesInput.value;
    book.image = imageInput.value;
    book.color = colorInput.value;

    // Clear all cards and re-display cards again
    let child = mainContainer.lastElementChild;

    while (child) {
        mainContainer.removeChild(child);
        child = mainContainer.lastElementChild;
    }

    for (eachBook in myLibrary) {
        const card = mainContainer.appendChild(document.createElement('div'));
        card.classList.add('card');
        // Add image to card div
        const bookImage = card.appendChild(document.createElement('img'));
        this.bookImage.classList.add('book__image');
        this.bookImage.src = book.image;
        console.log(Boolean(book.image))
        if (!book.image) {
            bookImage.src = 'https://dl.airtable.com/.attachments/b542a976abd2eff3694039cc7bdbe7c1/51b858b7/unicornfaunda.png?ts=1654398641&userId=usrUSBuAFGnnFGzvL&cs=54eee2291345f081';
        }
        // Add color bar
        const barColor = card.appendChild(document.createElement('span'));
        barColor.classList.add('card__color');
        barColor.style.backgroundColor = '#' + book.color;
        // Create card content
        const cardContainer = card.appendChild(document.createElement('div'));
        cardContainer.classList.add('card__container');

        // Add book title to card div
        // const bookTitle = cardContent.appendChild(h3);
        // bookTitle.classList.add('book-title', 'card__text');
        // bookTitle.textContent = book.bookName;
    }
    myLibrary.push(book)
}


// DOM
const addButton = document.querySelector('.add-button');
const closeButton = document.querySelector('.close-button');
const submitButton = document.querySelector('.submit-button');
const cardInputDisplay = document.querySelector('.input-card');
const nameInput = document.querySelector('.input-name');
const authorInput = document.querySelector('.input-author');
const pagesInput = document.querySelector('.input-pages');
const imageInput = document.querySelector('.input-image');
const colorInput = document.querySelector('.input-color');
const mainContainer = document.querySelector('.main__container');
const card = document.querySelector('.card');


addButton.addEventListener('click', () => {
    cardInputDisplay.classList.toggle('active')
})

closeButton.addEventListener('click', () => {
    cardInputDisplay.classList.remove('active');
});

submitButton.addEventListener('click', () => {
    addBookToLibrary()
    cardInputDisplay.classList.remove('active');
});