const employeeModel = require('../models/employee.js');

/*
const express = require('express');
const employeeCntrl = {};
*/

module.exports.getEmployees = async (req,res) =>{
const employees = await employeeModel.find();

/* 
Una forma de hacerlo con promise. (CON EL ASYNC Y AWAIT ESTAMOS HACIENDO LO MISMO
.. ESPERANDO A QUE SE EJECUTE LA FUNCCION DE MANERA ASINCRONICA Y DSP DEVOLVER EL RESULTADO)
	employeeModel.find()
	.then()
	.catch()
*/


	 res.json(employees);
	 //req.parameters(Obtiene los valores que envio el usuario)
};

module.exports.CreateEmployee = async (req,res) => {
console.log(req.body);
let emp = new employeeModel(req.body);

await emp.save(); 

	 res.json({status: 'Empleado creado correctamente'});
};

module.exports.getEmployeeById =  async (req,res) =>{ 
	console.log(req.params);
	let em = await employeeModel.findById(req.params.id)
	res.json(em);
};

module.exports.updateEmployee = async (req,res) => {
	let em = {
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary
	};
	console.log(em);
	await employeeModel.findByIdAndUpdate(req.params.id , { $set: em } , {new: true})

	//El set es de mongo para pasar por parametro lo que quiero actualizar, y el ultimo parametro es
	//Por si el objeto no existe lo crea.

	 res.json({status: 'Actualizado'});
};

module.exports.deleteEmployee = async (req,res) =>{
	let em = req.body;
	console.log(em);
	console.log(req.params);
	let idToDelete = req.params.id;
	console.log(idToDelete);
	await employeeModel.findByIdAndDelete(idToDelete);
	 res.json({status: 'Usuario eliminado'});
};

