[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------

## Overview
The Node.js Starter demonstrates a simple, reusable Node.js web application based on the Express framework.

## Deploy to Bluemix
* Just simply click this magic button.

  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------
* Use `cf` cli to push this app to Bluemix. Assume you have installed `cf` cli on your computer, if not, please go to...
  * run `cf push`

## Run the app locally
* clone this repo to your computer
* cd into the app directory
* Run `npm install` to install the app's dependencies
* To start the development
  1. Run `npm start` or `npm run start`
  2. Navigate to http://localhost:6001 in your browser of choice.
* To lint your code
  1. Run `npm run lint`
* To start production / build
  1. Run`npm run build`. Production files are all generated into [dist](./dist).
  2. Wait until `webpack` finishes building all files, then run `npm run web-server` to start node service.
  3. Navigate to http://localhost:6001 or open `index.html` directly from [`dist`](./dist) in your browser of choice.
* To clean `dist`
  1. run `npm run clean`.

> **Note:** In `dev` mode, `redux-logger` and webpack hot modules are included for development purpose. In `build` or `prod` mode, these dev tools are removed and `dist` folder gets cleaned every time.

## Developement

#### JS framework: React and Redux
* See [src](./src) folder for the code and the structure.

#### CSS
* **`bootstrap`** is used for css framework
* **`autoprefixer`** takes care of `css` prefixers across different browsers.

## Dependencies
