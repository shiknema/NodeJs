
var express = require("express")
var fs= require("fs");

const app= express();
const port=8081;

app.get('/', (req,res)=>{
    res.send('<h1> First Express Server </h1>')
})

app.get('/json',(req,res)=>{
    fs.readFile('./files/record.json' , (err,result)=>{
        if (err){
            throw err;
     
        }else{
            res.send(JSON.parse(result))
            console.log('file read sucessfully')
        }
    })
})

app.listen(port,(err)=>{
    console.log('server listening on port 8081')
})