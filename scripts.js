console.log("Sanity Check");

function handleDrag(e) {
  e.dataTransfer.setData("text", e.target.id);
}
function handleDrop(e){
    //gets reference to element being dragged
    var data = e.dataTransfer.getData("text");
    console.log("data:", data);
    //adds dragged elememnt to target
    var element = document.getElementById(data);
    console.log("element:" , element);
    //Stop two imaged from going in the same place
    if (!element.hasChildNodes()) {
      e.target.appendChild(element);
      e.preventDefault();

  }
}

function score() {
  var firstBox = document.getElementById("answer1");
  var firstAnswer = firstBox.children[0].id;
  console.log("firstBox : ", firstBox, "first answer: ", firstAnswer);
    if (firstAnswer == "step_1") {
      firstBox.style.borderColor="#00ff00";
    } else {
      firstBox.style.borderColor="red";
    }
  var secondBox = document.getElementById("answer2");
  var secondAnswer = secondBox.children[0].id;
    if (secondAnswer == "step_2") {
      secondBox.style.borderColor="#00ff00";
    } else {
      secondBox.style.borderColor="red";
    }
    var thirdBox = document.getElementById("answer3");
    var thirdAnswer = thirdBox.children[0].id;
      if (thirdAnswer == "step_3") {
        thirdBox.style.borderColor="#00ff00";
      } else {
        thirdBox.style.borderColor="red";
      }
    var fourthBox = document.getElementById("answer4");
    var fourthAnswer = fourthBox.children[0].id;
      if (fourthAnswer == "step_4") {
        fourthBox.style.borderColor="#00ff00";
      } else {
        fourthBox.style.borderColor="red";
      }
    var fifthBox = document.getElementById("answer5");
    var fifthAnswer = fifthBox.children[0].id;
      if (fifthBox == "step_5") {
        fifthBox.style.borderColor="#00ff00";
      } else {
        fifthBox.style.borderColor="red";
      }



  
  
}


// function handleDragStart(e) {
//     e.dataTransfer.setData("text", e.target.id);
//     // Set the drag effect to move
//     // e.dataTransfer.dropEffect = "move";
//     //Changes the clip to a static image when dragging
//     // var img = new Image(); 
//     // img.src = 'example.gif'; 
//     // e.dataTransfer.setDragImage(img, 100, 100);
// }

// function handleDragOver(e) {
//   e.preventDefault();

// }

// function handleDrop(e) {
//   //gets reference to element being dragged
//   var data = e.dataTransfer.getData("text");
//   //adds dragged elememnt to target
//   var element = document.getElementById(data);
//   e.target.innerHTML = document.getElementById(data);
//   // e.target.appendChild(element);
//   e.preventDefault();
//   //gets reference to element being dragged
//   // var data = e.dataTransfer.getData("text");
//   // //gets element
//   // e.target.innerHTML = document.getElementById(data);
//   // e.preventDefault();

//   // console.log(data);
//   // //e.target.appendChild(document.getElementById(data));
  
//   // var element = e.target.id
//   // // element.classList.remove('over');
//   // console.log("this is the id:", element);
// }
// function allowDrop(e) {
//     e.preventDefault();

// }

// function handleHoverOver(e) {
//   // e.preventDefault();
//   // e.target.value
//   // var element = document.getElementById("answers");
//   // element.classList.add('over');
  
// }

// function handleDragLeave(e) {
  
  
// }

// function handleDragEnd(e) {

// }


// // var clips = document.querySelectorAll('#clips .clip');
// // [].forEach.call(clips, function(clip) {
// //   clip.addEventListener('ondragstart', handleDragStart, false);
// //   clip.addEventListener('ondragend', handleDragEnd, false);
// // });


// // var answers = document.querySelectorAll('#answers .answer');
// // [].forEach.call(answers, function(answer) {
// //   answer.addEventListener('ondragenter', handleDragEnter, false);
// //   answer.addEventListener('ondragover', handleDragOver, false);
// //   answer.addEventListener('ondragleave', handleDragLeave, false);
// // });
