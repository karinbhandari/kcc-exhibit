var express = require('express');
var router = express.Router();
var Login = require('../models/login');


// create header
router.post('/validate-password', (req, res, next)=>{
  Login.find({}, (err, docs)=>{
    if(err){
      console.log(err.message);
      res.json({
        message: err.message
      });
    }
    else{
      if(docs.length){
        if(docs[0].username === req.body.username && docs[0].password === req.body.password){
          console.log("Valid admin login request!");
          res.json({
            isValid: true
          });
        }
        else{
          console.log("Not admin!");
          res.json({
            isValid: false
          });
        }
      }else{
        const loginCredential = {
          id: "default-id",
          username: "admin",
          password: "AdminHere007!"
        }
        let login = new Login(loginCredential);
        login.save(err=>{
          if(err){
            console.log(err.message);
            res.json(err.message);
          }else{
            Login.find({id: "default-id"}, (err, login)=>{
              if(err){
                console.log(err.message);
                res.json(err.message);
              }else{
                if(login.length){
                  if(login[0].username === req.body.username && login[0].password === req.body.password){
                    console.log("Valid admin login request!");
                    res.json({
                      isValid: true
                    });
                  }
                  else{
                    console.log("Not admin!");
                    res.json({
                      isValid: false
                    })
                  }
                }
              }
            })
          }
        })
      }
    }
  });
});

// returns passcode
router.get('/get-old-password', (req, res, next)=>{
  Login.find({id: "default-id"}, (err, pass)=>{
    if(err){
      res.json({
        message: "Couldn't find the old password!"
      });
      console.log(err.message);
    }
    else{
      res.json(pass);
    }
  })
});

// api to create password
// router.post('/create-password', (req, res, next)=>{
//   let login = new Login(req.body);
//   login.save(err=>{
//     if(err){
//       console.log(err.message);
//       res.json({
//         message: err.message
//       })
//     }else{
//       console.log("Password Sucessfully created!");
//       res.json({
//         message: "Password Sucessfully created!"
//       });
//     }
//   });
// })

// update passcode
router.post('/update-password', (req, res, next)=> {
  Login.findOneAndUpdate({id: "default-id"}, req.body, {useFindAndModify: false}, (err, doc)=>{
    if(err){
      res.json({
        message: "Error while updating password!"
      });
      console.log(err.message);
    }
    else{
      res.json({
        message: "Password updated successfully!"
      });
    }
  })
})

module.exports = router;
