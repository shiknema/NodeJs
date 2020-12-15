const express =require("express");
const app=express();
const port = process.env.PORT ||3000;

// Listen On port 
app.listen(port, function(req, res) {
    console.log('Server listening on port %s', port);
});

// Employee Json
const employees=[  
    {id:101, name:"Shyam", email:"shyamjaiswal@gmail.com"},  
    {id:102, name:"Bob", email:"bob32@gmail.com"},  
    {id:103,name:"Jai", email:"jai87@gmail.com"}  
];  

app.get('/employees/:id', (req,res)=>{
    const emp= employees.find(e=> e.id === parseInt(req.params.id));
    if(!emp)
    res.status(404).send(" Employee Id is not found");
    res.send(emp);
})

//Products Json

const projects =[  
    {id:101,"name":"IT"},  
    {id:102, "name":"Devops"},  
    {id:103,"name":"DataBase"}  
] 

const employeedetails=[
    {id:101, name:"Shyam", email:"shyamjaiswal@gmail.com", ProjectName:"IT"},
    {id:102, name:"Bob", email:"bob32@gmail.com", ProjectName:"Devops"},
    {id:103, name:"Jai", email:"jai87@gmail.com", ProjectName:"DataBase"}

]
app.get('/projects/:id',(req,res)=>{
    const project= projects.find(p=> p.id === parseInt(req.params.id));
    if(!project)
    res.status(404).send("Project id is not found");
    res.send(project);
})

app.get('/getemployeedetails',(req,res)=>{

    
    res.send(employeedetails );
})