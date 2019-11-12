import React from 'react';
import axios from 'axios';
import SnackBar from '../../../SnackBar';
import Slider2Skeleton from './slider2Skeleton';

const Slider2 = () => {

    const [thumbImagesList, setThumbImagesList] = React.useState([]);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        axios.get("/dashboard/main-attractions/get-all-thumbs")
        .then(res=>{
            setThumbImagesList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            });
        })
    }, []);


    return(
        <>
        {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
        <div className="c-landing-page-slider-layout">
            <div className="c-landing-page-slider-layout-left c-flex-center">
                <div className="c-landing-page-slider-layout-left-div c-flex-center" style={{
                    flexDirection: "column",
                    background: "#072739",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px"
                }}>
                <span
                >Main Attractions</span>
                <span>of</span>
                <span style={{color: "orange"}}
                >The Day</span>
                </div>
            </div> 
            <div className="c-landing-page-slider-layout-right">
                {
                    !thumbImagesList.length
                        ?
                    <div className="c-landing-page-thumb-replacer">
                        <Slider2Skeleton />
                        <Slider2Skeleton />
                        <Slider2Skeleton />
                        <Slider2Skeleton />
                        <Slider2Skeleton />
                        <Slider2Skeleton />
                    </div>
                         :
                
                     <div className="c-landing-page-thumb">
                         {thumbImagesList.map((v,k)=>{ 
                             return(
                                <div
                                    style={{
                                        height:"150px",
                                        width:"140px",
                                        borderRadius: "5px",
                                        padding: "10px",
                                        display: "flex", 
                                        justifyContent: "center", 
                                        flexDirection: "column",
                                        alignItems: "center",
                                        border: "1px solid white",
                                        margin: "10px",
                                    }}
                                    key={k}
                                >
                                    <div
                                        className="c-flex-center"
                                        style={{
                                            height: "110px",
                                            width: "130px"
                                        }}
                                    >
                                        <img
                                            src={v}
                                            alt={`mainattraction-${k}`}
                                            className="c-landing-page-thumb-image"
                                            key={k}
                                            style={{
                                                height: "100px",
                                                width: "100px"
                                            }}
                                        />  
                                    </div>
                                    <div 
                                        className="c-flex-center"
                                        style={{
                                            height: "40px",
                                            width: "100%"
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "#FFFFFF"
                                            }}
                                        >
                                            Project Exhibition</span>
                                    </div>
                                </div>
                             )
                         })}
                    </div>
                }
            </div> 
        </div>
        <style jsx>{`
            .c-landing-page-thumb-replacer{
                height: 100%;
                width: 100%;
                padding: 0px 10px 0px 10px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-content: space-around;
            }
            .c-landing-page-thumb{
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                overflow-y: auto;
            }
            @media screen and (max-width: 900px){
                .c-landing-page-thumb{
                    align-content: flex-start !important;
                }
            }
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
                    font-size: 25px !important;
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

export default Slider2;