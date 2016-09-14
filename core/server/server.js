var express = require("express"),
  path = require("path");
var  config = require("./config");
var app = express();
var request = require('request'),
  server;

app.get('/representatives/:state',
  findRepresentativesByState,
  jsonResponse
);

app.get('/senators/:state',
  findSenatorsByState,
  jsonResponse
);

function findRepresentativesByState(req, res, next) {
  console.log('finding rep', req.params.state);
  var url = 'http://whoismyrepresentative.com/getall_reps_bystate.php?state={0}&output=json'.replace('{0}', req.params.state);
  request(url, handleApiResponse(res, next));
}

function findSenatorsByState(req, res, next) {
  console.log('finding senator');
  var url = 'http://whoismyrepresentative.com/getall_sens_bystate.php?state={0}&output=json'.replace('{0}', req.params.state);
  request(url, handleApiResponse(res, next));
}

function handleApiResponse(res, next) {
  console.log('hit handleApiResponse');
  return function (err, response, body) {
    if (err || body[0] === "<") {
      res.locals = {
        success: false,
        error: err || 'Invalid request. Please check your state variable.'
      };
      return next();
    }
    res.locals = {
      success: true,
      results: JSON.parse(body).results
    };
    return next();
  };
}

function jsonResponse(req, res, next) {
  console.log('hit jsonResponse');
  return res.json(res.locals);
}

app.use(express.static(path.resolve("public/")));

app.get(/^(?!.*(images))/, function (req, res) {


  res.sendFile(path.resolve("public/index.html"));

});


server = app.listen(3000, function () {
  var host = server.address().address,
    port = server.address().port;

  console.log('API listening at http://%s:%s', host, port);
});

