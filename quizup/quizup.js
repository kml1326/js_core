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
  var timeRemaining = document.querySelector(".time-remain");
  var areaOfQues = document.querySelector(".question");
  var areaOfAnswers = document.querySelector(".ans-opns");
  var i = -1;

function action(e) {
  startQuiz.style.display = "none";
  timeRemaining.style.display = "block";
  displayQuiz();
}

function displayQuiz() {
  i += 1;
  areaOfQues.innerHTML = questionArray[i];
  areaOfAnswers.innerHTML = `<div class="ans">A. ${answerArray[i][0]}</div>
                             <div class="ans">B. ${answerArray[i][1]}</div>
                             <div class="ans">C. ${answerArray[i][2]}</div>
                             <div class="ans">D. ${answerArray[i][3]}</div>`
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

function correctAnswer() {
    areaOfAnswers.innerHTML = `<p class="result">Correct</p>
    <div><img src="1.png" class="result_img"></div>`
}

function wrongAnswer(ans) {
  areaOfAnswers.innerHTML = `<p class="result">Correct Answer : ${ans}</p>
  <div><img src="2.png" class="result_img"></div>`
}










startQuiz.addEventListener("click", action);
areaOfAnswers.addEventListener("click", checkAns);



