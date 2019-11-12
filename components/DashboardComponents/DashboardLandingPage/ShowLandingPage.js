import React from 'react';
import { Button, Modal } from '@material-ui/core';
import UpdateLandingPage from './UpdateLandingPage';
import axios from 'axios';
import SnackBar from '../../SnackBar';

const ShowLandingPage = () => {

    const [toggleUpdateModal, setToggleUpdateModal] = React.useState(false);

    const [landingPageInfo, setLandingPageInfo] = React.useState({});


    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getLandingPage();
    }, []);

    const getLandingPage = () => {
        axios.get('/dashboard/landing-page/get-landing-page-date-info')
        .then(res=>{
            setLandingPageInfo(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const closeLandingPageUpdateModal = () => {
        setToggleUpdateModal(false);
        getLandingPage();
    }
    const openLandingPageUpdateModal = () => {
        setToggleUpdateModal(true);
    }

    return(
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="d-show-landing-page">
                <span className="d-show-landing-page-noti c-flex-center">
                    Info At Landing Page
                </span>
                <div className="d-show-landing-page-main">
                    <div className="d-show-landing-page-main-message c-flex-center">
                        <div>
                            <span
                            >
                                Exhibit Starting Date:</span>   
                            <span
                                style={{
                                    borderBottom: "2px dashed #333333"
                                }}
                            >
                                {new Date(landingPageInfo.startingEnglishDate).getUTCFullYear()}-{new Date(landingPageInfo.startingEnglishDate).getUTCMonth()}-{new Date(landingPageInfo.startingEnglishDate).getUTCDate()}</span>
                        </div>  
                        <div>
                            <span
                            >
                                Exhibit Ending Date:
                            </span>   
                            <span 
                                style={{
                                    borderBottom: "2px dashed #333333"
                                }}
                            >   
                                {new Date(landingPageInfo.endingEnglishDate).getUTCFullYear()}-{new Date(landingPageInfo.endingEnglishDate).getUTCMonth()}-{new Date(landingPageInfo.endingEnglishDate).getUTCDate()}</span>
                        </div>  
                        <div>
                            <span
                            >
                                Exhibit Starting Time:
                            </span>   
                            <span
                                style={{
                                    borderBottom: "2px dashed #333333"
                                }}
                            >
                                {new Date(landingPageInfo.startingEnglishTime).getHours()}:{new Date(landingPageInfo.startingEnglishTime).getMinutes() < 10 ? '0': ''}{new Date(landingPageInfo.startingEnglishTime).getMinutes()} A.M</span>
                        </div>  
                        <div>
                            <span
                            >
                                Exhibit Ending Time:</span>   
                            <span
                                style={{
                                    borderBottom: "2px dashed #333333"
                                }}
                            >
                                {new Date(landingPageInfo.endingEnglishTime).getHours()}:{new Date(landingPageInfo.endingEnglishTime).getMinutes() < 10 ? '0' : ''}{new Date(landingPageInfo.endingEnglishTime).getMinutes()} P.M</span>
                        </div>  
                    </div>
                    <div className="d-show-landing-page-main-update c-flex-center">
                        <Button 
                            onClick={()=>{
                                openLandingPageUpdateModal();
                            }}
                            color="primary"
                            variant="contained"
                            // disabled={true}
                        >
                            Update Landing Page
                        </Button>
                    </div>
                </div>
                <div className="d-show-landing-page-other-info">
                    <span>Finished! Other information required for landing page are auto created and maintained!</span>
                </div>
            </div>
            
            <Modal
                arial-labelledby="landing-page-update-model"
                arial-describedby="landing-page-update-model-dashboard-compo"
                open={toggleUpdateModal}
                onClose={closeLandingPageUpdateModal}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div className="d-update-landing-page">
                    <UpdateLandingPage closeLandingPageUpdateModal={closeLandingPageUpdateModal} />
                </div>
            </Modal>
            <style jsx>{`

                @media screen and (max-width: 750px){
                    .d-show-landing-page-noti{
                        font-size: 20px !important;
                    }
                    .d-show-landing-page-main-message>div>span{
                        font-size: 16px !important;
                    }
                    .d-show-landing-page-other-info>span{
                        font-size: 16px !important;
                    }
                }

                // Modal
                .d-update-landing-page{
                    min-height: 300px;
                    width: 90%;
                    padding: 20px;
                    background: white;
                }
                .d-show-landing-page{
                    min-heigt: 400px;
                    width: 100%;
                    padding: 10px;
                    overflow-y: scroll;
                }
                .d-show-landing-page>div{
                    margin-top: 20px;
                }
                .d-show-landing-page-noti{
                    background: #007ee5;
                    border-radius: 5px;
                    color: #ffffff;
                    font-size: 25px;
                    display: block;
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    // font-weight: bold;
                    letter-spacing: 1.5px;
                    padding: 8px 5px 8px 5px;
                }
                .d-show-landing-page-main{
                    height: auto;
                    width: 100%;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    background: lavender;
                    border-radius: 5px;
                }
                .d-show-landing-page-main-message{
                    width: 100%;
                    height: auto;
                    font-size: 20px;
                    color: #333333;
                    display: flex;
                    flex-direction: column;
                    letter-spacing: 1.5px;
                }
                .d-show-landing-page-main-message>div{
                    min-height: 50px;
                    width: 100% !important;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .d-show-landing-page-main-message>div>span{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    padding-left: 5px;
                    font-size: 20px;
                }
                .d-show-landing-page-main-update{
                    width: 100%;
                    height: 50px;
                    margin-bottom: 10px;
                }
                .d-show-landing-page-other-info{
                    height: auto;
                    border-radius: 5px;
                    padding: 10px;
                    background: #06a10b;
                }
                .d-show-landing-page-other-info>span{
                    font-size: 18px;
                    letter-spacing: 1px;
                    color: white;
                }
            `}</style>
        </React.Fragment>
    );
}

export default ShowLandingPage;