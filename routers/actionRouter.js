const express = require('express');
const action_db = require('../data/helpers/actionModel');
const validateProjectId = require('../middlewear/validateProjectId');


const router = express.Router();


router.get('/:project_id/actions', validateProjectId, (req, res) => {

});


module.exports = router;