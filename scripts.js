console.log("Sanity Check");

function handleDrag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function handleDrop(e){
    //gets reference to element being dragged
    var data = e.dataTransfer.getData("text");
    //adds dragged elememnt to target
    var element = document.getElementById(data);
    var target = document.getElementById("responses");
    
  //This does not stop two images from going in the same place
    
      e.target.appendChild(element);
      e.preventDefault();

}

//this function is called when the submit button is pressed
function lesson() {
  //counter used to keep track of score
  var count = 0;
  var length = document.getElementById("responses").children.length;
  //loops through all answers to check them for correctness
  for (var i = 1; i <= length; i++) {
    var box = document.getElementById("answer" + i);
    var answer = box.children[0].id;
      if (answer === ("step_" + i)) {
        //turns border green if correct
        box.style.borderColor = "#00ff00";
        //adds a point to the player's score
        count ++;
        //turns border red if answer is incorrect
    } else {
      box.style.borderColor = 'red';
    }

  }
    //if all answers are correct, the video plays
    //and after one second the imaged dim by 50%
    if (count == 5) {
      videoPlay();
      setTimeout(dimImages, 1000);

    } else {
      
    }
    //calculates current score and diplays it in DOM
    currentScore(count);
    //sets the score in memory
    setScore(count);
    //returns highscore from localStorage and displays in DOM
    score();
    //marks lesson comeplete or incomplete
    lessonComplete(count, length);
    
  
}

function videoPlay() {
  var video = document.getElementById("video");
    if (video.paused) {
      video.play();   
    } else {
      video.pause();     
    }
}

function dimImages() {
  var element = document.getElementById("responses");
  element.classList.add("dim");
}

function scorePercentage(count) {
  var totalPossible = document.getElementById("responses").children.length;
  var userScore = parseFloat(count/totalPossible);
  
}

function score() {
//returns raw score from memory
  var lessonScore = localStorage.getItem("highScore");
  if (lessonScore && lessonScore > 0) {
    document.getElementById('lessonScore').innerHTML = "High score: " + lessonScore + " out of 5" ;
  } else {
    return;
  }
}

function setScore(count){
  var currentScore = count;
  var highScore = localStorage.getItem("highScore");
    if(highScore !== null) {
      if (count > highScore) {
        localStorage.setItem("highScore", currentScore);
      }
    } else {
      localStorage.setItem("highScore", currentScore);
    }
    
}

function currentScore(count) {
  document.getElementById('current').innerHTML = "Current score: " + count + " out of 5" ;
}

function lessonComplete(count, length) {
  var userScore = parseFloat(count/length);
  console.log(userScore);
  if (userScore >= 0.8) {
    document.getElementById('complete').innerHTML = "You have completed the test!";
    localStorage.setItem("complete", true);
  } else {
    document.getElementById('complete').innerHTML = "Your score was too low, please try again";
    localStorage.setItem("complete", false);
  }
}








