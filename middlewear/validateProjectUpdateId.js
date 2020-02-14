const express = require('express');
const project_db = require('../data/helpers/projectModel');

function validateProjectUpdateId(req, res, next){
    project_db.get(req.params.project_id)
    .then(project => {
        if(project == null){
            res.status(400).json({message: "Invalid Project ID."});
        }else{
            req.project = project
            next();
        }
    })
    .catch(error => {
        res.status(500).json({error: "Trouble finding project to update"});
    })
}


module.exports = validateProjectUpdateId;