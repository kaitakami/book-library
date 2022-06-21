let myLibrary = [];

// Function constructor
class Book {
    constructor(title, author, pages, color) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.color = color;
    }
}
    
// The magic
function addBookToLibrary() {
    const title = nameInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const color = colorInput.value;

    // Create new object
    const book = new Book(title, author, pages, color)

    myLibrary.push(book);

    //Validate
    if (title === '' || author === '' || pages === '') {
        alert('Fill all the blanks');
    } else {
        // Display book DOM
        const cardDisplay = mainContainer.appendChild(document.createElement('div'));
        cardDisplay.classList.add('card');
        const colorDisplay = cardDisplay.appendChild(document.createElement('span'));
        colorDisplay.classList.add('card__color');
        colorDisplay.style.backgroundColor = color;
        const cardContent = cardDisplay.appendChild(document.createElement('div'));
        cardContent.classList.add('card__content');
        const titleDisplay = cardContent.appendChild(document.createElement('h3'));
        titleDisplay.classList.add('book-title', 'card__text');
        titleDisplay.textContent = `Title: ${title}`;
        const authorDisplay = cardContent.appendChild(document.createElement('p'));
        authorDisplay.classList.add('book-author', 'card__text');
        authorDisplay.textContent = `Author: ${author}`;
        const pagesDisplay = cardContent.appendChild(document.createElement('p'));
        pagesDisplay.classList.add('book-pages', 'card__text');
        pagesDisplay.textContent = `Pages: ${pages}`;

        // Remove button DOM
        const removeButtonDisplay = cardContent.appendChild(document.createElement('i'));
        removeButtonDisplay.classList.add('fa-solid', 'fa-circle-minus', 'remove-button');

        // Remove button
        card = document.querySelectorAll('.card');
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-button')) {
                    e.target.parentElement.parentElement.remove()
                }
            })
        }

        // Clear form
        nameInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        colorInput.value = '#000000';

        // Close form
        cardInputDisplay.classList.remove('active');
    }
}



// DOM
const addButton = document.querySelector('.add-button');
const closeButton = document.querySelector('.close-button');
const submitButton = document.querySelector('.submit-button');
const removeButton = document.querySelectorAll('.remove-button');
const cardInputDisplay = document.querySelector('.input-card');
const nameInput = document.querySelector('.input-name');
const authorInput = document.querySelector('.input-author');
const pagesInput = document.querySelector('.input-pages');
const colorInput = document.querySelector('.input-color');
const mainContainer = document.querySelector('.main__container');
let card = document.querySelectorAll('.card');


addButton.addEventListener('click', () => {
    cardInputDisplay.classList.toggle('active')
})

closeButton.addEventListener('click', () => {
    cardInputDisplay.classList.remove('active');
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    addBookToLibrary();
});