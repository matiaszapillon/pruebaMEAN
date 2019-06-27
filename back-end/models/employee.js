const mongoose = require('mongoose');
const {Schema} = mongoose;


const employeeSchema = new Schema({

	DNI: {type: String, required:false },
	name: {type: String, required:true },
	surname: {type: String, required:false },
	email: {type: String, required:false },
	address: {type: String, required:false },
	phone: {type: String, required:false },
	position: {type: String, required: true},
	office: {type: String, required: true},
	salary: {type: Number , required : true}
},{timestamps:true});

module.exports = mongoose.model('Employee', employeeSchema);