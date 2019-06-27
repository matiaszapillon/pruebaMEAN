const mongoose = require('mongoose');
const {Schema} = mongoose;


const stageSchema = new Schema({

	name: {type: String, required:true },
	description: {type: String, required: true}

},{collection:'stage'});

module.exports = mongoose.model('stage', stageSchema);