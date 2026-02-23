console.log("AF Labsheet 4 is completed.");

// app.js

// 1️⃣ Read file
const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});