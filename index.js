var fs = require('fs');
fs.readFile( __dirname + '/shakespeare.txt', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data.toString());
});