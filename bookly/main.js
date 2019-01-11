// global variables
const bookList = document.querySelector('#book-list ul');
const addList = document.querySelector('#add-book button');
let bookListArray = [];
const hide = document.querySelector('#hide');
const list = document.querySelector('#list');
const searchValue = document.querySelector('#search-books input');
const books = JSON.parse(localStorage.getItem('bookList')) || ['The Lord of the Rings Trilogy', 'A Game of Thrones'];
const enterBookName = document.getElementById('enterText');

// display() function for display bookist
function displayBooks() {
	books.forEach((book, i) => {
		bookListArray.push(`<li><span class="name">${book}</span>
												<span class="delete" data-id=${i} >delete</span></li>`);
	});
	bookList.innerHTML = bookListArray.join('');
}
displayBooks();

// when clicked "add" botton then fire "click" event and add booklist and display all book list
addList.addEventListener('click', (event) => {
	event.preventDefault();
	books.push(enterBookName.value);
	localStorage.setItem('bookList', JSON.stringify(books));
	bookListArray = [];
	displayBooks();
	enterBookName.value = '';
});

// deleteBook function for delete booklist item and call displayBook function
function deleteBook(e) {
	const bookId = e.target.dataset.id;
	bookListArray = [];
	displayBooks();
	if (e.target.lastChild.className === 'delete') return;
	books.splice(bookId, 1);
	localStorage.setItem('bookList', JSON.stringify(books));
}
// add 'click' event on delete button and call 'deleteBook' function
bookList.addEventListener('click', deleteBook);

// hide booklist and display hidden book list function
function hidden() {
	if (hide.checked === true) {
		list.style.display = 'none';
	} else {
		list.style.display = 'block';
	}
}
// add 'click' event on hiddeclick box and call 'hidden' function
hide.addEventListener('click', hidden);

// 'search' function for searching booklist
function search(e) {
	const elementLi = document.querySelectorAll('ul li');
	elementLi.forEach((elm) => {
		if (!elm.innerText.toLowerCase().includes(e.target.value)) {
			elm.style.display = 'none';
		} else {
			elm.style.display = 'block';
		}
	});
}
// add 'keydown' event on search box and call 'search' function
searchValue.addEventListener('keydown', search);
