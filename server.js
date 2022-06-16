const http = require('http');
require('dotenv').config();
const app = require('./app/app');


http.createServer().listen(process.env.port,()=>{
   console.log(`Server now running on port: ${process.env.port}`);
});
