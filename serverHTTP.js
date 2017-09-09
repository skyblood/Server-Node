let express = require('express');
var app = express();
const puerto = 8080;

app.get('/', function(req, res){
	res.sendFile('view/index.html');
	console.log('Se conecto alguien');
	//respuesta.end();
});

app.listen(puerto, ()=> {console.log('Se arranco el server en el puerto '+puerto)});
