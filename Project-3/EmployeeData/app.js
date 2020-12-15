const express =require("express");
const request = require('request');
const path = require('path');
const http = require("http");
const app=express();


app.set('views', path.join(__dirname, 'views'));// all my html views resides in views folder
app.set('view engine', 'ejs'); // rendering content using ejs view engine

const port = process.env.PORT ||3000;

// Listen On port 
app.listen(port, function(req, res) {
    console.log('Server listening on port %s', port);
});
// Default home page

app.get("/", function(req,res){
    console.log("Employee Details")
});


// product json
app.get('/project', function(req, res) {
    res.render('projects', {
        title: "Project Details", 
        id: ["1","2","3"],
        description: ["Ecommerce", "IT", "Devops"]
    });
});
 
app.get("/employee", function(req,res) {
res.render('employee', {
     title: "Employee Details", 
   id: ["101","102","103"],
   name:["Shyam","Bob","Jay"]   
});
});





// Employees List by API call



function getEmployeeList(url) {
    // Setting URL and headers for request
    var options = {
        url: empUrl,
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
        // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}
// Weather Api Route
app.get('/EmpListWithPromise',(req,res) => {
    var dataPromise = getEmployeeList();
    // Get user details after that get followers from URL
    dataPromise.then(JSON.parse)
               .then(function(result) {
                    res.render('employeeAPI',{result,title:'***Employees List***'})
                })
})

//Weather Api Without promise
app.get('/EmpListWithoutPromise',(req,res) => {
    request(url, (err,response,body) =>{
        if(err){
            console.log(err);
        } else {
           
            const output = JSON.parse(body);
            res.send(output);
        }
    });
});









