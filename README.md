# Video Sequencing Interview Challenge

![ScreenShot](https://github.com/ekingan/mindSpaceChallenge/blob/master/assets/codeChallenge.png)

## What I did: 

* There are 5 images on the left side that relate to the video in the center
* The player is to drag and drop the images into the yellow boxes below the video
* Once the player has completed their task, they click the "submit" button to see their score (I realize this deviates from the instructions but I thought it would be a better user experience)
* The correct answers will show a green border
* The incorrect answers will show a red border
* If all of the answers are correct, the placeholders will dim to 50% (after a 1 second time delay) and the video will play.
* If the player gets 80% of the answers correct, the lesson is marked completed. Otherwise, it is marked incompelete and the player is prompted to retake the test.

### Additional functionality:

* Mousing over a clip changes the static image to an animated gif
* When dragging the clip, the image becomes static. 

## Challenges

Instead of using the LMS API, I used localStorage to save the user's high score.
The current score and the high score will be displayed on the screen each time the user plays the game. 
The status of the game is saved to localStorage and is displayed in the DOM as complete or incomplete.
I tried to model my own methods after the methods described in the LMS API documentation. 

## If I had more time

If I had more time to work on this, I would make it impossible for a user to drop an image on a placeholder that already had an image. 
I would also work on the styling.

##Thanks! This was really fun!