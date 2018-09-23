var wrapper = document.querySelector('.wrapper');


for(i=0 ; i<25; i++) {
	for(j=0; j<25; j++) {
		wrapper.innerHTML = wrapper.innerHTML + `<div class="cell" data-row=${i}  data-col=${j}></div>`;
		// console.log(i, j);
	}
}