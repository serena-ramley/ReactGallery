## React Gallery

You can try the app interactively at https://serena-ramley.github.io/ReactGallery/

Search by restaurant name, food, or discount days to find a restaurant of interest in Greater Vancouver offering the food you want at a discount on the day you can come! Note: All restaurants in this app are fictional

## Notable Technical Features of this App

0. Creating a JSON file with integers, strings and arrays (db.json)
1. Fetching information from a REST API, https://my-json-server.typicode.com/serena-ramley/ReactGallery/cards and parsing the JSON file
2. Creating a loading state while retrieving information from the API (App.js)
3. Using states and updating states upon an event, i.e. text written in a search box (Search.js and App.js)
4. Using props and mapping information from JSON to create multiple components with common attributes (CardList.js)
5. Using the tachyons package as a CSS toolkit (https://tachyons.io/)
6. Creating a generic component that can be populated using props.
7. Error handling (compatible with React Version 16 +)

"When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”."
https://reactjs.org/docs/components-and-props.html

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, using the Command Prompt, Windows PowerShell/Terminal or similar, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### tachyons

To use tachyons in other projects:
npm install tachyons

package.json already includes tachyons in this project
