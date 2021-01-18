# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run This Project Locally 
- Must have node installed
- clone the repo to your local machine (git clone <github_url>)
- cd into the project directory
- run 'npm install' in your bash terminal to install dependencies.
- run 'npm start' in your bash terminal to run the app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Dependencies

- [Axios](https://www.npmjs.com/package/axios) for sending API calls.
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variables.
- [node-sass](https://www.npmjs.com/package/node-sass) for styling.
- [ant design library](https://ant.design/) for some UI components (search input)
- [React-Cookies](https://www.npmjs.com/package/react-cookie)for cookie handling.

## About The Shoppies
#### Searching:
> When you type in the search field ther is a 2s delay on auto submission. (ran out of time to add a loading spinner). Then your search results will be populated. 
> * NOTE: You typically have to enter at least 3 chars to get a response form the api, it's just how the api works, otherwise the response is too big and will not be sent.

#### Nominations
> You can click on the 'Nominate' button in the search results to add a nomination to the Nominations display. Once added the 'Nominate' button will be disabled untill removed from the Nominations display via the 'Remove' button. 
> As soon as you nominate a movie it is stored locally in a cookie named "nominationsCookie' via the React-Cookies NPM package. Once the page is loaded or reloaded the cookie will be checked. If the cookie is set then the nominations will be populated from the cookie thus saving your nominations should you refresh or leave the page.
> You can remove a nomination by clicking the 'remove' button in the nominations display. This will update the cookie and remove the nomine from the list and re-enable the 'nominate' button in the search results.

#### NOTES
> I had some issues when comparing the nominations list to the currently nominated movie in order to decide weather to render a disabled button or not in the results. I was cheking using the '.includes() method but later it broke, and I ran out of time to figure it out, so I did some hacky things with a foreach() to add a 'dis' property to each movie so that I caould use that for comparison.
> Also, I want to mention that I am not a designer what-so-ever! So, I chose to focus on other things instead the design aspects. I did however manage to make it basically mobile responsive.