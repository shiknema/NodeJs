var fs= require('fs');
const express = require('express');
const app = express();
const math = require ('./maths');

app.listen(6800, function(){

    console.log('Server running on port no 6600');

});

app.get('/', function(req,res){

    res.send('<h1> Welcome </h1>')

});
app.get('/movies',(req,res) => {
    fs.readFile('db.json',(err,result) => {
        if(err) throw err;
        res.send(JSON.parse(result));   
    })
})
app.get('/bonus', function(req, res){

    var salary = 20000;
   var percentage = 10;
    var result = math.calculateBonus(salary ,percentage);
    console.log('bonus', result);
    res.end(result.toString());
});

app.get('/addNumbers', function (req, res){
    a = 20;
    b = 30;
    res.end(math.sumOfTwoNumbers(a, b).toString());
});

app.get('/mulNumbers', function (req, res){
    a = 20;
    b = 30;
    res.end(math.mulOfTwoNumbers(a, b).toString());
});



app.get('/file1',(req,res) => {
    fs.readFile('file1.txt','utf-8',(err,data) => {
        if(err) throw err;
        res.send(data)
    })
});

app.get('/file2',(req,res) => {
    fs.appendFile('./file2.txt','My text read file\n',(err) => {
        if(err) throw err;
        else{
            fs.readFile('./file2.txt','utf-8',(err,data) => {
                if(err) throw err;
                res.send(data)
            })
        }
    })

});

