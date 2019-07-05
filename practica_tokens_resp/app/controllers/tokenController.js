
var jwt = require('jsonwebtoken');
module.exports = (app, userModel) => {
    app.post('/generate/token', function (req, res) {
        console.log('generando token')

        //paso 1: Verificar que el usuario xista en la tabla de cuentas
        userModel.findOne({
            where: {
                usuario: req.body.usuario,
                contraseña: req.body.contraseña
            }
        }).then((resp) => {
           // console.log(resp)

            if (!resp) {
                res.send({ mensaje: "usuario o contraseña incorrectos" })
            } else {

                claimUser = {
                    nombre: resp.nombre,
                    email: resp.email,
                    rol: resp.rol,
                    ubicacion: resp.ubicacion
                }
                console.log(claimUser)

                const token = jwt.sign(claimUser, 'secretKey', { expiresIn: '1h' });
                console.log(token)
                res.send(token)
            }

        });





    });


    app.post('/user', function (req, res) {

        const authHeader = req.headers['authorization'];

        token = authHeader.replace('Bearer ', '')
        jwt.verify(token, 'secretKey', function (err, token) {//verifica si el token es valido
            if (err) {
                console.log('invalid token')

                res.status(401)
                res.send({ mensaje: 'Unauthorized' })

            } else {//si es valido, revisa los roles de usuario
                console.log('valid token')

                if (token.rol === 'admin') {//revisa si el usuario es admin
                    console.log('user is admin')
                    console.log(req.body)
                    userModel.create(req.body).then((resp) => {
                        res.send(resp);
                    });
                } else {
                    res.send({ mensaje: 'No eres administrador' })
                }
            }
        });
    });
}
