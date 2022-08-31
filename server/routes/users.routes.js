const router = require("express").Router();
const {User, validate} = require('../model/user.model')
const bcrypt = require('bcrypt')

router.post('/', async (req,res) => {
    try {
        const {error} = validate(req.body);
        if (error) {
            return res.status.apply(400).send({message: error.details[0].message})
        }
        const user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(409).send({message: "User with given email already exists"})
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.Password, salt)
        await new User({...req.body, Password: hashPassword}).save()
        res.status(200).send({message: 'User created successfully'})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})