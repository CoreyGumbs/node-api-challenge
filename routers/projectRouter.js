const express = require('express');
const project_db = require('../data/helpers/projectModel');
const validateProjectId = require('../middlewear/validateProjectId');
const validateProjectPost = require('../middlewear/validateProjectPost');


const router = express.Router();

//GET ALL PROJECTS
router.get('/', (req, res) => {
    project_db.get()
    .then(project => {
        if(project.length === 0){
            res.status(400).json({message: "There are currently no projects. Please add a project."});
        }else{
            res.status(200).json(project);
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem retrieving the prohects"});
    });
});

//GET PROJECT BY ID
router.get('/:id', validateProjectId, (req, res) => {
    const { id } = req.project;

    project_db.get(id)
    .then(project => {
        if(project.length === 0){
            res.status(400).json({message: "There are currently no projects. Please add a project."});
        }else{
            res.status(200).json(project);
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem retrieving the prohects"});
    });
});

//POST PROJECT METHOD
router.post('/', validateProjectPost, (req, res) => {
    
    project_db.insert(req.body)
    .then(project => {
        res.status(201).json({created: project});
    })
    .catch(error => {
        res.status(500).json({error: "There was an error creating the project."});
    });
});

//PUT/UPDATE METHODS
router.put('/:id', validateProjectPost, validateProjectId, (req, res) =>{
    const {id} = req.project;
    const {body} = req;

    project_db.update(id, body)
    .then(project => {
        res.status(201).json({update: project});
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem updating the project."});
    });

});

//DELETE METHODS
module.exports = router;