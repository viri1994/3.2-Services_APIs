var jwt = require ('jsonwebtoken');
const express = require ('express');

const app = express ();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log ('app is running');
//simpleJWT();

//JWT simple 
function simpleJWT(){

    const secretKey = 'secretKey' //secret Key sera usada en el token

    const claims= { // Contenido del JWT playload
        userName: 'The user name'
    }

    //generamos el jwt
    const token = jwt.sign(claims, secretKey);
    console.log(token);
}

//JWT CON ALGORITMO
function tokenConAlgoritmo(){
    const secretKey = 'secretKey';

        const claims={ 
         userName:'The user name'
    }
    const token= jwt.sign(claims, secretKey, { algorithm :'HS256'});
    console.log(token);
}
//tokenConAlgoritmo()
    

//JWT CON CALLBACK
function tokenConCallback(){
    const secretKey = 'secretKey';

        const claims={ 
         userName:'The user name'
    }
    console.log('antes de generar token...');

    jwt.sign(claims, secretKey, { algorithm :'HS256'}, function(err, token) {
        console.log(token);
    });
    console.log('generado..');
}
//tokenConCallback();

//JWT CON FECHA DE CADUCIDAD

function tokenConCaducidad(){
    //Opcion 1
    //Se define la fecha en el claim
   /* const token = jwt.sign({
        userName : 'the user name',
        exp: Math.floor(Date.now() /1000)+(60*60)//define fecha de caducidad
    }, 'secretKey', {algorithm: 'HS256'});
    console.log(token);*/
    
    //Opcion 2

    const token = jwt.sign(
        {
            userName : 'some name'
        },
        'secretKey',
        {  
            expiresIn: '1h',
            algorithm: 'HS256'
         });
         console.log(token)
}
//tokenConCaducidad();
//Este token debe caducar en 1 hora //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRoZSB1c2VyIG5hbWUiLCJleHAiOjE1NjE1NjY1ODMsImlhdCI6MTU2MTU2Mjk4M30.sx3Cnx4omj9qW0LkJg6M0uda4oy5vsr3sGLBj3dmLo8

//Verificar token
function verificarToken(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRoZSB1c2VyIG5hbWUiLCJleHAiOjE1NjE1NjY1ODMsImlhdCI6MTU2MTU2Mjk4M30.sx3Cnx4omj9qW0LkJg6M0uda4oy5vsr3sGLBj3dmLo8'

    try {
        const tokenDecoded = jwt.verify(token, 'secretKey');
        console.log(tokenDecoded)
    } catch (err) {
        console.log(err)
        console.log('token invalido')
        
    }
   
}
//verificarToken();

function verificarTokenOpc2(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRoZSB1c2VyIG5hbWUiLCJleHAiOjE1NjE1NjY1ODMsImlhdCI6MTU2MTU2Mjk4M30.sx3Cnx4omj9qW0LkJg6M0uda4oy5vsr3sGLBj3dmLo8'

    jwt.verify(token, 'secretKey', function (err, token){
        if(err){
            console.log(err)
        }else{
            console.log(token)
        }
    })
}

verificarTokenOpc2();

