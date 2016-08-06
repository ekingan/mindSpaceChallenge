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
    console.log(target.innerHTML);
    //Stop two imaged from going in the same place
    if (target.innerHTML !== "IMG") {
      e.target.appendChild(element);
      e.preventDefault();
  }
}
//refactor
function score() {
  var count = 0;
  var firstBox = document.getElementById("answer1");
  var firstAnswer = firstBox.children[0].id;
    if (firstAnswer == "step_1") {
      firstBox.style.borderColor="#00ff00";
      count ++;
    } else {
      firstBox.style.borderColor="red";
    }
  var secondBox = document.getElementById("answer2");
  var secondAnswer = secondBox.children[0].id;
    if (secondAnswer == "step_2") {
      secondBox.style.borderColor="#00ff00";
      count ++;
    } else {
      secondBox.style.borderColor="red";
    }
    var thirdBox = document.getElementById("answer3");
    var thirdAnswer = thirdBox.children[0].id;
      if (thirdAnswer == "step_3") {
        thirdBox.style.borderColor="#00ff00";
        count ++;
      } else {
        thirdBox.style.borderColor="red";
      }
    var fourthBox = document.getElementById("answer4");
    var fourthAnswer = fourthBox.children[0].id;
      if (fourthAnswer == "step_4") {
        fourthBox.style.borderColor="#00ff00";
        count ++;
      } else {
        fourthBox.style.borderColor="red";
      }
    var fifthBox = document.getElementById("answer5");
    var fifthAnswer = fifthBox.children[0].id;
    console.log(fifthAnswer);
      if (fifthAnswer == "step_5") {
        fifthBox.style.borderColor="#00ff00";
        count ++;
      } else {
        fifthBox.style.borderColor="red";
      }
    if (count == 5) {
      videoPlay();
      setTimeout(dimImages, 1000);

    } else {
      console.log(count);
    }

    scorePercentage(count);
  
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
  console.log(userScore);
  
}




