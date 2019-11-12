const express = require("express");
const router = express.Router();
const OurTeam = require('../models/our-team');

// Add a team
router.post('/add-team', (req, res, next)=>{

      let ourTeam = new OurTeam(req.body);
  
      ourTeam.save(err=>{
          if(err){
              console.log(err.message);
              res.json({
                  message: err.message
              });
          }else{
              console.log("Team details is sucessfully created!");
              res.json({
                  message: "Team details is sucessfully created!"
              });
          }
      });
  });


// Return all our team info
router.get('/get-all', (req, res, next)=>{
  OurTeam.find({}, (err, ourTeam)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`All teams detail is send!`);
        res.json(ourTeam);
      }
    })
});

// Return one our team for update
router.get('/get-one', (req, res, next)=>{
  OurTeam.find({_id: req.query.id}, (err, ourTeam)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`One team details is send!`);
        res.json(ourTeam);
      }
    })
});


// Update a  team info
router.post('/update-one', (req, res, next)=>{
  OurTeam.findOneAndUpdate({memberContact: req.query.memberContact}, req.body, (err)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`Team detail has been updated!`);
        res.json({
          message: `Team detail has been updated!`
        });
      }
    })
});

// Delete a particular team info
router.post('/delete', (req, res, next)=>{
  OurTeam.deleteOne({_id: req.query.id}, (err)=>{
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