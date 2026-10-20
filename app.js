const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
  ));


const rutasRoutes = require('./Rutas/empresa');
const clientesRoutes = require('./Rutas/clientes');
const formapagosRoutes = require('./Rutas/formapagos');
const pagosRoutes = require('./Rutas/pagos');
const productoRoutes = require('./Rutas/producto');
const proveedorRoutes = require('./Rutas/proveedor');
const sucursalesRoutes = require('./Rutas/sucursales');
const tipoproductoesRoutes = require('./Rutas/tipoproducto');
const tipousuarioRoutes = require('./Rutas/tipousuario');







app.set('port', process.env.PORT || 3000);



app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'Holacomoesta125.',
    port:3306,
    database:'Ventas'
}, 'single'));
app.use(express.urlencoded({extended: false}));




app.get('/probar-mysql', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.send('Error de conexion con MySQL');
        }

        connection.query('SELECT DATABASE() AS base', (err, resultado) => {
            if (err) {
                console.log(err);
                return res.send('Error al consultar la base de datos');
            }

            res.send('Base de datos conectada: ' + resultado[0].base);
        });
    });
});





  //inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});	
