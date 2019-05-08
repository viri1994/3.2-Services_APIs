const express=require('express');
const app=express();
const port =3000;

app.get('/',(request, response)=> {
	response.send ('hola viri');
});

app.get('/usuario',(request, response)=> {
	const usuario={
		name:'Viridiana',
		edad:24
	}
	response.send (usuario);
});

app.get('/usuarios',(request, response)=> {
	const name = request.query.name;
	const age = request.query.age;
	const ageName = age + ' ' + name;
	const color = request.query.color;
	response.send(ageName);

});

app.get('/numeros',(request, response)=> {
	const num1 = request.query.num1;
	const num2 = request.query.num2;
	const resultado =parseInt(num1)+ parseInt(num2);
	response.send('Suma = '+ resultado);

});



app.delete('/borrar',(request, response)=> {
	const id = request.query.id;
	//aqui es donde se borra el recurso
	response.send('se borro' + id);

});




app.listen(port,() =>console.log('el servidor esta corriendo'))
