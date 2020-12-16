
const mongoose = require('mongoose');
const chalk = require('chalk');

const dburl = 'mongodb://localhost:27017/nodejsSEP2020';

//localhost = 127.0.0.1:27017/sep2020

mongoose.connect(dburl);

mongoose.connection.on('connected', () => {
    console.log(chalk.green('Connection success'));
});

mongoose.connection.on('error', () => {
    console.log(chalk.red('Error while connecting to DB'));
});

mongoose.connection.on('disconnected', () => {
    console.log(chalk.yellow("DB disconnected"));
});