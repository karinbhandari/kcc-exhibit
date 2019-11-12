import React from 'react';
import CustomPageTitle from '../CustomPageTitle/CustomPageTitle';
import OurSponserItem from './OurSponserItem';
import { Button } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import CustomQuoete from '../CustomQuoete/CustomQuoete';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';
import OurSponsersItemSkeleton from './OurSponsersItemSkeleton';
import TeamProfile from '../MapNewsletter/TeamProfile';
import TeamProfileSkeleton from '../MapNewsletter/TeamProfileSkeleton';

const styles = {
    modelStyle: {
        width: "400px",
        height: "400px",
        background: "white"
    }
}

const OurSponsers = (props) => {

    const {classes} = props;

    const [sponsorsList, setSponsorsList] = React.useState([]);

    const [teamList, setTeamList] = React.useState([]);

    const [sponsorModal, setSponsorModel] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const openSponsorModel = () => {
        setSponsorModel(true);
    }

    const closeSponsorModel = () => {
        setSponsorModel(false);
    }

    React.useEffect(()=>{
        getAllSponsors();
        getTeamInfo();
    }, []);

    const getAllSponsors = () => {
        axios.get("/dashboard/our-sponser/get-all")
        .then(res=>{
            setSponsorsList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const getTeamInfo = () => {
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
    }

    return(
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="c-our-sponsers-wrapper">
                <div className="c-our-sponsers-head c-flex-center">
                    <CustomPageTitle smileyName="our-sponsers.png" title="Our Sponsers" />
                </div>
                <div className="c-our-sponsers-quoete c-flex-center">
                    <CustomQuoete quoetes="without them this program wouldn't been possible!"/>
                </div>
                {
                    sponsorsList.length
                        ?
                    <div className="c-our-sponsers-body">
                        {sponsorsList.map((v,k)=>(
                            <OurSponserItem key={k} companyName={v.companyName} websiteLink={v.websiteLink} thumb={v.thumb}/>
                        ))}
                    </div>
                        :
                    <div className="c-our-sponsers-body">
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                        <OurSponsersItemSkeleton />
                    </div>
                }
                <Modal
                    arial-labeledby="become-sponsorr-modal"
                    arial-describedby="become-sponsor-modal-desc"
                    open={sponsorModal}
                    onClose={closeSponsorModel}
                    style={{
                        border: "1px solid red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div style={{
                        maxWidth: "70%",
                        maxHeight: "70%",
                        overflowY: "auto",
                        padding: "10px",
                        background: "#265078",
                        borderRadius: "5px"
                    }}>
                        <span className="c-flex-center" style={{
                            width: "100%",
                            height: "auto",
                            color: "white",
                            fontSize: "22px"
                        }}>
                            Please Contact Our Team Members:
                        </span>
                        <div style={{
                            width: "100%",
                            minHeight: "200px",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignItems: "space-around"
                        }}>
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
                </Modal>
                <div className="c-our-sponsers-become-sponser c-flex-center">
                    <Button
                        onClick={openSponsorModel}
                        style={{
                        borderColor: "#ffffff",
                        color: "#ffffff",
                        height: "60px",
                        width: "200px",
                        letterSpacing: "1.5px"
                    }} color="primary" variant="outlined">
                        Become sponser
                    </Button>
                </div>
            </div>
            <style jsx>{`
                .c-our-sponsers-wrapper{
                    height: auto;
                    width: 100%;
                    background: #265078;
                    border-bottom: 1px solid #333333;
                }
                .c-our-sponsers-become-sponser{
                    height: 80px;
                    width: 100%;
                }
                .c-our-sponsers-wrapper>div{
                    width: 100%;
                }
                .c-our-sponsers-head{
                    height: 100px;
                    background: #193d61;
                }
                .c-our-sponsers-quoete{
                    height: auto;
                    width: 100%;
                }
                .c-our-sponsers-body{
                    max-height: 400px;
                    padding: 20px 10px 0px 10px;
                    overflow-y: scroll;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    // background: #265078;
                }
            `}</style>
        </React.Fragment>
    );
}

export default withStyles(styles)(OurSponsers);