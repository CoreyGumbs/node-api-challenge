const express = require('express');
const project_db = require('../data/helpers/projectModel');

function validateProjectId(req, res, next){
    project_db.get(req.params.project_id)
    .then(project => {
        if(req.params.project_id != project.id){
            res.status(400).json({message: "Invalid Project ID."});
            next();
        }else{
            req.project = project
            next();
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was trouble retrieving project."});
    })
}

module.exports = validateProjectId;