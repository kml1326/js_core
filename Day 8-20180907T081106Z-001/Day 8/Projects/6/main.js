// global variables

var bookList = document.querySelector("#book-list ul");
var addList = document.querySelector("#add-book button");
var bookListArray =[];
var hide = document.querySelector("#hide");
var list = document.querySelector("#list");
var searchValue = document.querySelector("#search-books input");
var books = ["The Lord of the Rings Trilogy", "A Game of Thrones"];
var enterBookName = document.getElementById('enterText');




// display() function for display booklist
function displayBooks(){
	books.forEach((book, i) => {
		bookListArray.push(`<li><span class="name">${book}</span>
	    				<span class="delete" data-id=${i} >delete</span></li>`);
	});
	bookList.innerHTML = bookListArray.join('');
}
displayBooks();

// when clicked "add" botton then fire "click" event and add booklist and display all book list	
addList.addEventListener("click", event => {
	event.preventDefault();
	books.push(enterBookName.value);
	bookListArray = [];
	displayBooks();
	enterBookName.value = "";
});	




// deleteBook function for delete booklist item and call displayBook function 
function deleteBook(e){
	let bookId = e.target.dataset.id;
	bookListArray =[];
	displayBooks();	
	if(e.target.lastChild.className == "delete") return;
		books.splice(bookId,1);
}
//add "click" event on delete button and call "deleteBook" function
bookList.addEventListener("click",deleteBook);




// hide booklist and display hidden book list function
function hidden() {
	if(hide.checked == true){
		list.style.display = "none";
	} else {
		list.style.display = "block";
	}	
}
//add "click" event on hiddeclick box and call "hidden" function
hide.addEventListener("click", hidden);




//"search" function for searching booklist
function search(e) {
	var elementLi = document.querySelectorAll("ul li");
	elementLi.forEach((elm, i) => {
	if(!elm.innerText.toLowerCase().includes(e.target.value)){
		elm.style.display = "none";
	} else {
		elm.style.display = "block";
	}
});
}
//add "keydown" event on search box and call "search" function
searchValue.addEventListener("keydown", search);



