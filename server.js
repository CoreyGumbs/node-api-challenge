const express = require('express');
const logger = require('./middlewear/logger');
const server = express();
const port = process.env.PORT || 5000;


//middlewear
server.use(express.json());
server.use(logger);


server.get('/', (req,res) => {
    res.status(200).json('API CHALLENGE');
});


server.listen(port, () => console.log(`Server Running On Port: ${port}`));