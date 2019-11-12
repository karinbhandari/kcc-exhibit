const express = require('express');
const router = express.Router();
const MainAttraction = require('../models/main-attraction');


//Get all thumb for landing page slider 2
router.get('/get-all-thumbs', (req, res, next)=>{
  MainAttraction.find({}, (err, docs)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      const thumbList = [];
      docs.map(v=>{
        thumbList.push(v.thumb);
      })
      console.log(`All thumb images has been send to landing page.`);
      res.json(thumbList);
    }
  })
});


// Dashboard Operaion: Adding main attraction 
router.post('/add', (req, res, next)=>{

  let mainAttraction = new MainAttraction(req.body);

  mainAttraction.save(err=>{

    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      console.log("Main attraction sucessfully addded");
      res.json({
        message: "Sucessfully added!"
      });
    }
    
  })
}) 

//Get single attraction
// When client asks for all the data
router.get('/get', (req, res, next)=>{

  MainAttraction.find({title: req.query.title}, (err, docs)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      console.log(`An attraction is sent to client`);
      res.json(docs);
    }
  })
});

//Get single attraction
// for a dashboard to update using _id
router.get('/get-attraction', (req, res, next)=>{

  MainAttraction.find({_id: req.query.id}, (err, docs)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      console.log("An attraction is sent for update.");
      res.json(docs);
    }
  })
});

//Update an atrraction from dashboard
router.post('/update-attraction', (req, res, next)=>{

  MainAttraction.findOneAndUpdate({_id: req.query.id}, req.body, (err)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      console.log("Sucessfully updated!");
      res.json({
        message: "Successfully updated!"
      });
    }
  })
});


// Request for all the main attraction
router.get('/get-all', (req, res, next)=>{
  MainAttraction.find({}, (err, docs)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      console.log("All main attractions request has been fulfilled!");
      res.json(docs);
    }
  })
});

// Send category for gallery
router.get('/get-categories', (req, res, next)=>{
  MainAttraction.find({}, (err, docs)=>{
    if(err){
      console.log(err.message);
      res.send({
        message: "Couldn't find any category at the server"
      });
    }else{
      if(docs.length){
        let categories = [];
        docs.forEach(v=>{
          categories.push(v.title);
        })      
        res.json(categories);
      }
      else{
        res.json([]);
      }
    }
  })
});

// Delete a attraction
router.post('/delete', (req, res, next)=>{
  MainAttraction.deleteOne({_id: req.query.id}, (err)=>{
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