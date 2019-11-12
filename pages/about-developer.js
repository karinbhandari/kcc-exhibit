import React from "react";
import Layout from "../components/ClientComponents/Layout/Layout";

const AboutDeveloper = () => {
    return(
        <Layout title="Karim Bhandari" desc="About developer page of kcc exhibit.">
            <div className="c-about-developer">
                <div className="c-about-developer-wrapper">
                    <div className="c-developer">
                        <div className="c-developer-circle">
                            <div className="c-developer-image">
                                <img src='/static/images/about-developer/leader.jpg' height="100%" width="100%" alt="leader" style={{borderRadius: "50%"}}/>
                            </div>
                            <p className="c-developer-name">Karin Bhandari</p>

                        </div>
                        <img className="c-developer-cover-image" src='/static/images/about-developer/circle.gif' alt="developer-cover" height="400" width="100%"/>
                    </div>
                    <div className="c-developer-details">
                    <div className="c-developer-details-wrapper">
                            <p>Hello, my name is Karin Bhandari. I am a 8th semester student studying at Kantipur City College(KCC). This is 2019 and after couple of months i am graduating. I have a very strong relationship with this college and i am definetly taking many things so, this website is basically my appreciation for my college. This website is developed using ReactJs as frontend, NodeJs as backend and MongoDB as it's primary database. I am a MERN stack developer and if you wanna follow me please check the following links.</p>
                    </div>
                    <div className="c-developer-social-icon">
                        <a href="/https://www.facebook.com/karim.bhandari.7.21"><img src="/static/images/social-icons/facebook.svg" alt="karin-facebook" height="100%" width="100%"/></a>
                        <a href="https://www.instagram.com/karim_bhandari/"><img src="/static/images/social-icons/instagram.svg" alt="karin-instagram" height="100%" width="100%"/></a>
                        <a href="/no-twitter-account-sorry"><img src="/static/images/social-icons/twitter.svg" alt="karin-twitter" height="100%" width="100%"/></a>
                    </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
               
                .c-about-developer{
                    height: auto;
                    width: 100%;
                    display: flex;
                    background: #265078;
                }
                .c-about-developer-wrapper{
                    flex: 1;
                }
                
                .c-developer{
                    height: 400px;
                    width: 100%;
                }
                .c-developer-cover-image{
                    height: 400px;
                    width: 100%;
                    object-fit: cover;
                }
                .c-developer-circle{
                    position: absolute;
                    height: 400px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;
                }
                .c-developer-image{
                    height: 200px;
                    width: 200px;
                    border-radius: 50%;
                    background: gray;
                }
                .c-developer-name{
                    color: #ffffff;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 40px !important;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .c-developer-details{
                    height: auto;
                    width: 100%;
                    padding: 50px 20px 50px 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .c-developer-details-wrapper>p{
                    letter-spacing: 1.5px;
                    font-size: 18px !important;
                    color: #ffffff;
                    line-height: 40px !important;
                }
                .c-developer-details-wrapper{
                    /* border: 1px solid #ffffff; */
                }
                .c-developer-social-icon{
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                }
                .c-developer-social-icon>a{
                    height: 40px;
                    width: 40px;
                    margin: 10px;
                }
                @media screen and (max-width: 600px){
                    .c-developer-details-wrapper, .c-developer-social-icon{
                        width: 100%;
                    }
                    .c-developer-name{
                        font-size: 30px !important;
                    }
                }
                @media screen and (min-width: 600px) and (max-width: 1050px){
                    .c-developer-details-wrapper, .c-developer-social-icon{
                        width: 80%;
                    }
                }
                @media screen and (min-width: 1000px){
                    .c-developer-details-wrapper, .c-developer-social-icon{
                        width: 70%;
                    }
                }
            `}</style>
        </Layout>
    );
}

export default AboutDeveloper;