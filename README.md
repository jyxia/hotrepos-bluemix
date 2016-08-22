[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------

## Overview
This is [HotRepos](https://itunes.apple.com/app/id1142465304?mt=8) iOS App's web landing page. It is now a **React** web app deployed on Bluemix, and the link is: http://hotrepos.mybluemix.net/

## Deploy to Bluemix
* Just simply click this magic button.

  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------
* Or, use `cf` cli to push this app to Bluemix manually.
  * clone this repo to your computer. `git clone`
  * navigate to `hotrepos-bluemix`
  * open [`manifest.yml`](./mainifest.yml) change `name` and `host` to *you_app_name*.
  * Run `cf push *you_app_name*`.

> **Note:** Above instructions are assuming you have installed `cf` cli on your computer and has a Bluemix account. If you don't have any, create [Bluemix account](https://console.ng.bluemix.net/) -> Download [cf cli](https://github.com/cloudfoundry/cli/releases) -> Setup [cf tool](https://console.ng.bluemix.net/docs/cli/reference/cfcommands/index.html).

## Run the app locally
* clone this repo to your computer (`git clone`)
* cd into the app directory (hotrepos-bluemix)
* run `npm install` to install the app's dependencies
* start the development
  1. run `npm start` or `npm run start`
  2. navigate to http://localhost:6001 in your browser of choice.
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
* `Redux` is only used for demonstrating my Redux skill. Although a lot of React components are created, there are not many states changes in the components. This is really a very static page.

#### CSS
* `bootstrap` is used for css framework
* `autoprefixer` takes care of `css` prefixers across different browsers.

### Web server
* Use `Express` create a simply backend API for retrieving screenshot images.
* Doing this is only for demonstrating the *`actions` and `states` chages* in `Redux`. In real life, probably, you don't want to do like this.

## Dependencies
All dependencies are declared in [`package.json`](./package.json). Special thanks to *MIT-licenced* React component: [`react-slick`](https://github.com/akiran/react-slick). It made the implementation of slide show easily.  
