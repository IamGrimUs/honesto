# Honesto web App

## Login

Accessing the app requires a first name of any user returned from the API
<https://frontend-exercise-api.netlify.app/.netlify/functions/server/users>

Currently the app is a work in progress with.

### What's working

Currently a user can login, select a user and provide feedback on the selected user. The feedback is currently stored in a persisted state <https://github.com/donavon/use-persisted-state>.

### What needs work

A bit of everything...

1. Login screen:
    1. Needs to submit on enter key along with login button
2. Site Navagation:
    1. Badges for share feedback & my feedback need to be connect to the persistant state
    2. My Feedback screen needs to be built
    3. Team feedback screen needs to be built
    4. Next Feeback Cycle needs to be hooked up to reflect changes in dates
    5. Logout link needs to be hooked up
3. Share Feedback screen:
    1. Feedback period select element needs to be hooked up to pull data by month
    2. View submission button needs to be connected and to previous submitted feedback form
4. Feedback questions:
    1. Previous button needs to change needs to be hooked up to allow for changing of feedback provided
    2. Skip button needs to pass a value of skipped for the current question
    3. Question rating stars and flag need to be hooked up
5. My Feedback screen:
    1. Whole screen needs to be built and set up to show feedback results. useFeedback has helper functions for filtering by recipeintId or by reporterId

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
