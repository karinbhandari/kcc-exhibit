import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import ActiveLink from '../../ActiveLink';
import { Modal } from '@material-ui/core';

const DashboardSidenav = (props) => {
    const [showModal, setShowModal] = React.useState(true);
    var sideNavItems = [
        {name: "Landing Page", link: "/dashboard/landing-page"},
        {name: "Main Attraction", link: "/dashboard/main-attraction"}, 
        {name: "What People Say", link: "/dashboard/what-people-say"},
        {name: "Our Sponsers", link: "/dashboard/our-sponsers"},
        {name: "Last Year Memory", link: "/dashboard/last-year-memory"},
        {name: "NewsLetter", link: "/dashboard/newsletter"} ,
        {name: "Team", link: "/dashboard/team"} ,
        {name: "Gallery", link: "/dashboard/gallery"},
        {name: "Password", link: "/dashboard/password"},
        {name:"Modal", link: "/dashboard/modal"}
    ];

    const closeInitialModal = () => {
        setShowModal(false);
    }

    React.useState(()=>{
        const visitorModal = localStorage.getItem("show-visitors-modal");
        if(visitorModal){
            setShowModal(false);
        }else{
            setShowModal(true);
            localStorage.setItem("show-visitors-modal", true)
        }
    });
    return(
        <React.Fragment>
            <div
                className="d-dashboard-sidenav"
                style={{
                    display: props.toggle ? "flex" : "none"
                }}
            >
                <List>
                    {sideNavItems.map((item, key)=>{
                        return(
                            <ListItem button key={key} style={{borderBottom: "1px solid #cccccc", width: "200px"}}>
                                <ActiveLink href={item.link} activeClassName="active">
                                    <a className="nav-link">
                                        <ListItemText primary={item.name}></ListItemText>
                                    </a>
                                </ActiveLink>
                            </ListItem>

                        )
                    })}
                </List>
            </div>
            <Modal
                arial-labeledby="initial-dashboard-modal"
                arial-describedby="initial-dashboard-modal-desc"
                open={showModal}
                onClose={closeInitialModal}
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        width: "70%",
                        height: "auto",
                        background: "white",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}
                >
                    <span
                        style={{
                            color: "#333333",
                            fontSize: "22px"
                        }}
                    >
                        <span
                            style={{
                                color: "red",
                                textTransform: "uppercase"
                            }}
                        >
                            Notice:<br />    (*Technical and Security related)<br/>
                        </span>
                        <span
                        style={{
                            fontSize: "16px"
                        }}
                        >
                            1. Project is not complete!<br />
                            2. Inputs are not validated yet!<br />
                            3. Update, add & delete functionality of some components are disabled for visitors!<br />
                        </span>
                        </span>
                </div>
            {/* /> */}
            </Modal>
            <style jsx>{`
            .d-dashboard-sidenav{
                max-width: 200px !important;
                min-width: 200px !important;
                left: 0px;
                height: calc(100vh - 50px);
                background: #1a3b5c;
                color: #ffffff;
            }
            .active{
                background: #031E49;
                color: yellow !important;
                padding: 0px 5px 0px 5px;
            }
            .nav-link{
                text-decoration: none;
                color: #ffffff;
            }
            `}</style>
        </React.Fragment>
    );
}

DashboardSidenav.propTypes = {
    toggle: PropTypes.bool.isRequired
}

export default DashboardSidenav;