const express = require("express");
const router = express.Router();
const Modal = require('../models/modal');
const modal1 = require("../initialConst/index");

// Return gallery category and date
router.get('/get', (req, res, next)=>{
  Modal.find({unique: "modal_001"}, (err, modal)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      if(modal.length){
        console.log(`Modal is sent!`);
        res.json(modal);
      }else{
        // auto creating modal and sending message
        const initialModal = {
          thumb: modal1.modalThumb,
          showModal: false
      };
        let modal = new Modal(initialModal);
        modal.save(err=>{
          if(err){
            console.log(err.message);
            res.json({
              message: err.message
            })
          }else{
            console.log("Initial Modal not found so auto created!");
            // res.json({
            //   message: "Initial Modal not found so auto created!"
            // })
            // Again finding modal and sending
            Modal.find({unique: "modal_001"}, (err, modal)=>{
              if(err){
                console.log(err.message);
                res.json({
                  message: err.message
                });
              }else{
                res.json(modal);
              }
            })
          }
        })
      }
    }
  })
});

router.post('/set-show', (req, res, next)=>{
  const flag = req.body.showModal;
  Modal.findOneAndUpdate({unique: "modal_001"}, req.body, (err)=>{
    if(err){
      console.log(err.message);
      res.json({
          message: err.message
      });
  }else{
      console.log("Modal Is Set!");
      res.json({
          flag: flag
      });
  }
  })
});

router.post('/update-modal', (req, res, next)=>{
    Modal.findOneAndUpdate({unique: "modal_001"}, req.body, (err)=>{
      if(err){
        console.log(err.message);
        res.json({
            message: err.message
        });
    }else{
        console.log("Modal Sucessfully Updated!");
        res.json({
            message: "Modal Sucessfully Updated!"
        });
    }
    })
});

module.exports = router;