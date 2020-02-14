function validateProjectPost(req, res, next){
    const {body} = req;

    if(Object.entries(body).length === 0){
        res.status(400).json({message: "missing post data"});     
    }else if(body.name === '' || body.name === null){
        res.status(400).json({message: "missing required name field"});
    }else if(body.description === '' || body.description === null){
        res.status(400).json({message: "missing required description field"});
    }

    next();
}

module.exports = validateProjectPost;