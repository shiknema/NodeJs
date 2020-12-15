
var fs = require("fs") ;

//Check File exist or not 
fs.open('myfile', 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(' This file already exists');
        return;
      }
  
      throw err;
    }

  //If file not Exist create and write into 

    fs.writeFile('myfile','My first file',(err)=>{
     if(err) 
     throw err;
     else{
         console.log('File write successfully')
     }
    })
  });
//Read from JSON File
fs.readFile('./files/record.json',(err,result) =>{
  if(err) throw err;
  else{

    console.log(JSON.parse(result))
  }
})