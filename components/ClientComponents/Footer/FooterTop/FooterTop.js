import ActiveLink from '../../../ActiveLink';

const FooterTop = () => {
    return(
        <>
            <div className="c-footer-top">
                <div className="c-footer-top-left-wrapper">
                    <div className="c-footer-top-left">
                        <div className="c-footer-top-box c-footer-top-box1" style={{maxWidth: "200px",minWidth: "200px"}}>
                            <img src="/static/images/logo/kcc-logo.png"  alt="logo" height="80%" width="80%"/>
                        </div>
                        <div className="c-footer-top-box c-footer-top-box2">
                            <div className="c-footer-top-box-head">
                                <p>Important Links</p>
                            </div>
                            <ul className="c-footer-top-box-body">
                                <li>
                                    <ActiveLink href="/" activeClassName="active-footer-link">
                                        <a className="active-footer-link-a">> Home</a>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href="/main-attractions" activeClassName="active-footer-link">
                                        <a className="active-footer-link-a">> Main Attraction</a>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href="/about-us" activeClassName="active-footer-link">
                                        <a className="active-footer-link-a">> About Us</a>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href="/contact-us" activeClassName="active-footer-link">
                                        <a className="active-footer-link-a">> Contact Us</a>
                                    </ActiveLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="c-footer-top-right-wrapper">
                    <div className="c-footer-top-right">
                        <div className="c-footer-top-box c-footer-top-box3">
                            <div className="c-footer-top-box-head">
                                <p>Useful Links</p>
                            </div>
                            <ul className="c-footer-top-box-body">
                                <li>
                                    <ActiveLink href="/gallery" activeClassName="active-footer-link">
                                        <a className="active-footer-link-a">> Exhibit Photos</a>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href="/about-developer" activeClassName="active-footer-link">
                                        <a className="active-footer-link-a">> About Developer</a>
                                    </ActiveLink>
                                </li>
                            </ul>
                        </div>
                        <div className="c-footer-top-box c-footer-top-box4">
                            <div className="c-footer-top-box-head">
                                <p>Get In Touch</p>
                            </div>
                            <ul className="c-footer-top-box-body c-footer-top-box-body-touch">
                                <p className="active-footer-link-a">Putalisadaak, Kathmandu, 44600, Nepal</p>   
                                <p className="active-footer-link-a">Phone: +977-1-4492904</p>
                                <p className="active-footer-link-a">Gmail: exhibit@kcc.edu.np</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            
            // They have a global style =>
            // .c-footer-top, .c-footer-top-left-wrapper, .c-footer-top-right-wrapper, .c-footer-top-left, .c-footer-top-right
            
            .c-footer-top{
                height: auto;
                background: #022140;
                display: flex;
                flex-direction: column;
            }
            
            @media screen and (min-width: 600px) and (max-width: 1024px){
                .c-footer-top{
                    flex-direction: row;
                    justify-content: space-around;
                }
                .c-footer-top-box{
                    width: 100% !important;
                }
            }
            
            @media screen and (min-width: 1024px){
                .c-footer-top, .c-footer-top-left, .c-footer-top-right{
                    flex-direction: row !important;
                }
                .c-footer-top-box{
                    width: 50% !important;
                }
            }
            
            .c-footer-top-left-wrapper, .c-footer-top-right-wrapper{
                display: flex;
            }
            .c-footer-top-left, .c-footer-top-right{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
                padding-left: 20px;
                padding-right: 20px;
            }
            
            .c-footer-top-box{
                width: 100%;
                height: 200px;
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
            }
            .c-footer-top-box-head{
                height: 50px;
                width: 100%;
            }
            .c-footer-top-box-head>p{
                font-size: 25px;
                color: #ffffff;
                display: inline;
                padding: 0px 10px 0px 10px;
                font-weight: 800px;
                border-bottom: 1px solid #ffffff;
            }
            .c-footer-top-box-body{
                height: calc(100% - 50px);
                width: 100%;
            }
            .c-footer-top-box-body-touch{
                padding-top: 5px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }
            .c-footer-top-box-body-touch>p{
                margin-bottom: 10px;
            }
            .c-footer-top-box-head, .c-footer-top-box-body>li{
                display: flex;
                align-items: center;
            }
            .c-footer-top-box-body>li{
                list-style-type: none;
                height: 30px;
                padding-left: 10px;
            }
            .c-footer-top-box-body>li:hover .active-footer-link-a{
                border-bottom: 1px solid #ffffff;
            }
            .active-footer-link{
                background: #041529;
            }
            .active-footer-link-a{
                text-decoration: none;
                color: #ffffff;
                padding: 0px 5px 0px 5px;
                font-size: 16px;
                letter-spacing: 1px;
            }
            `}</style>
        </>
    );
}

export default FooterTop;