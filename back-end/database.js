const mongoose = require('mongoose');
const uriDB = 'mongodb://localhost/prueba-mean' ;

//sudo service mongod start  (Para arrancar el servicio de mongo)


mongoose.connect(uriDB,{ useNewUrlParser: true } )
.then(db => console.log('db is connected'), err => console.error(err)) ;
//.catch(err =>  console.error(err));   >>>>> Esto seria lo mismo que lo de arriba sacando el 2do parametro del .then

module.exports = mongoose;

