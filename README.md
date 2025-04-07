Hackathon submission Video: https://youtu.be/gPONfGFqcrQ

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make and save changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `Sign & Remember - A Fun Way to Learn ASL`

This is the repository for Sign & Remember, a web-based magic memory game designed to help users learn American Sign Language (ASL) in a fun and interactive way.


### Project Structure

The main application file is App.js, which imports the necessary modules and components, and contains the main game logic.

### `Functions`

### Import Statements

The import statements at the top of the App.js file bring in necessary dependencies and components:


logo is the SVG logo file for the application.
App.css contains the CSS styles for the application.
useEffect and useState are React hooks used for managing side effects and state in functional components.
SingleCard is a component that represents a single card in the memory game.

### cardImages and cardVideos

cardImages and cardVideos are arrays of objects that represent the cards in the memory game. Each object contains a src property with the path to the image or video file, a matched property to track whether the card has been matched, and a num property to identify the card.


### App()

App() is the main function component of the application. It contains the state and logic for the memory game.


cards is the state for the current set of cards in the game.
turns is the state for the number of turns taken in the current game.
choiceOne and choiceTwo are the states for the first and second card choices in a turn.
disabled is the state to track whether card selection is currently disabled.
matching is the state to track whether the current pair of cards is a match.

### shuffleCards()

shuffleCards() is a function that shuffles the cards and resets the game state. It is called when the game starts and when the "New Game" button is clicked.


### handleChoice()

handleChoice() is a function that handles a card choice. It sets choiceOne or choiceTwo based on whether a first or second card is being chosen.


### useEffect()

There are two useEffect() hooks in the App() function:


The first useEffect() hook is used to compare the two chosen cards when both choiceOne and choiceTwo have been selected. If the cards match, their matched properties are set to true. If they don't match, the choices are reset after a delay.
The second useEffect() hook is used to start a new game when the component mounts.

### resetTurn()

resetTurn() is a function that resets the choices and increments the turn count.


### Return Statement

The return statement of the App() function renders the game interface, including the game title, "New Game" button, card grid, and turn count.


### Usage

To use this application, clone the repository and install the necessary dependencies. Then, start the application using your preferred method (e.g., npm start or yarn start). The game will open in your default web browser.


### Extra Resources

Figma: [https://www.figma.com/] (https://www.figma.com/)

A tool used for designing UI
Building for Everyone: [https://design.google/library/building-for-everyone] (https://design.google/library/building-for-everyone)

Google’s Head of Product Inclusion & Equity shares an excerpt from her recent book
Web apps and accessibility:
[https://www.youtube.com/watch?v=1A6SrPwmGpg](https://www.youtube.com/watch?v=1A6SrPwmGpg)


How to start a Full Stack Application:  
[https://youtube.com/playlist?list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&si=RgEVuulcSp1dHltR]
(https://youtube.com/playlist?list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&si=RgEVuulcSp1dHltR)

[https://www.youtube.com/watch?v=K8YELRmUb5o&t=1383s]
(https://www.youtube.com/watch?v=K8YELRmUb5o&t=1383s)
