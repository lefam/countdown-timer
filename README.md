# React Count Down Timer
Developed by Leonel Machava <leonelmachava@gmail.com>

## Overview

This is a React app bootstraped using CRA (create-react-app).

## Demo

Please follow this link https://leonel-countdown.netlify.app/ to see the app in action.

## Screenshots

![Normal](/public/normal-screenshot.png?raw=true "Normal")

![Halfway non-critical](/public/halfway-normal-screenshot.png?raw=true "Halfway non-critical")

![Halfway critical](/public/halfway-screenshot.png?raw=true "Halfway critical")

![Time is up](/public/timesup-screenshot.png?raw=true "Time is up")

## Getting started

We should first install all node modules using the command below:

```
npm install
```

Then to open the app (in development mode):

```
npm start
```

Please note that the command above will spin a browser session and run the app there.

When you are prepared to deploy the app, you can build the app, and host the output ./build folder.

```
npm run build
```

## Deploying to Netlify

```
npm install netlify-cli -g
netlify deploy
```

Choose *build* as the path to deploy.
