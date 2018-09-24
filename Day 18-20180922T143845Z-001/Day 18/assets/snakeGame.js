var board = document.querySelector('.board');
var playBtn = document.querySelector('.play-btn')

for(i=0 ; i<40; i++) {
	for(j=0; j<30; j++) {
		board.innerHTML = board.innerHTML + `<div class="cell" data-row=${i}  data-col=${j}></div>`;

	}
}