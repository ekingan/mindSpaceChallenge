# Video Sequencing Interview Challenge

![ScreenShot](https://github.com/ekingan/mindSpaceChallenge/blob/master/assets/codeChallenge.png)

* There are 5 images on the left side that relate to the video in the center
* The player is to drag and drop the images to the yellow boxes below the video
* Once the player has completed the task, they click the "submit" button to see their score
* The correct answers should show a green border
* The incorrect answers will show a red border
* If all of the answers are correct, the placeholders will dim to 50% (after a 1 second time delay) and the video in the video area plays.

### Additional functionality:

* Mousing over a clip qwill change the static image to an animated gif
* When dragging the clip, the image will be static version. 

## Challenges

Instead of using the LMS API, I used localStorage to save the user's high score.
The current score and the high score will be displayed on the screen each time the user plays the game.
I tried to model my own methods after the methods described in the LMS API documentation. 

##