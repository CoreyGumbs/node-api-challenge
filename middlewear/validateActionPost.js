function validateActionPost(req, res, next){
    const {body} = req;

    if(Object.entries(body).length === 0){
        res.status(400).json({message: "missing post data"});     
    }else if(body.description === '' || body.description === null){
        res.status(400).json({message: "missing required description field"});
    }else if(body.notes === '' || body.notes === null){
        res.status(400).json({message: "missing required notes field"});
    }

    next();
}

module.exports = validateActionPost;