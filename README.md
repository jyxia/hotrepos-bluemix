[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------

## Overview
This is [HotRepos](https://itunes.apple.com/app/id1142465304?mt=8) iOS App's web landing (marketing) page. The webpage is now a **React** web app deployed on Bluemix, and the link is: http://hotrepos.mybluemix.net/. The webpage is responsive, you can change the screen size to notice the changes.

## Deploy to Bluemix
* Just simply click this magic button.

  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------
* Or, use _*cf cli*_ to push this app to Bluemix manually.
  * clone this repo to your computer. `git clone`
  * `cd` navigate to _*hotrepos-bluemix*_ directory
  * open [_manifest.yml_](./manifest.yml) change `name` and `host` to *you_app_name*.
  * Run `cf push *you_app_name*`.

> **Note:** Above instructions are assuming you have installed _cf cli_ on your computer and has a Bluemix account. If you don't have any, create [Bluemix account](https://console.ng.bluemix.net/) -> Download [cf cli](https://github.com/cloudfoundry/cli/releases) -> Setup [cf tool](https://console.ng.bluemix.net/docs/cli/reference/cfcommands/index.html) and login Bluemix with _cf cli_.

## Run the app locally
* Clone this repo to your computer (`git clone`).
* `cd` into the app directory (_hotrepos-bluemix_).
* Run `npm install` to install dependencies.
* Start the development
  1. run `npm start` or `npm run start`
  2. navigate to [http://localhost:6001](http://localhost:6001) in your browser of choice.
* To lint your code,
  1. Run `npm run lint`
* To start production / build,
  1. run`npm run build`. Production files are all generated into [dist](./dist).
  2. wait until `webpack` finishes building all files, then run `npm run web-server` to start node service.
  3. navigate to [http://localhost:6001](http://localhost:6001) in the browser.
* To clean `dist`
  1. run `npm run clean`.
* If you have made changes to the code and want to **deploy to Bluemix**,
  * run `npm build`.
  * after the build is finished, run `cf push`.

> **Note:** In `dev` mode, `redux-logger` and webpack hot modules are included for development purpose. In `build` or `prod` mode, these dev tools are removed and `dist` folder gets cleaned every time.

## Development Tools
#### JS framework: React and Redux
* See [src](./src) folder for the code and the project structure.
* `Redux` is only used for demonstrating my Redux skill. Although a lot of React components are created, there are not many states changes in the components. This is really a very static page.

#### CSS
* `bootstrap` is used for css framework (only bootstrap.css is used).
  * The page is fully responsive. The look on the phone, I think, is nicer than on a wide computer screen.
* `autoprefixer` takes care of `css` prefixers across different browsers.

#### Web server
* Host the webpages and static files, particularly HotRepos iOS app's screenshots that are displayed on the webpage.
* Use `Express` to create a simply backend API for retrieving the `urls` of screenshot images (image file paths).
 * `/api/images` is the route.
> **Note:** Doing this is only for demonstrating the *`actions` and `states` changes* in `Redux` on the client side. In real life, probably, you don't want to do like this.

#### Babel and Linting
* Babel is used to transpile ES6 to ES5.
* Use *eslint* to make sure the code is linted. Here [.eslintrc](./eslintrc) is the list of rules that are used in this project.

## Dependencies
All dependencies are declared in [package.json](./package.json). Special thanks to *MIT-licenced* React component: [react-slick](https://github.com/akiran/react-slick). It made the implementation of "slide show" easy.

## Comments
If you have any questions or troubles deploying to Bluemix, please contact me.

## Bluxmix login
1. On your terminal, run this command:
```
  cf api https://api.ng.bluemix.net
```
2. After you run following command, you will see a promote to ask you input your username and password,
```
  cf login
```
