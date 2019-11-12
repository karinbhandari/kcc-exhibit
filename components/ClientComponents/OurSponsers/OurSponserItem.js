import React from 'react';
import Link from 'next/link';

const OurSponserItem = (props) => {
    return(
        <React.Fragment>
            <div className="c-our-sponser-item">
                <div className="c-our-sponser-item-image c-flex-center">
                    <img src={props.thumb} alt="demo-image"
                        style={{
                            height: "160px",
                            width: "160px"
                        }}
                    />
                </div>
                <div className="c-our-sponser-item-name">
                    <p
                        style={{
                            color: "#ffffff",
                            paddingLeft: "30px",
                            fontSize: "16px",
                            letterSpacing: "1px"
                        }}
                    >{props.companyName}</p>
                </div>
                <div className="c-our-sponser-item-website-link c-flex-center">
                        <Link href={props.websiteLink}>
                            <a style={{
                                color: "lightskyblue",
                                letterSpacing: "1px",
                                textDecoration: "none"
                            }}>Go to website!<span style={{fontSize: "20px", marginLeft: "3px"}}>&hearts;</span></a>
                        </Link>
                </div>
            </div>
            <style jsx>{`
                .c-our-sponser-item{
                    height: auto;
                    width: 220px;
                    border-radius: 5px;
                    border: 1px solid #ffffff;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                }
                .c-our-sponser-item-image{
                    height: 180px;
                    // border: 1px solid red;
                    border-radius: 5px 5px 0px 0px;
                }
                .c-our-sponser-item-name{
                    min-height: 50px;
                    // border: 1px solid red;
                    padding: 0px 5px 0px 5px;
                }
                .c-our-sponser-item-website-link{
                    height: 50px;
                    // border: 1px solid red;
                    border-radius: 0px 0px 5px 5px;
                }
            `}</style>
        </React.Fragment>
    );
}

export default OurSponserItem;
