var boxs = document.querySelectorAll('.box');
var container = document.querySelector('.container');
var innerBox = document.querySelector('.inner-box');
// var input = document.querySelector('.input')

// input.addEventListener('keydown', invalue);
// function invalue(e) {
// 	console.log(e);
// }

for(const box of boxs) {
	box.addEventListener('dragstart', dragStart);
	box.addEventListener('dragend', dragEnd);
}

container.addEventListener('dragover', dragOver);
container.addEventListener('dragenter', dragEnter);
container.addEventListener('dragleave', dragLeave);
container.addEventListener('drop', dragDrop);
var dragTemp;
var dropTemp;


function dragStart(e) {
	e.target.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
	dragTemp = this;
	console.log(dragTemp)
}

function dragEnd(e) {
	e.target.className = 'box';
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
}

function dragLeave(e) {
	// this.className = 'box';
}

function dragDrop(e) {
	for (const box of boxs) {
		this.append(box);
		dropTemp = e.target.innerText;
		console.log(dropTemp, "dropTemp");
		e.target.innerText = dragTemp.innerText;
		dragTemp.innerText = dropTemp;

	}
}





