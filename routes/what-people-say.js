const express = require("express");
const router = express.Router();
const WhatPeopleSay = require('../models/what-people-say');

// Add people feedback
router.post('/add-feedback', (req, res, next)=>{

      let whatPeopleSay = new WhatPeopleSay(req.body);

      console.log("What people say => ", req.body);
  
      whatPeopleSay.save(err=>{
          if(err){
              console.log(err.message);
              res.json({
                  message: err.message
              });
          }else{
              console.log("Feedback sucessfully created!");
              res.json({
                  message: "Feedback sucessfully created!"
              });
          }
      });
  });

// Return all What People Say
router.get('/get-all', (req, res, next)=>{
    WhatPeopleSay.find({}, (err, whatPeopleSay)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`All What People Say sent!`);
        res.json(whatPeopleSay);
      }
    })
});

// Return a particular what people say
router.get('/get-one', (req, res, next)=>{
  WhatPeopleSay.find({_id: req.query.id}, (err, peoplesView)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`Peoples View details is send!`);
        res.json(peoplesView);
      }
    })
});

// Update a particular what people say
router.post('/update-one', (req, res, next)=>{
  WhatPeopleSay.findOneAndUpdate({_id: req.query.id}, req.body, (err)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`People view has been updated!`);
        res.json({
          message: `People view has been updated!`
        });
      }
    })
});

// Delete a what people say
router.post('/delete', (req, res, next)=>{
  WhatPeopleSay.deleteOne({_id: req.query.id}, (err)=>{
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