

var wrapper = document.querySelector(".wrapper");
var tr =true;



for(i=1;i<=10;i++) {
	for(j=1;j<=10;j++) {
		wrapper.innerHTML = wrapper.innerHTML + `<div class="cell" data-row=${i}  data-col=${j}></div>`;
		// console.log(i, j);
	}
}

function changeClr(){
		var cells = document.querySelectorAll(".cell");
		cells.forEach(cell => {
			var row = Number(cell.dataset.row) ;
			var col = Number(cell.dataset.col);
			// console.log(row, col)
			var isOdd = (row + col) % 2 === 1;
			if (isOdd === tr) {
				cell.classList.add('clr')
			} else {
						cell.classList.remove("clr");
					
			}
		})
		tr = !tr;
	}

changeClr();
setInterval(changeClr, 500);




