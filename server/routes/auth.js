const router = require("express").Router();
const { User } = require('../model/user');
const bcrypt = require('bcrypt')
const Joi = require("joi");

router.post("/", async (req, res) => {
    try {
    const {error} = validate(req.body);
    if (error)
        return res.status(400).send({message: error.details[0].message});

        const user = await User.findOne({email: req.body.Email})
    if (!user)
        return res.status(401).send({message: 'Invalid email or password'})

        const validPassword = await bcrypt.compare(
            req.body.Password, user.Password
        )
        if (!validPassword)
            res.status(401).send({message: "Invalid Email or Password"})

            const token = user.generateAuthToken();
            res.status(200).send({data: token, message: "Logged in successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

const validate = (data) => {
    const schema = Joi.object({
        Email: Joi.string().email().required().label("Email"),
        Password: Joi.string().required().label("Password")
    });
    return schema.validate()
}

module.exports = router;