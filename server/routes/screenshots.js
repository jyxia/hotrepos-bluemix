var cfenv = require('cfenv');

var data = [
  {
    'id': 0,
    'description': 'screenshot-1',
    'imageurl': '/public/assets/images/app-screen-1.png'
  },
  {
    'id': 1,
    'description': 'screenshot-2',
    'imageurl': '/public/assets/images/app-screen-2.png'
  },
  {
    'id': 2,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-3.png'
  },
  {
    'id': 3,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-4.png'
  },
  {
    'id': 4,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-5.png'
  },
  {
    'id': 5,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-6.png'
  },
  {
    'id': 6,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-7.png'
  },
  {
    'id': 7,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-8.png'
  },
  {
    'id': 8,
    'description': 'screenshot-3',
    'imageurl': '/public/assets/images/app-screen-9.png'
  }
];

function searchRequest(req, res) {
  var appEnv = cfenv.getAppEnv();
  var imageList = data.map(function(image) {
    return {
      description: image.description,
      id: image.id,
      url: appEnv.url + image.imageurl
    }
  });
  res.send(imageList);
}

module.exports = function(app) {
  app.get('/api/images/', searchRequest);
};
