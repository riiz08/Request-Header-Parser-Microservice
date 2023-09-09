// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req, res) => {
  //MENDAPATKAN IP ADDRESS DARI REQUEST
  const clientIp = req.ip;
  
  //MENDAPATKAN BAHASA 
  const acceptLanguageHeader = req.get('Accept-Language');
  const languages = acceptLanguageHeader.split(',');
  const preferredLanguage = languages[0] + "," + languages[1]; // Bahasa pertama dan kedua di dalam daftar preferensi

  //MENDAPATKAN SOFTWARE KLIEN
  const software = req.get('User-Agent');



  res.json({
    ipaddress: clientIp,
    language: preferredLanguage,
    software: software
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});