const mongoose = require('mongoose');
const {Schema} = mongoose;
//mongoose.set('useCreateIndexes', true);

const userSchema = new Schema({

	username: {type: String, required:true, unique: true },
    email: {type: String, required: true},
    password: {type: String, required: true}

},{collection:'user'},{timestamps:true});

module.exports = mongoose.model('user', userSchema);