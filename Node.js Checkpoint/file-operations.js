const fs = require('fs');

// Writing to the file
fs.writeFileSync('welcome.txt', 'Hello Node');

// Reading and logging the data
const data = fs.readFileSync('welcome.txt', 'utf-8');
console.log(data);
