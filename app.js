console.log("AF Labsheet 4 is completed.");

const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});