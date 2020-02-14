const express = require('express');
const project_db = require('../data/helpers/projectModel');


const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json('/api/projects/ endpoint working');
})

module.exports = router;