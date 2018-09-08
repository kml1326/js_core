// helper functions

// tasks

// me: change the background color of box1

var box1Node = document.querySelector('#box1')
box1Node.style.background = 'orange'

// you: set the font size in box1s to 44px

box1Node.style.fontSize = '44px'

// me: shrink box2 by half

var box2Node = document.querySelector('#box2')
var styleObj = window.getComputedStyle(box2Node)
console.log(styleObj.width)
var halfWidthInt = parseInt(styleObj.width) / 2
box2Node.style.width = halfWidthInt + "px"
var halfHeightInt = parseInt(styleObj.height) / 2
box2Node.style.height = halfHeightInt + "px"

// you: double the size of box2s

var box2s = document.querySelector("#box2s");
box2s.style.height = `400px`;
box2s.style.width = `500px`;

// me: put a circle in the middle of box3

// **using .innerHTML**

var box3Node = document.querySelector('#box3')

// box3Node.innerHTML = '<div class="circle"></div>'
// **using .appendChild()**

var circleNode = document.createElement('div')
circleNode.className = 'circle'

box3Node.appendChild(circleNode)

// you: remove the circle from box3s

// **using .removeChild()**

box3Node.removeChild(circleNode)

// **using .innerHTML**

box3Node.innerHTML = ''

// me: write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".

var clearFinished = function() {
  var ulNode = document.querySelector('#box5 ul')
  var liArray = ulNode.children
  for (var i = liArray.length - 1; i >= 0; i --) {
      if(liArray[i].classList.contains('done')) {
        ulNode.removeChild(liArray[i])
      }
  }
}

// clearFinished();

// you: write a function for #box5 that takes all the completed chores and moves them to #box5s

var chore = document.querySelectorAll('.chore');

var box5s = document.querySelector("#box5s");
box5s.classList.add("chore");


// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."



  // me: i'll do this task using the .appendChild().

  // you: you'll repeat it using .innerHTML.

// me: reverse the text in #box6

// you: put <em></em> tags around the word "keep" in #box6s



