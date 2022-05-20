//opens modal to add new books
const addBook = document.querySelector("#new");
//submits user input
const submit = document.querySelector('#submit');
//closes opened modals
const closeModal = document.querySelectorAll(".close");
//deletes selected books (currently testing with this to see if id works rather than class on book objects)
const removeBook = document.querySelector("#remove");
//the main library
const library = document.querySelector('#library');
//modal containers
const formContainer = document.querySelector("#form-container");
const bookContainer = document.querySelector("#book-container");
//modals
const formModal = document.querySelector("#form-modal");
const bookModal = document.querySelector("#book-modal");

//radio buttons
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const radioResult = document.querySelector('#radio-result');

//modal toggles
addBook.addEventListener('click', () => {
    formContainer.classList.add('show');
});

closeModal.forEach((modal) => {
    modal.addEventListener('click', () => {
        formContainer.classList.remove('show');
        bookContainer.classList.remove('show');
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
    });
});

let myLibrary = [];

//user toggle for reading the book
let radioVal;
let radioBool = false;

function Book(title, author, pages, read) {
    this.title = `Title: ${title}`;
    this.author = `Author: ${author}`;
    this.pages = `Page Count: ${pages}`;
    this.read = read;
}

//this toggles the user's read status for the individual books both in the UI and the array
radioResult.addEventListener('click', () => {
    const title = document.getElementById('book-title');
    myLibrary.forEach((obj) => {
    if (radioBool === true && obj.title === title.textContent) {
        radioVal = 'I haven\'t read the book';
        obj.read = radioVal;
        radioBool = false
        console.log(myLibrary);
        return radioResult.textContent = radioVal;
    } else if (radioBool === false && obj.title === title.textContent) {
        radioVal = 'I have read the book';
        obj.read = radioVal;
        radioBool = true;
        console.log(myLibrary);
        return radioResult.textContent = radioVal;
    }
    });
    if (radioResult.textContent !== 'I have read the book') radioResult.style.backgroundColor = 'red';
    if (radioResult.textContent === 'I have read the book') radioResult.style.backgroundColor = 'green';
})

const form = document.querySelector('#add-book');

form.addEventListener("change", () => {
    submit.disabled = !form.checkValidity()
});

//submits user info to constructBook function
submit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    //the next variable allows for the formatted string to work
    const formattedTitle = `Title: ${title}`;
    
    //the following give the radio button values to the modal
    if (yes.checked) radioBool = true;
    if (yes.checked) radioVal = 'I have read the book';
    if (no.checked) radioBool = false;
    if (no.checked) radioVal = 'I haven\'t read the book';


    function createButton(index) {
        const btn = document.createElement('button');
        btn.classList.add('books');
        btn.setAttribute('id', formattedTitle);
        btn.textContent = index;
        const bookIcons = ["url('images/book01.png')", "url('images/book02.png')", "url('images/book03.png')"];
        const randomNum = Math.floor(Math.random() * bookIcons.length);
        btn.style.backgroundImage = bookIcons[randomNum];
        btn.style.backgroundSize = 'cover';
        btn.style.width = '100px'
        return btn;
    }

    constructBook(title, author, pages, radioVal);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    no.checked = true;
    
    library.appendChild(createButton(title));
    
    formContainer.classList.remove('show');
    submit.disabled = true;

});



//constructs book, adds to array
function constructBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

library.addEventListener('click', function(e) {
    if (e.target.classList.contains('books')) {
        const title = document.getElementById('book-title');
        const author = document.getElementById('book-author');
        const pages = document.getElementById('book-pages');
        const radio = document.getElementById('radio-result');

        myLibrary.forEach((obj) => {
            if (obj.title === e.target.id) {
                title.textContent = obj.title;
                author.textContent = obj.author;
                pages.textContent = obj.pages;
                radio.textContent = obj.read;
            }
        })
        if (radioResult.textContent !== 'I have read the book') radioResult.style.backgroundColor = 'red';
        if (radioResult.textContent === 'I have read the book') radioResult.style.backgroundColor = 'green';
        bookContainer.classList.add('show');
    }
})

//this event handler deletes the UI element and the corresponding object from the array
removeBook.addEventListener('click', () => {
    const title = document.getElementById('book-title');
    const btn = document.querySelectorAll('.books');
    btn.forEach((book) => {
        if (book.id === title.textContent) {
            book.remove();
        }
    })
    myLibrary.forEach((obj) => {
        if (obj.title === title.textContent) {
            
            myLibrary.splice(deleteBook(), 1);
        }
    })
    console.log(myLibrary);
    bookContainer.classList.remove('show');
});


function deleteBook() {
    const title = document.getElementById('book-title');
    const index = myLibrary.findIndex(obj => obj.title === title.textContent);

    return index
}