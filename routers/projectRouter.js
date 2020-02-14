const express = require('express');
const project_db = require('../data/helpers/projectModel');
const validateProjectId = require('../middlewear/validateProjectId');


const router = express.Router();

//GET METHODS
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
})

//POST METHODS

//PUT/UPDATE METHODS

//DELETE METHODS
module.exports = router;