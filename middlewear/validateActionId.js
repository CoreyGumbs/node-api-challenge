const express = require('express');
const action_db = require('../data/helpers/actionModel');


function validateActionId(req, res, next){
    action_db.get(req.params.action_id)
    .then(action => {
        if(req.params.action_id != action.id){
            res.status(400).json({message: "Invalid Action ID."});
        }else{
            req.action = action
            next();
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was trouble retrieving action."});
    })


}

module.exports = validateActionId;