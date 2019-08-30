const path = require('path');

const prueba= path.parse('C:\\path\\dir\\file.txt');
console.log(prueba);
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }