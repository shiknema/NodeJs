const express = require('express');
const db = require('./db.js');
const userRoutes = require('./routes/login');
//const productsRoutes = require('./routes/products');

const app = express();

app.use(express.json()); // I need to convert the request body into JSON objects
app.use(express.urlencoded()); 

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('App running on port %s', port);
});

/* http://localhost:8080 */
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/login.html');
});

/* http://localhost:8080/api/user/ */
app.use('/api/user', userRoutes);

/* http://localhost:8080/api/products/ */
//app.use('/api/products', productsRoutes);




