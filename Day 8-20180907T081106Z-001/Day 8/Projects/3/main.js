
var backGround = document.querySelector("#background-color");
var color = ["#ff33ff", "blue", "#ffdb4d", "pink", "gray", "#00cc66","skyblue", "#0099ff"];

var n = color.length;
  backGround.addEventListener("click", () => {

    backGround.style.background = color[Math.floor(Math.random()*n)];

  });


  