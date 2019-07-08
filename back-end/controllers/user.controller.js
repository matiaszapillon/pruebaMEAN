const userModel = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey';


module.exports.getUsers = (req,res) => {
    res.send('get users');
}

module.exports.createUser = (req, res) => {
    console.log(req.body);
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }



    userModel.create(newUser)
        .then(usr => {
            const expiresIn = 26 * 60 * 60;
            const accessToken = jwt.sign({ id: usr._id },
                SECRET_KEY, {
                    expiresIn: expiresIn,
                })
            const userToReturn={
                username : usr.username,
                email: usr.email,
                id: usr._id,
                password : usr.password,
                accessToken: accessToken,
                expiresIn, expiresIn
            }
            res.send(userToReturn);
        })
        .catch(err => {
            console.log(err);
            console.log(err.code);
            if(err.code === 11000){
                return res.status(409).send('Ya existe un usuario con el mismo nombre');
            }
            return res.status(500).send('Error en el servidor');
        })

};

module.exports.loginUser = (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    const usr = userModel.findOne({ username: user.username })
        .then(usr => {
            if (!usr) { return res.status(401).send({ messsage: 'No se encontro el usuario' }); }
            else {
                const resultPassword = bcrypt.compareSync(user.password,usr.password);
                if (resultPassword) {
                   const expiresIn = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: usr._id }, SECRET_KEY, { expiresIn: expiresIn });
                    const userToReturn={
                        username : usr.username,
                        email: usr.email,
                        id: usr._id,
                        password : usr.password,
                        accessToken: accessToken,
                        expiresIn, expiresIn
                    }
                    return res.json(userToReturn); 
                }
                else {
                    return res.status(401).send({ messsage: 'Contraseña incorrecta' });
                }
            }

        })
        .catch(err => console.log(err))
};

