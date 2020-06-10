# Cool Chip Check-In Frontend
Envoy front-end take-home challenge

## Overview
This is a basic visitor sign-in UI built on top of React. For development, it makes use of both TypeScript and SCSS for JS/CSS and is all compiled together via Webpack. 

## Dependencies
- NodeJS

## Get Started
Once the repo has been cloned or downloaded, cd into the directory and run...

`npm run start` 

...to get started. This will run both `npm install` as well as `npx webpack` (in watch mode) and generate the `/dist` folder with the appropriate files. From there, you can open the `index.html` file in the root directory to view the application. No webserver has been configured for this project.

## Tests
Since tests were a required part of this exercise, I added Jest and Testing Library to the build and configured them to work with ts-jest. You can run tests by running...

`npm run test`

Mocks for the API calls can be found in the `__mocks__` directories in the project and are used to simulate the network requests.

## Implementation Notes
- React isn't always the best option, but it seems like a perfect use case for this application, as it has a need for state management and constant re-rendering.
- I prefer to use TypeScript for projects which rely on rigid data structures with information being passed through components. The compiler makes it easy to tell where things go wrong immediately.
- The starter styles were done with SCSS, so I brought those into this project and added a loader to compile them.
- I kept FontAwesome for the icons, but removed Tailwind and replaced it with a combination of a CSS reset & CSS grid. Grid browser support isn't 100%, but for this exercise it cuts down heavily on the amount of HTML & CSS needed.
- A webserver is preferable to serving from the filesystem, but didn't feel necessary for this exercise.
- For a production app, I likely would have leveraged a Modal library vs coding it myself, to make use of things like focus-trapping, accessibility and scroll-locking. However, I wanted to use as much of my own code as possible for this and not bloat the exercise.
- Similarly, for a production app, I would likely include more robust logic around the API requests to handle edge cases such as when they are cancelled, slow or even return out of order. 
