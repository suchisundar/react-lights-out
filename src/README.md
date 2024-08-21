Lights Out

Lights Out is a logic/puzzle game built using React, where the goal is to turn on all the lights on the grid. The game is played on a grid of individual cells, each of which can be lit or unlit. The puzzle is won when all of the lights are turned on.

How to Play
Click on a cell to toggle its light on or off.
Clicking a cell also toggles the light above it, to the left of it, to the right of it, and below it.
Cells on the edges or corners of the grid have fewer neighbors, so fewer lights will be toggled.
The challenge is to figure out the correct sequence of clicks to turn on all the lights on the board.

React Skills Demonstrated
This project tests and reinforces several React skills, including:

State Management: Using React's useState hook to manage the state of the game board and the win condition.
Component Design: Building modular components (Board, Cell) that interact to create the game.
Conditional Rendering: Implementing logic to display different UI elements based on the game state (e.g., displaying a "You Win!" message when all lights are on).

Event Handling: Managing click events to trigger state changes and game logic.
Algorithmic Thinking: Understanding and implementing the game mechanics, particularly the logic to flip lights and check the win condition.

Getting Started
To get started with the game, clone the repository, install the necessary packages, and run the application.

Installation:
npm install

Running the Application:
npm start


This will start the application on localhost:3000, where you can play the Lights Out game in your browser.

