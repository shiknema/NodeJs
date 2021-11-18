const express = require ('express')
const app = express();
const axios = require ("axios");

const PORT=8888;

app.listen(PORT, () =>{
    console.log(`Server running on port  ${PORT}`);
})

let users= [];
axios.get("https://jsonplaceholder.typicode.com/users")
.then(({data})=>{
   
  // users= data.map(user =>user.name); 
   console.log( "API data ", data);
   app.get('/', (req , res) =>{
    res.json(data);
});
})
.catch(err =>{console.log("Error",err);});






module.exports = {
    app  //start point for deployment
};

