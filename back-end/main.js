const express = require('express'); //Devuelve una funcion. por eso desp se process.prependOnceListener(type, listener); Express();
const app = express(); // Tiene la funcionalidad del servidor
const { mongoose } = require('./database.js');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser'); 

//Settings
app.set('port', process.env.PORT || 8080);

//Middleware
/*
Middlewares: Es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.
Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación. La siguiente función de middleware se denota normalmente con una variable denominada next.
Las funciones de middleware pueden realizar las siguientes tareas:
Ejecutar cualquier código.
Realizar cambios en la solicitud y los objetos de respuesta.
Finalizar el ciclo de solicitud/respuestas.
Invocar la siguiente función de middleware en la pila.
Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar next() para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.
*/
//Para conversion de los datos
//morgan muestra lls datos que envia el usuario el servidor
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
//Cors sirve para sincronizar los puertos de angular y de node (4200 y 8080 en este caso)
app.use(cors());

//Routes
//Estos datoas pasarlo a un Index en la carpeta Routes
//Var router=requiere('express').router();
//router.use('api/employees',require('./employee'));
//module.exports=router
app.use('/api/employees',require('./routes/employee.routes.js'));
app.use('/api/projects',require('./routes/project.routes.js'));
app.use('/api/users',require('./routes/user.routes.js'));

//Server
app.listen(app.get('port'),()=>{
console.log('server at port' + ' '+ app.get('port'));
});


