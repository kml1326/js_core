var questionArray = [
  "What is the capital of Australia?",
  "What is the capital of Liberia?",
  "What is the capital of Taiwan?",
  "What is the capital of Japan?",
  "What is the capital of China?",
  "What is the capital of Turkey?",
  "What is the capital of Colombia?",
  "What is the capital of India?"];


var answerArray = [
  ["Canberra", "Melbourne", "Sydney", "Darwin"],
  ["Arthington","Monrovia","Tuzon","Marshall"],
  ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
  ["Kyoto","Hiroshima","Tokyo","Osaka"],
  ["Hong Kong", "Macau", "Shanghai", "Beijing"],
  ["Ankara","Istanbul","Antalya","Bursa"],
  ["Medellin", "Bogota", "Cartagena", "Cali"],
  ["Mumbai","Hyderabad","Bangalore","New Delhi"]
];

var correctAnswers = [
  "A. Canberra",
  "B. Monrovia",
  "C. Taipei",
  "C. Tokyo",
  "D. Beijing",
  "A. Ankara",
  "B. Bogota",
  "D. New Delhi"];



  var startQuiz = document.querySelector(".start-quiz");
  var wrapper = document.querySelector(".wrapper");
  var interval;


function action() {
  display();
  interval = setInterval(action, 1000);
}



function correctAnswer() {
     wrapper.innerHTML = `<p class="question">Correct</p>
     <div><img src="1.png" class="correct"></div>`
}

function wrongAnswer(ans) {
     wrapper.innerHTML = `<p class="question">${questionArray[i]}</p>
     <p class="question">Correct Answer : ${ans}</p>
     <div><img src="2.png" class="correct"></div>`
     console.log("clearInterval");
}

function checkAns(e) {
  var anserClass = e.target.className;
  if(anserClass =="ans"){
    var correctAns = e.target.innerHTML;
    var answer = correctAnswers[i];
      if(correctAns == answer) {
        correctAnswer();
      } else {
        wrongAnswer(answer);
      }
 }  
}


// var seconds = 31;
// function timeRemaining() {
//     seconds -= 1;
//     // if(seconds < 1) { 
//     //   seconds = 30;
//     //   timeRemaining();
//     // } else{
//     //   return seconds;
//     // } 
//     return seconds;
// }
// var time = setInterval(timeRemaining,1000);



 var i = -1;

function display() {
     i = i+1;
      if(i > questionArray.length-1) {
      wrapper.innerHTML = `<div class="start-quiz"><p>Again Start Quiz</p></div>`
       clearInterval(interval);
    }
   wrapper.innerHTML = `<p class="time-remaining">Time Remaining : ${i}</p>
    <p class="question">${questionArray[i]}</p>
    <div class="answer-opt">
      <div class="ans">A. ${answerArray[i][0]}</div>
      <div class="ans">B. ${answerArray[i][1]}</div>
      <div class="ans">C. ${answerArray[i][2]}</div>
      <div class="ans">D. ${answerArray[i][3]}</div>
    </div>`
 }

  startQuiz.addEventListener("click", action);
  wrapper.addEventListener("click", checkAns);