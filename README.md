[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------

## Overview
This is [HotRepos](https://itunes.apple.com/app/id1142465304?mt=8) iOS App's web landing page.

## Deploy to Bluemix
* Just simply click this magic button.

  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------
* Use `cf` cli to push this app to Bluemix.
  * Clone this repo to your computer. `git clone`
  * Navigate to `hotrepos-bluemix`
  * Run `cf push`

> **Note:** Above instructions are assuming you have installed `cf` cli on your computer and has a Bluemix account. Download [cf cli](https://github.com/cloudfoundry/cli/releases). Create [Bluemix account](https://console.ng.bluemix.net/). Setup [cf tool](https://console.ng.bluemix.net/docs/cli/reference/cfcommands/index.html).

## Run the app locally
* clone this repo to your computer
* cd into the app directory
* Run `npm install` to install the app's dependencies
* start the development
  1. Run `npm start` or `npm run start`
  2. Navigate to http://localhost:6001 in your browser of choice.
* lint your code
  1. Run `npm run lint`
* start production / build
  1. run`npm run build`. Production files are all generated into [dist](./dist).
  2. wait until `webpack` finishes building all files, then run `npm run web-server` to start node service.
  3. navigate to http://localhost:6001 or open `index.html` directly from [`dist`](./dist) in your browser of choice.
* clean `dist`
  1. run `npm run clean`.

> **Note:** In `dev` mode, `redux-logger` and webpack hot modules are included for development purpose. In `build` or `prod` mode, these dev tools are removed and `dist` folder gets cleaned every time.

## Developement
#### JS framework: React and Redux
* See [src](./src) folder for the code and the structure.
* `Redux` is only used for demo purpose. There is not too many state changes in this simple web app.

#### CSS
* **`bootstrap`** is used for css framework
* **`autoprefixer`** takes care of `css` prefixers across different browsers.

### Web server
* Create a simply backend API for retrieving screenshot images.
* Doing this is only for demonstrating the *`actions`* in `Redux`. In real life, probably, you don't want to do that.

## Dependencies
