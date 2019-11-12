const express = require("express");
const router = express.Router();
const Newsletter = require('../models/newsletter');


// save request from client
router.post('/save', (req, res, next)=>{
    let newsletter = new Newsletter(req.body);
    newsletter.save((err)=>{
        if(err){
            console.log("Server error while saving the newsletter => ", err.message);
            res.json({
                message: "Server error at receving your message"
            })
        }else{
            res.json({
                message: "Your newsletter was sucessfully received!"
            });
        }
    })
})

// return data to dashboard
router.get("/get-all-newsletter", (req, res, next)=>{
    Newsletter.find({}, (err, newsletter)=>{
        if(err){
            console.log("Server error while getting newsletter => ", err.message);
            res.send({
                message: "Server error while getting newsletter."
            });
        }else{
            // no need to check for empty newsletter because clients checks it
            res.status(200).send(newsletter);
        }
    })
})


// update a particular newsletter
router.get('/find', (req, res, next)=>{
    const _id = req.query.id;
    Newsletter.find({_id: _id}, (err, newsletter)=>{
        if(err){
            console.log(err.message);
            res.send({
                message: err.message
            });
        }else{
            res.status(200).send(newsletter);
        }
    });
})

// delete a particular newsletter
router.post('/delete', (req, res, next)=>{
    const _id = req.query.id;
    Newsletter.findOneAndRemove({_id: _id}, (err)=>{
        if(err){
            console.log(err.message);
            res.send({
                message: err.message
            });
        }else{
            res.status(200).send({
                message: "Selected newsletter is sucessfully deleted!"
            });
        }
    });
})


module.exports = router;