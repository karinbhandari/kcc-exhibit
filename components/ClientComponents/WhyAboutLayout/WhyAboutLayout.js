import Layout from '../Layout/Layout';
import CustomPageTitle from '../CustomPageTitle/CustomPageTitle';

const WhyAboutLayout = (props) => {
    const WhyAboutPara = () => {
        if(props.title === "About Us - Kcc Exhibit"){
            return(
                <>
                    <div className="c-about-para">
                        <p className="c-about-para-p">{props.aboutUsPara.para1}</p>
                        <p className="c-about-para-p">{props.aboutUsPara.para2}</p>
                    </div>
                    <style jsx>{`
                    .c-about-para{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                    }   
                    .c-about-para-p{
                        margin-bottom: 15px;
                        color: #ffffff;
                        letter-spacing: 1.5px;
                        line-height: 25px;
                        font-size: 18px;
                    }   
                `}</style>
                </>
            );
        }else{
            return(
                <>
                <div className="c-why-para">
                    <p className="c-why-para-p">{props.whyKccExhibitPara.para1}</p>
                    <p className="c-why-para-p">{props.whyKccExhibitPara.para2}</p>
                    <p className="c-why-para-p">{props.whyKccExhibitPara.para3}</p>
                    <p className="c-why-para-p">{props.whyKccExhibitPara.para4}</p>
                    <p className="c-why-para-p">{props.whyKccExhibitPara.para5}</p>
                    <p className="c-why-para-p">{props.whyKccExhibitPara.para6}</p>
                </div>
                <style jsx>{`
                .c-why-para{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }   
                .c-why-para-p{
                    margin-bottom: 15px;
                    color: #ffffff;
                    letter-spacing: 1.5px;
                    line-height: 25px;
                    font-size: 18px;
                }   
                `}</style>
                </>
            );
        }
    }

    return(
        <Layout title={props.title} desc={props.desc}>
            <div className="c-why-about">
                <div className="c-why-about-top-wrapper c-flex-center">
                    <CustomPageTitle title={props.headingTitle} smileyName={props.smileyName} />
                </div>
                <div className="c-why-about-bottom-wrapper">
                    <div className="c-why-about-bottom-top-wrapper c-flex-center">
                        {WhyAboutPara()}
                    </div>
                    <div className="c-why-about-bottom-bottom-wrapper c-flex-center">
                        <img src={props.image} alt={props.imageAlt} />
                    </div>
                </div>
            </div>
            <style jsx>{`
             @media screen and (max-width: 899px){
                .c-why-about{
                    margin-top: 50px !important;
                }
            }
            .c-why-about{
                height: auto;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .c-why-about-top-wrapper{
                height: 100px;
                width: 100%;
                background: #265078;
            }
            .c-why-about-bottom-wrapper{
                height: calc(100% - 100px);
                width: 100%;
                padding: 30px 20px 30px 20px;
                display: flex;
                flex-direction: column;
                background: #29658a;
            }
            .c-why-about-bottom-top-wrapper{
                min-height: 200px !important;
                width: 100%;
                display: flex;
                padding: 20px 10px 20px 10px;
            }
            
            .c-why-about-bottom-bottom-wrapper{
                min-height: 300px;
                width: 100%;
                display: flex;
                margin-top: 30px;
            }
            .c-why-about-bottom-bottom-wrapper>img{
                heigh: 300px;
                width: auto;
            }
            
            @media screen and (min-width: 850px){
                .c-why-about-bottom-wrapper{
                    flex-direction: row !important;
                }
                .c-why-about-bottom-top-wrapper{
                    width: 60% !important;
                }
                .c-why-about-bottom-bottom-wrapper{
                    width: 40% !important;
                }
                c-why-about-bottom-bottom-wrapper>img{
                    heigh: auto;
                    width: 100%;
                }
            }
            `}</style>
        </Layout>
    );
}

export default WhyAboutLayout;