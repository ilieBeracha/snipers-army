const express = require('express');
const { getAllUsers, addUser } = require('../2-logic/usersLogic')
const generateToken = require('../1-dal/generateToken')

const UsersRoute = express.Router();

UsersRoute.get('/users', async (req, res) => {
    try {
        const response = await getAllUsers();
        res.status(200).json(response)
    } catch (e) {
        res.status(401).json(e)
    }
});

UsersRoute.post('/users/login', async (req, res) => {
    const body = req.body;
    try {
        const users = await getAllUsers();
        const user = users.find((u) => u.armyId === body.armyId && u.password === body.password);
        if (user) {
            const token = await generateToken(user)
            res.status(200).json(token)
        } else {
            res.status(401).json('No user')
        }
    } catch (e) {
        res.status(400).json(e)
    }
})


UsersRoute.post('/users/register', async (req, res) => {
    const user = req.body;
    console.log(user);
    try {
        await addUser(user);
        const token = await generateToken(user)
        res.status(200).json(token)
    } catch (e) {
        res.status(401).json(e)
    }
})

module.exports = UsersRoute