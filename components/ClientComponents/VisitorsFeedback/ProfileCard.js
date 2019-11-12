// import ActiveLink from "../../ActiveLink";

const ProfileCard = (props) => {
    return(
        <>
            <div className="ProfileCard">
                <div className="profile-card-wrapper">
                    <div className="profile-card-picture">
                            <img src={props.personImage} alt="leader" />
                    </div>
                    <div className="profile-card-work">
                        <div className="profile-card-work-wrapper">
                            <p style={{background: "#bfdbeb"}}><span className="c-profile-card-quoete">"</span> {props.personDesc} <span className="c-profile-card-quoete">"</span></p>
                        </div>
                    </div>
                    <div className="profile-card-name">
                        <p>{props.personName}</p>
                    </div>
                    <div className="profile-card-social-links">
                        <div className="profile-card-facebook-link">
                            <div className="profile-card-icon-wrapper profile-card-facebook-wrapper">
                                {/* <ActiveLink activeClassName="nothing" href={`${}props.personSocailLinks.facebook}> */}
                                    <a>
                                        <img alt="facebook" src="/static/images/social-icons/facebook.svg" height="100%" width="100%"/>
                                    </a>
                                {/* // </ActiveLink> */}
                            </div>
                        </div>
                        <div className="profile-card-instagram-link">
                        <div className="profile-card-icon-wrapper profile-card-instagram-wrapper">
                                {/* <ActiveLink activeClassName="nothing" href={props.personSocailLinks.instagram}> */}
                                    <a>
                                        <img alt="instagram" src="/static/images/social-icons/instagram.svg" height="100%" width="100%"/>
                                    </a>
                                {/* </ActiveLink> */}
                            </div>
                        </div>
                        <div className="profile-card-twitter-link">
                            <div className="profile-card-icon-wrapper profile-card-twitter-wrapper">
                                {/* <ActiveLink to={props.personSocailLinks.twitter}> */}
                                    <a>
                                        <img alt="twitter" src="/static/images/social-icons/twitter.svg" height="100%" width="100%"/>
                                    </a>
                                {/* </ActiveLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

            .c-profile-card-quote{
                font-size: 25px !important;
                color: #333333;
            }
            
            .ProfileCard{
                height: auto;
                min-width: 200px;
                max-width: 80%;
                display: flex;
                border-radius: 10px;
                background: aliceblue;
                    // border: 1px solid red;
                margin-left: auto;
                margin-right: auto;
            }
            .profile-card-wrapper{
                flex:1;
                /* border: 1px solid red; */
            
            }
            .profile-card-picture{
                height: 150px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                // border: 1px solid red;
            
            }
            .profile-card-picture>img{
                height: 120px;
                width: 120px;
                border-radius: 50%;
                border: 5px solid #bfdbeb;
                // border: 1px solid red;
            
            }
            .profile-card-work{
                height: 170px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                // border: 1px solid red;
            
            }
            .profile-card-work-wrapper{
                height: 100%;
                width: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            /* This is all fine */
            .profile-card-name{
                height: 30px;
                width: 100%;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #022140;
                // border: 1px solid red;
            
            }
            
            .profile-card-social-links{
                height: 50px;
                width: 100%;
                display: flex;
                flex-direction: row;
                border-radius: 0px 0px 10px 10px;
            }
            .profile-card-social-links>*{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .profile-card-icon-wrapper{
                height: 50%;
                width: 50%;
                cursor: pointer;
            }
            `}</style>
        </>
    );
}

export default ProfileCard;