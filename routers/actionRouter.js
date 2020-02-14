const express = require('express');
const action_db = require('../data/helpers/actionModel');
const validateProjectId = require('../middlewear/validateProjectId');
const validateActionPost = require('../middlewear/validateActionPost');
const validateActionId = require('../middlewear/validateActionId');


const router = express.Router();

//GET ACTIONS
router.get('/actions/:action_id', validateActionId, (req, res) => {
    const {id} = req.action;
    action_db.get(id)
    .then(action =>{
        res.status(200).json(action);
    })
    .catch(error => {
        res.status(500).json({error: "There was an issue with retrieving the action"});
    });
});

//ADD NEW ACTION TO PROJECT
router.post('/:project_id/action', validateActionPost, validateProjectId,  (req, res) => {
    const {id} = req.project;
    const body = {
        "project_id": id,
        "description": req.body.description,
        "notes": req.body.notes,
        "completed": false
    }

    action_db.insert(body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        res.status(500).json({error: `There was a problem creating action for project ${id}`});
    });
});


module.exports = router;