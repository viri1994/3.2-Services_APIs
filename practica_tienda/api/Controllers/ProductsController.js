module.exports = (app, productsModel) => {

    //lista todos los productos
    app.get('/products', (req, res) => {
        console.log('listando....')

        let whereObject = {}

        if (req.query.nombre) {
            console.log(req.query.nombre)
            whereObject.nombre = req.query.nombre;
        }

        if (req.query.precio) {
            console.log(req.query.precio)
            whereObject.precio = req.query.precio;
        }

        if (req.query.category) {
            console.log(req.query.category)
            whereObject.category = req.query.category;
        }
        productsModel.findAll({
            where: whereObject
        }).then((resp) => {
            res.send(resp)

        })
    });

    //crear
    app.post('/products', (req, res) => {
        console.log('creando....')
        productsModel.create(req.body).then(resp => {
            console.log("auto-generated ID", resp.id);
            res.send(resp);
        })
    });



    //actualizar
    app.put('/products/:id', (req, res) => {
        console.log('actualizando....')

        productsModel.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((resp) => {
            console.log('Actualizando')
            res.send(null);
        })
    });

    //eliminar
    app.delete('/products/:id', (req, res) => {
        console.log('eliminando....')

        productsModel.destroy({
            where: {
                id: req.params.id
            }
        }).then((resp) => {
            console.log('eliminando...')
            res.send(null)
        });
    });

    //obtener producto por id
    app.get('/products', (req, res) => {
        console.log('obteniendo producto por id....')

        productsModel.findOne({
            where: {
                id: req.params.id
            }
        }).then((resp) => {
            res.send(resp);
        })
    });

}