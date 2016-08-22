var express = require('express');
var cfenv = require('cfenv');
var path = require('path');
var routes = require('./routes/screenshots');
// create a new express server
var app = express();
var isDevelopmentEnvironment = (process.env.NODE_ENV !== 'production');

if (isDevelopmentEnvironment) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('../webpack.config');

  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// serve the files out of ./public as our main files
app.use(express.static(path.resolve('./dist')));
app.use('/public', express.static(path.resolve('./public')));

app.get('/', function(req, res) {
  if (isDevelopmentEnvironment) {
    res.sendFile(path.resolve('./src/index.html'));
  } else {
    res.sendFile(path.resolve('./dist/index.html'));
  }
});

routes(app);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
var port = appEnv.port || 3000;

// start server on the specified port and binding host
app.listen(port, '0.0.0.0', function() {
  console.info('==> 🌎  Listening on port %s. Open up ' + appEnv.url + ' in your browser.', port);
});
