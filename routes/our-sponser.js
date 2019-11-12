const express = require("express");
const router = express.Router();
const OurSponser = require('../models/our-sponser');

// Add a sponser
router.post('/add-sponser', (req, res, next)=>{
  let ourSponser = new OurSponser(req.body);
  ourSponser.save(err=>{
      if(err){
          console.log(err.message);
          res.json({
              message: err.message
          });
      }else{
          console.log("Sponser details is sucessfully created!");
          res.json({
              message: "Sponser details is sucessfully created!"
          });
      }
  });
});

// Return all sponsers
router.get('/get-all', (req, res, next)=>{
  OurSponser.find({}, (err, ourSponser)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`All Sponsers details is send!`);
        res.json(ourSponser);
      }
    })
});

// Return one sponser for update
router.get('/get-one', (req, res, next)=>{
  OurSponser.find({_id: req.query.id}, (err, ourSponsor)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`One sponsor details is send!`);
        res.json(ourSponsor);
      }
    })
});


// Update a  sponser info
router.post('/update-one', (req, res, next)=>{
  OurSponser.findOneAndUpdate({_id: req.query.id}, req.body, (err)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`Sponsor detail has been updated!`);
        res.json({
          message: `Sponsor detail has been updated!`
        });
      }
    })
});

// Delete a particular sponsor info
router.post('/delete', (req, res, next)=>{
  OurSponser.deleteOne({_id: req.query.id}, (err)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      console.log("Sucessfully Deleted!");
      res.json({
        message: "Sucessfully Deleted!"
      });
    }
  })
});





module.exports = router;