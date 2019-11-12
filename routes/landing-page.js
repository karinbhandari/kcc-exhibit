const express = require("express");
const router = express.Router();
const LandingPage = require('../models/landing-page');

// Return gallery category and date
router.get('/get-landing-page-date-info', (req, res, next)=>{
  LandingPage.find({}, (err, landingPage)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      if(landingPage.length){
        console.log(`Landing page date info is send to the client!`);
        res.json(landingPage[0]);
      }else{
        console.log("No landing page so creating one ...")

        let initalModal = {
          id: "5da6f785d9ed3d0886fce562",
          startingEnglishDate : "2020-05-28T10:56:00Z",
          endingEnglishDate : "2020-11-30T10:56:00Z", 
          startingEnglishTime : "2019-10-16T04:15:34.520Z", 
          endingEnglishTime : "2019-10-16T10:15:34.534Z" 
      };

        let landingPage = new LandingPage(initalModal);
        landingPage.save(err=>{
          if(err){
            console.log(err.message);
            res.json({
              message: err.message
            })
          }
          else{
            console.log("Initial Modal not found so auto created!");
            LandingPage.find({id: "5da6f785d9ed3d0886fce562"}, (err, landingPage)=>{
              if(err){
                console.log(err.message);
                res.json({
                  message: err.message
                });
              }else{
                res.json(landingPage[0]);
              }
            })
          }
        })
      }
    }
  })
});


router.post('/update-landing-page-date-info', (req, res, next)=>{

    LandingPage.findOneAndUpdate({"id": "5da6f785d9ed3d0886fce562"}, req.body, (err)=>{
      if(err){
        console.log(err.message);
        res.json({
            message: err.message
        });
    }else{
        console.log("Landing page is sucessfully Updated!");
        res.json({
            message: "Landing page is sucessfully update!"
        });
    }
    })
});

module.exports = router;