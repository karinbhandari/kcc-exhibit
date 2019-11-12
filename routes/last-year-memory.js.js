const express = require("express");
const router = express.Router();
const LastYearMemory = require('../models/last-year-memory');
var multer = require("multer");
const fs = require("fs");
const fsExtra = require("fs-extra");

// Return a particular gallery names for the client.
router.get('/get-last-year-memory-gallery-names', (req, res, next)=>{
  LastYearMemory.find({id: "5dbc34f596611331f8166638"}, (err, last)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      if(last.length){
        const galleryNamesList = last[0].galleryNames;
        console.log(`Gallery names for Last Year Memory is send to the client!`);
        res.json(galleryNamesList);
      }else{
        const initialModal = {
          id: "5dbc34f596611331f8166638",
          galleryNames: [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg" ]
        };
        let lastYearMemory = new LastYearMemory(initialModal);
        lastYearMemory.save(err=>{
          if(err){
            console.log(err.message);
            res.json({
              message: err.message
            });
          }else{
            LastYearMemory.find({id: "5dbc34f596611331f8166638"}, (err, last1)=>{
              if(err){
                console.log(err.message);
                res.json({
                  message: err.message
                });
              }else{
                if(last1.length){
                  const galleryNamesList = last1[0].galleryNames;
                  console.log(`Gallery names for Last Year Memory is send to the client!`);
                  res.json(galleryNamesList);
                }else{
                  res.json([]);
                }
              }
            });
          }
        })
      }
    }
  })
});

// Update existing last year memory
router.post('/update', (req, res, next)=>{
  LastYearMemory.findOneAndUpdate({id: "5dbc34f596611331f8166638"}, req.body, (err)=>{
    if(err){
      console.log(err.message);
      res.json({
          message: err.message
      });
  }else{
      console.log("Last Year Memory is sucessfully Updated!");
      res.json({
          message: "Last Year Memory is sucessfully update!"
      });
  }
  })
});


router.post('/move-last-year-memory-images', (req, res, next)=>{
  
    const location = `${__basedir}/static/images/last-year-memory/`;

    fsExtra.emptyDirSync(location);

    var storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            if(!fs.existsSync(location)){
              fs.mkdirSync(location);
            }
            cb(null, location);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
      });

    var upload = multer({storage: storage}).array("last-year-best-images");

    upload(req, res, err=>{
        if(err){
          console.log(err.message);
          res.json({
            message: err.message
          });
        }else{
          res.json({
            message: "Last Year Memory Images added.."
          });
        }
      })
})

// router.post('/add-last-year-memory', (req, res, next)=>{

//   // console.log(req.body)
//     let lastYearMemory = new LastYearMemory(req.body);

//     lastYearMemory.save(err=>{
//         if(err){
//             console.log(err.message);
//             res.json({
//                 message: err.message
//             });
//         }else{
//             console.log("Last Year Memories Gallery sucessfully created!");
//             res.json({
//                 message: "Last Year Memories Gallery sucessfully created!"
//             });
//         }
//     });
// });

module.exports = router;