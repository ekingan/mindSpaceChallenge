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
    var tag = target.getElementsByTagName('img').length;
    console.log(tag);
    //Stop two images from going in the same place
    // if (tag< 1) {
      e.target.appendChild(element);
      e.preventDefault();
    // } else {
    //   return;
    // }
    
    
  
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
    //calculates the percentage correct
    scorePercentage(count);
    //returns highscore from localStorage and displays in DOM
    score();
    
  
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
    document.getElementById('lessonScore').innerHTML = "Your high score is " + lessonScore + " out of 5" ;
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
  document.getElementById('current').innerHTML = "Your current score is " + count + " out of 5" ;
}








