const mongoose = require('mongoose');
const {Schema} = mongoose;


const projectSchema = new Schema({

	name: {type: String, required:true },
    description: {type: String, required: true},
    stages:[
            {
                id_stage:{ type: mongoose.Schema.Types.ObjectId, ref: 'stage'},
                name: {type: String, required: true},
                description: {type: String, required: true},
                state: {type: String, required: true},
                id_employee: {type: mongoose.Schema.Types.ObjectId, ref: 'employee'}
            }
    ]
},{collection:'project'});

module.exports = mongoose.model('project', projectSchema);