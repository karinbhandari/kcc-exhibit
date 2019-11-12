const express = require('express');
const next = require("next");

var cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

const app = express();
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const landingPageRouter = require('./routes/landing-page');
const newsletterRouter = require('./routes/newsletter');
const mainAttractionRouter = require('./routes/main-attraction');
const galleryRouter = require('./routes/gallery');
const lastYearMemoryRouter = require('./routes/last-year-memory.js');
const whatPeopleSayRouter = require('./routes/what-people-say');
const ourSponserRouter = require('./routes/our-sponser');
const ourTeamRouter = require('./routes/our-team');
const loginRouter = require('./routes/login');
const modalRouter = require('./routes/modal');

global.__basedir = __dirname;


mongoose.connect("mongodb://localhost:27017/KccExhibit", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Sucessfully connected to mongodb at port 27017");
})
.catch((err)=>{
    console.log("Failed to connect to mongodb server => ", err);
    process.exit();
});


nextApp.prepare().then(()=>{
    

    //for parsing application/json
    app.use(bodyParser.json({limit: "100mb"})); 

    //for parsing application/x-www-form urlencoded
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: "100mb"
    }));  

    app.use(cors());


    
    
    // routers
    app.use("/dashboard/landing-page", landingPageRouter)
    app.use('/dashboard/newsletter', newsletterRouter);
    app.use('/dashboard/main-attractions', mainAttractionRouter);
    app.use('/dashboard/gallery', galleryRouter);
    app.use('/dashboard/last-year-memory', lastYearMemoryRouter);
    app.use('/dashboard/what-people-say', whatPeopleSayRouter);
    app.use('/dashboard/our-sponser', ourSponserRouter);
    app.use('/dashboard/our-team', ourTeamRouter);
    app.use('/dashboard/modal', modalRouter);
    app.use('/api/login', loginRouter);

    app.all("*", (req, res)=>{
        return handle(req, res);
    });

    app.listen(port, err=>{
        if(err) throw err;
        console.log(`> Server is listening at PORT=>${port}`);
    });
});