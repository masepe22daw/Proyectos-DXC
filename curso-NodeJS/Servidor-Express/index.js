const express = require('express');
const server = express();
const colors = require('colors');

server.get('/', function(req,res){
    res.send('<h1>Hola mundo con Express y Node</h1>');
    res.end();
})
server.listen(3000, function(){
    console.log('Servidor desplegado en el puerto 3000'.red);
});