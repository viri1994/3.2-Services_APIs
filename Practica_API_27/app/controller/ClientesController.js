var jwt = require('jsonwebtoken');

modele.exports = (app, ClienteModel) => {

    app.post('/clientes', function (req, res) {

    })
    app.get('/clientes', function (req, res) {
        const authHeader = req.headers['authorization'];

        token = authHeader.replace('Bearer ', '')
        jwt.verify(token, 'secretKey', function (err, token) {//verifica si el token es valido
            if (err) {
                console.log('invalid token')

                res.status(401)
                res.send({ mensaje: 'Unauthorized' })

            } else {//si es valido, revisa los roles de usuario
                console.log('valid token')
                clienteNuevo = req.body;

                if (token.rol === 'admin') {//revisa si el usuario es admin
                    ClienteModel.findAll().then((resp) => {
                        res.send(resp)
                    });
                } else {
                    ClienteModel.findAll({
                        where: {
                            area: token.area
                        }
                    }).then((resp) => {
                        res.send(resp)
                    });
                }
            }
        });
    });



    app.get('/clientes/:id', function (req, res) {
        const authHeader = req.headers['authorization'];
        token = authHeader.replace('Bearer', '')
        jwt.verify(token, 'secretKey', function (err, token){
            if(err){
                console.log('invalid token')
                res.status(401)
                res.send({message: 'Unauthorized'})
            }else{
                where
            }
        })
     })



    app.delete('/clientes/:id', function (req, res) {
        const authHeader = req.headers['authorization'];
        token = authHeader.replace('Bearer ', '')

        jwt.verify(token, 'secretKey', function (err, token) {//verifica si el token es valido

            if (err) {
                console.log('invalid token')

                res.status(401)
                res.send({ mensaje: 'Unauthorized' })

            } else {//si es valido, revisa los roles de usuario
                    if (token.rol === 'admin') {
                        ClienteModel.findOne({
                            where: {
                                id:req.params.id,
                                area: token.area
                    }
                }).then(resp => {
                    res.send({ message: 'cliente eliminado' })
                })
            }else{
                res.status(404)
                res.send({mensaje: 'cliente no existe'})
            }
        })
    }else {
        res.status(401)
        res.send({mensaje: 'Unauthorized'})
    }
});

