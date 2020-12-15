const { fstat } = require('fs');
var path= require('path');

var pathName = '.\Assignment2\Assignment2.js';

console.log(path.dirname(pathName));
console.log(path.extname(pathName));
console.log(path.basename(pathName));
if(path.isAbsolute(pathName)){
    console.log("hello");
}


path.join(__dirname +'./firstfile.txt');