import React from 'react';
import Newsletter from './Newsletter';
import Map from './Map';
import CustomPageTitle from '../CustomPageTitle/CustomPageTitle';
// import CustomQuoete from '../CustomQuoete/CustomQuoete';
import TeamProfile from './TeamProfile';
import axios from  'axios';
import SnackBar from '../../SnackBar';
import Skeleton from '@material-ui/lab/Skeleton';
import TeamProfileSkeleton from './TeamProfileSkeleton';
// import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

const MapNewsletter = () => {

    const [teamList, setTeamList] = React.useState([]);

    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        axios.get("/dashboard/our-team/get-all")
        .then(res=>{
            setTeamList(res.data);
        })
        .catch(err=>{
            setShowSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }, []);

    return(
        <React.Fragment>
            {showSnack.value && <SnackBar open={true} message={showSnack.message} variant={showSnack.variant}/>}
            <div className="c-contact-us-wrapper">
                <div className="c-contact-us">
                    <div className="c-contact-us-title-wrapper">
                        <div className="c-contact-us-title c-flex-center">
                            <CustomPageTitle smileyName="happy.png" title="Let's Get In Touch" />
                        </div>
                    </div>
                    <div className="c-contact-us-newsletter-wrapper">
                        <div className="c-contact-us-newsletter">
                            <div className="c-contact-details-wrapper">
                                <div className="c-contact-details-wrapper-head c-flex-center">
                                    <p style={{
                                        color: "aliceblue",
                                        fontSize: "27px",
                                        fontWeight: "bold",
                                        letterSpacing: "1.5px"
                                    }}>TEAM</p>
                                </div>
                                <div className="c-contact-details-wrapper-body">
                                    {
                                        !teamList.length
                                            ?
                                            <>                                          
                                                <TeamProfileSkeleton />
                                                <TeamProfileSkeleton />
                                                <TeamProfileSkeleton />
                                                <TeamProfileSkeleton />
                                            </>
                                            :
                                        teamList.map((v,k)=>{
                                            return(<TeamProfile key={k} teamList={v}/>)
                                        })
                                    }
                                </div>
                            </div>
                            <Newsletter />
                        </div>
                    </div>
                   <div className="c-contact-us-divider-container">
                    <div className="c-contact-us-divider-wrapper">
                            <div className="c-contact-us-divider">
                            </div>
                        </div>
                   </div>
                    <div className="c-contact-us-map-wrapper">
                        <div className="c-contact-us-map">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

            .c-contact-details-wrapper-head{
                height: 50px;
                width: 100%;
            }
            .c-contact-details-wrapper-body{
                height: 400px;
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                overflow-y: auto;
                overflow-y: scroll;
            }

            @media screen and (max-width: 899px){
                .c-contact-us-wrapper{
                    margin-top: 50px !important;
                }
            }
            .c-contact-us-wrapper{
                min-height: 500px;
                width: 100%;
                display: flex;
                background: #265078;
            }
            .c-contact-us{
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .c-contact-us-title-wrapper{
                height: 100px;
                width: 100%;
                display: flex;
            }

            .c-contact-us-newsletter{
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 20px 10px 10px 10px;
            }

            @media screen and (min-width: 780px){
                .c-contact-us-newsletter{
                    flex-direction: row;
                }   

                .c-contact-details-wrapper{
                    width: 40% !important;
                    margin-right: 10px;
                }
            }

            .c-contact-details-wrapper{
                height: 500px;
                width: 100%;
                border: 1px solid white;
                border-radius: 10px;
                margin-right: 10px;
                padding: 30px 20px 30px 20px;
            }

            .c-contact-details-wrapper>p{
                color: #ffffff;
                letter-spacing:
            }

            .c-contact-us-title{
                height: 100px;
                width: 100%;
                background: #193d61;
            }
            .c-contact-us-newsletter-wrapper{
                min-height: 350px;
                width: 100%;
            }
            .c-contact-us-divider-container{
                min-height: 30px;
                width: 100%;
            }
            .c-contact-us-divider-wrapper{
                height: 30px;
                width: 100%;
                position: relative;
                marginTop: 30px;
                display: flex;
                justify-content: center;
            }
            .c-contact-us-divider{
                border: 110px solid #265078;
                border-left: 110px solid transparent;
                border-right: 110px solid transparent;
                border-bottom: 110px solid transparent;
            }

            .c-contact-us-map-wrapper{
                height: 500px;
                width: 100%;
                display: flex;
            }
            .c-contact-us-map{
                flex: 1;
                display: flex;
            }

            `}</style>
        </React.Fragment>
    )
}

export default MapNewsletter;
