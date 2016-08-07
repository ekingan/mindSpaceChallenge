# Video Sequencing Interview Challenge

![ScreenShot](https://github.com/ekingan/mindSpaceChallenge/blob/master/assets/codeChallenge.png)

## What I did: 

* There are 5 images on the left side that relate to the video in the center
* The player is to drag and drop the images in to the yellow boxes below the video
* Once the player has completed their task, they click the "submit" button to see their score
* The correct answers will show a green border
* The incorrect answers will show a red border
* If all of the answers are correct, the placeholders will dim to 50% (after a 1 second time delay) and the video plays.
* If the player gets 80% of the answers correct, the lesson is marked completed.

### Additional functionality:

* Mousing over a clip changes the static image to an animated gif
* When dragging the clip, the image becomes static. 

## Challenges

Instead of using the LMS API, I used localStorage to save the user's high score.
The current score and the high score will be displayed on the screen each time the user plays the game.
I tried to model my own methods after the methods described in the LMS API documentation. 

##