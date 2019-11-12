import React from 'react';
import {useTheme, withStyles} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ProfileCard from './ProfileCard';
import CustomPageTitle from '../CustomPageTitle/CustomPageTitle';
import axios from 'axios';
import CustomQuoete from '../CustomQuoete/CustomQuoete';
import ProfileCardSkeleton from './ProfileCardSkeleton';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    buttonStyles: {
        cursor: "pointer",
        height: "50px",
        width: "50px",
        color: "#ffffff",
        opacity: 0.8,
        '&:hover': {
            background: "#333333",
            color: "#ffffff"

        }
    },
    mobileStepper: {
        background: "#265078",
        display: "flex",
        justifyContent: "center",
        marginTop: "-20px !important",
        paddingBottom: "20px",
        '& .MuiMobileStepper-dotActive': {
            color: "white"
        }
    }
}

const VisitorsFeedback = (props) => {

    const {classes} = props;

    const quoetes = "We are honored that some of the most talented and inspiring personalities are satisfied with our work. Their words reallu inspired us to work hard even more and impact many lives.";

    const [visitorsDetail, setVisitorsDetail] = React.useState([]);

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = visitorsDetail.length;
    const theme = useTheme();

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        axios.get("/dashboard/what-people-say/get-all")
        .then(res=>{
            setVisitorsDetail(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }, []);

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
       <React.Fragment>
            <div className="c-visitors-feedback-wrapper">
                <div className="c-visiors-feedback">
                    <div className="c-visitors-feedback-head c-flex-center">
                        <CustomPageTitle smileyName="what-people-say.png" title="What People Say" />
                    </div>
                    <div className="c-visitors-attraction-quoete c-flex-center">
                        <CustomQuoete quoetes={quoetes}/>
                    </div>
                    
                    {
                        !visitorsDetail.length
                            ?
                        <div className="c-visitors-feedback-body c-flex-center">
                            <ProfileCardSkeleton />
                        </div>
                            :
                        <div className="c-visitors-feedback-body c-flex-center">
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {visitorsDetail.map((v,k)=>(
                                    Math.abs(activeStep - k) <= 2
                                        ? 
                                    <ProfileCard 
                                        personImage={v.thumb}
                                        personName={v.fullName}
                                        personDesc={v.quoete}
                                        personSocailLinks={
                                            {
                                                facebook: v.facebook,
                                                instagram: v.instagram, 
                                                twitter: v.twitter
                                            }
                                        }
                                        key={k}
                                    />
                                        : 
                                    null
                                ))}
                            </AutoPlaySwipeableViews>
                        </div>
                    }
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="dots"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                    />
                    <div className="c-visitors-feedback-prev-next">
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
            </div>
            <style jsx>{`

                .c-visitors-feedback-prev-next{
                    height: 50px;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: -280px;
                }

                .c-visitors-feedback-wrapper{
                    height: auto;
                    width: 100%;
                    background: #265078;
                }
                .c-visitors-feedback{
                    height: auto;
                    width: 100%;
                }
                .c-visitors-feedback-head{
                    height: 100px;
                    width: 100%;
                    background: #193d61;
                }
                .c-visitors-attraction-quoete{
                    height: auto;
                    width: 100%;
                }
                .c-visitors-feedback-body{
                    min-height: 200px;
                    width: 100%;
                    padding: 30px 10px 30px 10px;
                    // background: #29658a;
                }
            `}</style>
       </React.Fragment>
    )
}

export default withStyles(styles)(VisitorsFeedback);