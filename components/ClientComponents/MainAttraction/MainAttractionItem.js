import React from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

const MainAttractionItem = (props) => {
    return(
        <React.Fragment>
            <Grid  item xs={11} sm={6} md={4} className="c-main-attraction-item-wrapper">
                <div className="c-main-attraction-item">
                    <div className="c-main-attraction-item-head">
                        <div className="c-main-attraction-item-head-image c-flex-center">
                            <img
                                src={props.thumb}
                                height="100px"
                                width="100px"
                                alt={props.slug}
                            />
                        </div>
                        <div className="c-main-attraction-item-head-title c-flex-center">
                            <span
                                style={{
                                    fontSize: "20px",
                                    color: "#ffffff",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    fontWeight: "bold"
                                }}
                            >
                                {props.title}
                            </span>
                        </div>  
                    </div>
                    <div className="c-main-attraction-item-body c-flex-center">
                        <div
                            style={{
                                textAlign: "center",
                                color: "#ffffff",
                                maxHeight: "100px",
                                overflow: "hidden"
                            }}
                            dangerouslySetInnerHTML={{__html: props.desc}}
                        >
                        </div>
                    </div>
                    <div className="c-main-attraction-item-footer">
                        <Link  href={{ pathname: '/main-attractions/item-layout', query: {title: props.title}} }>
                            <a style={{
                               color: "orange",
                               textDecoration: "none"
                                }}
                            >
                                learn more...
                            </a>
                        </Link>
                    </div>
                </div>
            </Grid>
            <style jsx global>{`

                @media screen and (max-width: 500px){
                    .c-main-attraction-item-head-title>span{
                        font-size: 14px !important;
                    }
                }
                @media screen and (max-width: 400px){
                    .c-main-attraction-item-head-image>img{
                        height: 80px !important;
                        width: 80px !important;
                    }
                }
                .c-main-attraction-item-wrapper{
                    height: auto;
                    border-radius: 10px;
                    padding: 10px;
                }
                .c-main-attraction-item{
                    height: 270px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    background: #193d61;
                    padding: 5px;
                }
                .c-main-attraction-item-head{
                    height: 80px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                }
                .c-main-attraction-item-head-image{
                    width: 100px;
                    border-radius: 100px;
                    height: 100px;
                }
                .c-main-attraction-item-head-title{
                    width:  calc(100% - 80px);
                    height: 80px;
                    
                }
                .c-main-attraction-item-body{
                    height: 140px;
                    width: 100%;
                    display: flex;
                    margin-top: 15px;
                    flex-direction: column;
                    overflow-y: hidden;
                    background: #193d61;
                }
                .c-main-attraction-item-footer{
                    height: 20px;
                    width: 100%;
                    padding-left: 10px;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
                
            `}</style>
        </React.Fragment>
    );
}

export default MainAttractionItem;