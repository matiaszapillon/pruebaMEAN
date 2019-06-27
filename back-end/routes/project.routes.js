const projCntrl = require('../controllers/project.controller.js');
const express = require('express');

const router = express.Router();

//Router es un objeto que se va a llenar con propiedas de las rutas despues y se va a exportar.
//Tambien se podria habe hecho en el main.js "app.get(PATH,HANDLER) o app.put.."

router.get('/', projCntrl.getProjects);

/*

router.post('/',empCntrl.CreateEmployee );
router.get('/:id',empCntrl.getEmployeeById );
router.put('/:id',empCntrl.updateEmployee );
router.delete('/:id',empCntrl.deleteEmployee );
 */

module.exports = router;

