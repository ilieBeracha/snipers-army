const express = require('express');
const { getAllActivities, getActivityBySection } = require('../2-logic/activitiesLogic');

const ActivitiesRoute = express.Router();

ActivitiesRoute.get('/activities',async (req,res)=>{
    try{
        const response = await getAllActivities();
        res.status(200).json(response)
    }catch(e){
        res.status(401).json(e)
    }
})
ActivitiesRoute.get('/activitiesBySection/:id',async (req,res)=>{
    const id = req.params.id
    try{
        const response = await getActivityBySection(+id);
        res.status(200).json(response)
    }catch(e){
        res.status(401).json(e)
    }
})

module.exports = ActivitiesRoute
