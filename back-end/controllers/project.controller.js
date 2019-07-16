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

module.exports.getProjectById = (req, res) => {
    console.log(req.params);
    let em = projectModel.findById(req.params.id)
        .then(p => {
            res.json(p);
        }, error => {
            console.log(error);
            res.sendStatus(500);
        })
};

module.exports.getSuppliesByProject = (req, res) => {
    let supplies = [{
        _id: "1",
        name: "Tijera",
        description: "Tijera ancha 2mm",
        unity: "Unidad",
        stock: "2",
        quantity: "1",
        provider: {
            business_name: "Coop. SP",
            category: "A"
        }
    }, {
        _id: "2",
        name: "Cable 2m",
        description: "Cable UTP 5",
        unity: "m",
        stock: "2500",
        quantity: "150",
        provider: {
            business_name: "Coop. SP",
            category: "A"
        }
    }, {
        _id: "3",
        name: "Tuerca",
        description: "Tuerca 3mm",
        unity: "Unidad",
        stock: "10",
        quantity: "5",
        provider: {
            business_name: "Perreke",
            category: "B"
        }
    }
    ];
    res.json(supplies);
}

/*
module.exports.getProjects = async (req,res) =>{
    const projects = await projectModel.find();

         res.json(projects);
         //req.parameters(Obtiene los valores que envio el usuario)
};

*/