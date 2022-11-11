
const jwt = require('jsonwebtoken')
const CustomApiError = require('../errors/custom-error.js')

const login = async (req,res) => {
    const {username,password } = req.body
    if(!username || !password){
        throw new CustomApiError('please provide email and password',400)
    }

    const id = new Date().getDate()
    const token = jwt.sign({id, username},"jwtsecret",{ expiresIn:'30d'})

    res.status(200).send({msg:'user created',token})
}
const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    const user = req.user
    res.json({msg:`hello ${user.username}`,secret:`here is your lucky number your lucky number is ${luckyNumber}`})

    // console.log(token);
}

module.exports = {login, dashboard}