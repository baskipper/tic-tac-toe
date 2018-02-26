# tic-tac-toe
Test driving Angular with a tic-tac-toe app. This follows the basic instructions for Tic-Tac-Toe; two players take turns placing their symbol
on a 3x3 grid. The first player to get three in a row either horizontally, vertically, or diagonally is the winner. If the grid is filled
with neither player getting three in a row, the game results in a draw, known as "The Cat got it". After the game ends, another one can
be started immediately by pressing the "Reset" button.

Deployed to Heroku at https://frozen-fjord-60829.herokuapp.com/

Linked-In profile: https://www.linkedin.com/in/benjamin-skipper-20a312a2/

# Requirements
NodeJS 8.9.0 or higher

Ionic 3.19.0 or higher

Cordova 8.0.0 or higher for deployment to an android device

# Local installation instructions
Clone the repo, and run `npm install`. Afterwards, run `ionic serve` to start up a local instance of the app.

# Deploying to device for testing purposes.
Attach an android device, and ensure that it has debugging mode enabled. Then, run `ionic cordova platform add android`, followed by  `ionic cordova run android --device`. 

# Testing
Run `npm test` to run all unit tests.
