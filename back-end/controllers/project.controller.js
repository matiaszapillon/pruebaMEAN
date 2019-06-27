const projectModel = require('../models/project.js');
require('../models/stage.js'); 
require('../models/employee.js');
//Tuve que agregarlo aca para que me reconozca el populate, 
//si no solo mostraba el objectId.


module.exports.getProjects = (req, res) => {
    const projects = projectModel.find({})
        .then(projects => {
            if (!projects) { return res.sendStatus(401); }
            return res.json(projects)
        })//.catch(next); Este catch next sirve para en el app.js cuando me tira algun error en este metodo
        //pongo un manejador de errores y salta directamente ahi.
};



/*
module.exports.getProjects = async (req,res) =>{
    const projects = await projectModel.find();

         res.json(projects);
         //req.parameters(Obtiene los valores que envio el usuario)
};

*/