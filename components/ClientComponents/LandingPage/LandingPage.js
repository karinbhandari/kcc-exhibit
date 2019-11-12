import React from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TimeAlphaLayer from './TimeAlphaLayer';
import {useTheme, withStyles} from '@material-ui/core';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Slider1 from './Sliders/Slider1';
import Slider2 from './Sliders/Slider2';
import Slider3 from './Sliders/Slider3';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const styles = {
    buttonStyles: {
        cursor: "pointer",
        height: "50px",
        width: "50px",
        opacity: 0.8,
        color: "#ffffff",
        '&:hover': {
            background: "#333333",
        }
    }
}



const LandingPage= (props) => {

    const {classes} = props;

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;
    const theme = useTheme();

    const [data, setData] = React.useState({
        exhibitYear: 2020,
        month: 4,
        startDay: 3,
        endDay: 4,
        startTime: 10,
        endTime: 4
    })


    const handleNext = () => {
        if(activeStep === (maxSteps-1)){
            setActiveStep(0);
        }else{
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if(activeStep === 0){
            setActiveStep(maxSteps -1);    
        }else{
            setActiveStep(prevActiveStep => prevActiveStep - 1);   
        }
    };
    
    const handleStepChange = step => {
        setActiveStep(step);
    };

    return(
        <>
            <div className="c-landing-page-wrapper">
                <div className="c-landing-page">
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        <Slider1 exhibitYear={data.exhibitYear} month={data.month} startDay={data.startDay} endDay={data.endDay} startTime={data.startTime} endTime={data.endTime} />
                        <Slider2 />
                        <Slider3 />
                    </AutoPlaySwipeableViews>
                </div>
                <TimeAlphaLayer setData={setData}/>
                <div className="c-landing-page-prev-next">
                    <KeyboardArrowLeft 
                        onClick={handleBack}
                        className={classes.buttonStyles}
                    /> 
                     <KeyboardArrowRight 
                        className={classes.buttonStyles}
                        onClick={handleNext}
                    />
                </div>
            </div>
            <style jsx>{`
                .c-landing-page-prev-next{
                    height: 50px;
                    width: 100%;
                    top: 350px;
                    position: absolute;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .c-landing-page-wrapper{
                    height: auto;
                    min-height: 450px;
                    width: 100%;
                }
                .c-landing-page{
                    height: calc(100vh - 100px) !important;
                    min-height: 450px;
                    width: 100%;
                    background: #333333;
                }

                @media screen and (max-width: 900px){
                    .c-landing-page{
                        height: calc(100vh - 50px) !important;
                        min-height: 450px;
                        margin-top: 50px !important;
                    }
                    .c-landing-page-prev-next{
                        top: 50%;
                    }
                }
            `}</style>
        </>
    );
}

export default withStyles(styles)(LandingPage);