const Slider3 = () => {
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

                }}>
                <span>Click the top right</span>
                <span>button register to</span>
                <span style={{
                        color: "orange"
                    }}
                >
                    for the event.</span>
            </div>
            </div> 
            <div className="c-landing-page-slider-layout-right c-flex-center">
                <img src="/static/images/image-slider/slider3.png" alt="slider-image-1"/>
            </div> 
        </div>
        <style jsx>{`
            .c-landing-page-slider-layout{
                height: calc(100vh - 100px);
                min-height: 450px;
                width: 100%;
                background: pink;
                display: flex;
                flex-direction: row;
                background-image: linear-gradient(120deg, #102a45 , #265078);
            }
            .c-landing-page-slider-layout-left{
                flex: 1.3;
                flex-direction: column;
                flex-wrap: wrap;
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
                width: 70%;
            }

            .c-landing-page-slider-layout-left>div>span{
                font-size: 25px;
                color: white;
                margin-bottom: 10px;
                letter-spacing: 2px;
            }
            @media screen and (min-width: 885px) and (max-width: 1295px){
                .c-landing-page-slider-layout-left>div>span{
                    font-size: 22px !important;
                } 
                .c-landing-page-slider-layout-left-div{
                    width: 90%;
                } 
            }
            @media screen and (max-width: 520px){
                .c-landing-page-slider-layout-left>div>span{
                    font-size: 18px !important;
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

export default Slider3;