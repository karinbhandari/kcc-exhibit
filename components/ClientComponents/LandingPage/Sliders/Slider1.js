const Slider1 = (props) => {

    const getMonth = (date) => {
        switch(date){
            case 1:
                return "January";
            case 2:
                return "Feburary";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return "";
        }
    }

    return(
        <>
        <div className="c-landing-page-slider-layout">
            <div className="c-landing-page-slider-layout-left c-flex-center">
            <div className="c-landing-page-slider-layout-left-div c-flex-center" style={{
                    flexDirection: "column",
                    background: "#072739",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px"
                }
            }>
                <span style={{opacity: "0.7"}}>We Coordinally Invite</span>
                <span style={{opacity: "0.8"}}>You To</span>
                <span style={{color: "orange"}}>Kcc Exhibit {props.exhibitYear}</span>
                <span style={{color: "orange"}}>{props.startDay} & {props.endDay} {getMonth(props.month)}</span>
                <span style={{color: "orange"}}>{props.startTime} am - {props.endTime} pm</span>
            </div>
            </div> 
            <div className="c-landing-page-slider-layout-right c-flex-center">
                <img src="/static/images/image-slider/slider1.png" alt="slider-image-1"/>
            </div> 
        </div>
        <style jsx>{`
            .c-landing-page-slider-layout{
                height: calc(100vh - 100px);
                width: 100%;
                min-height: 450px;
                background: pink;
                display: flex;
                flex-direction: row;
                background-image: linear-gradient(120deg, #102a45 , #265078);
            }
            .c-landing-page-slider-layout-left{
                flex: 1.3;
                flex-direction: column;
                padding: 10px 0px 10px 0px
            }
            .c-landing-page-slider-layout-right{
                flex: 2;
                overflow: hidden;
            }
            .c-landing-page-slider-layout-right>img{
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
            .c-landing-page-slider-layout-left-div{
                width: 80%;
                max-height: 350px;
            }

            .c-landing-page-slider-layout-left>div>span{
                font-size: 30px;
                color: white;
                margin-bottom: 10px;
                letter-spacing: 2px;
            }
            @media screen and (min-width: 885px) and (max-width: 1295px){
                .c-landing-page-slider-layout-left>div>span{
                    font-size: 25px !important;
                } 
                .c-landing-page-slider-layout-left-div{
                    width: 80%;
                } 
            }
            @media screen and (max-width: 520px){
                .c-landing-page-slider-layout-left>div>span{
                    font-size: 20px !important;
                } 
                .c-landing-page-slider-layout-left-div{
                    width: 90%;
                }
            }
            @media screen and (min-width: 400px){
                .c-landing-page-slider-layout-right>img{
                    height: auto;
                    width: 100%;
                }

            }
            @media screen and (max-width: 900px){
                .c-landing-page-slider-layout{
                    height: calc(100vh - 50px)!important;
                    flex-direction: column !important;
                }   
            }
        `}</style>
        </>
    )
}

export default Slider1;