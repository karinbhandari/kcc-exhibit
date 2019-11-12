const express = require("express");
const router = express.Router();
const Gallery = require('../models/gallery');
var multer = require("multer");
const fs = require("fs");
const fsExtra = require("fs-extra");


// Update a  gallery
router.post('/update-one', (req, res, next)=>{
  let location =  `${__basedir}/static/images/gallery/${req.query.category}/${req.query.date}`;
  fsExtra.emptyDirSync(location);
  Gallery.findOneAndUpdate(req.query, req.body, (err)=>{
      if(err){
        console.log(err.message);
        res.json({
          message: err.message
        });
      }else{
        console.log(`Gallery has been updated!`);
        res.json({
          message: `Gallery has been updated!`
        });
      }
    })
});

// Return gallery category and date
router.get('/get-gallery-date', (req, res, next)=>{
  Gallery.find(req.query, (err, gallery)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
      if(gallery.length){
        const galleryDate = []; 
        gallery.forEach(x=>{
          galleryDate.push(x.date)
        })
        console.log(`Gallery date is send to the client!`);
        res.json(galleryDate);
      }
      else{
        res.json([]);
      }
    }
  })
});


// Return a particular gallery names for the client.
router.get('/get-gallery-names', (req, res, next)=>{
  Gallery.find(req.query, (err, gallery)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
        if(gallery.length){
          console.log(`Gallery is send to the client!`);
          res.json(gallery);
        }else{
          res.json([])
        }
        
    }
  })
});

// Return all gallery names for the client.
router.get('/get-all', (req, res, next)=>{
  Gallery.find({}, (err, gallery)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
        console.log(`Gallery is sent!`);
        res.json(gallery);
    }
  })
});

// Return a gallery names for the client.
router.get('/get-a-gallery', (req, res, next)=>{
  Gallery.find({_id: req.query.id}, (err, gallery)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
        console.log(`Gallery is sent!`);
        res.json(gallery);
    }
  })
});

// Remove a gallery
router.get('/delete-gallery', (req, res, next)=>{
  let toDeleteFolder = `${__basedir}/static/images/gallery/${req.query.category}/${req.query.date}`;
  fsExtra.removeSync(toDeleteFolder);
  Gallery.findOneAndRemove(req.query, (err, gallery)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }else{
        console.log(`Gallery is deleted`);
        res.json({
          message: "Sucessfully deleted!"
        });
    }
  })
});


router.post('/move-gallery', (req, res, next)=>{
    var storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            const rootFolder = `${__basedir}/static/images/gallery/`;
            let moveFolder = `${__basedir}/static/images/gallery/${req.query.galleryName}`;
            let dateFolder = `${__basedir}/static/images/gallery/${req.query.galleryName}/${req.query.date}`;
            if(!fs.existsSync(rootFolder)){
              fs.mkdirSync(rootFolder);
            }
            if(!fs.existsSync(moveFolder)){
              fs.mkdirSync(moveFolder);
            }
            if(!fs.existsSync(dateFolder)){
              fs.mkdirSync(dateFolder);
            }

            cb(null, dateFolder);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
      });

      var upload = multer({storage: storage}).array("gallery");

    upload(req, res, err=>{
        if(err){
          console.log(err.message);
          res.json({
            message: err.message
          });
        }else{
          console.log("")
          res.json({
            message: "Gallery Images added.."
          });
        }
      })
})

router.post('/add-gallery', (req, res, next)=>{

    let gallery = new Gallery(req.body);

    gallery.save(err=>{
        if(err){
            console.log(err.message);
            res.json({
                message: err.message
            });
        }else{
            console.log("Gallery sucessfully created!");
            res.json({
                message: "Gallery sucessfully created!"
            });
        }
    });
});

module.exports = router;