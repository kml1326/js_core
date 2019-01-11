var boxs = document.querySelectorAll('.box');
var innerBox = document.querySelector('.inner-box');


innerBox.addEventListener('dragstart', dragStart);
innerBox.addEventListener('dragend', dragEnd);

for(const box of boxs) {
	box.addEventListener('dragover', dragOver);
	box.addEventListener('dragenter', dragEnter);
	box.addEventListener('dragleave', dragLeave);
	box.addEventListener('drop', dragDrop);
}

function dragStart(e) {
	e.target.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
	console.log(e, "start")
}

function dragEnd(e) {
	e.target.className = 'inner-box';
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
	// this.className = 'box';
	console.log(e, "start")

	this.append(innerBox);
}










// box.addEventListener('mousedown', ()=> {
// 	container.appendChild(box);
// 	box.style.position = 'absolute';
// 	box.style.Zindex = 1000;
// 	box.style.width = '100%';

// 	moveAt(event.pageY);

// 	function moveAt(pageY) {
// 		box.style.top = pageY - box.offsetHeight / 2 + 'px';
// 	}

// 	function onMouseMove() {
// 		moveAt(event.pageY);
// 	}

// 	container.addEventListener('mousemove', onMouseMove);

// 	box.addEventListener('mouseup', ()=> {
// 		box.removeEventListener('mousemove', onMouseMove);
// 		// box.addEventListener('mouseup', function() => {
// 		// 	return null;
// 		// });
// 	})

// 	// box.addEventListener('mousedown' moveAt);

// 	// box.addEventListener('dragstart', function() => {
// 	// 	return true;
// 	// })

// });