
var screen = document.querySelector(".window");
var equationArray = [];

 document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {

      if(event.target.textContent == "AC") {
        equationArray = [];
        screen.innerHTML = equationArray;
      } else {

      if(event.target.textContent == "CE") {
        equationArray.pop();
        console.log(equationArray);
        screen.innerHTML = equationArray.join('');
      } else {
    
      if(event.target.textContent == "=") {
        var replaceOperator = equationArray.join('');
            replaceOperator = replaceOperator.replace(/÷/g, '/');
            replaceOperator = replaceOperator.replace(/×/g, '*');
        screen.innerHTML = eval(replaceOperator);
      } else {
        equationArray.push(event.target.textContent);
        screen.innerHTML = equationArray .join('');
      }
    }
   }
    }
  });