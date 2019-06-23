var express = require("express");
var oneLinerJoke = require("one-liner-joke");

var app = express();
var path = require("path");
var port = process.env.PORT || 4000;

app.set('port', port);
app.use(express.static(path.join(__dirname, '/')));

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/public/html/index.html"))
});

// app.get("/joke", function (request, response) {
//   response.json({"joke": oneLinerJoke.getRandomJoke(
//     {
//     'exclude_tags': ['dirty', 'racist', 'marriage']
//   }
// );})
// });

app.listen(app.get('port'),  function () {
  console.log('Hello express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
