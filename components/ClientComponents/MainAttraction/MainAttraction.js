import React from 'react';
import MainAttractionItem from './MainAttractionItem';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import CustomPageTitle from '../CustomPageTitle/CustomPageTitle';
import CustomQuoete from '../CustomQuoete/CustomQuoete';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import MainAttractionItemSkeleton from './MainAttractionItemSkeleton';


const MainAttraction = () => {

    const [mainAttractionCategoryList, setMainAttractionCategoryList] = React.useState([]); 

    const quoete = "Main attractions of the day."

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });


    React.useEffect(()=>{
        axios.get("/dashboard/main-attractions/get-all")
        .then(res => {
            setMainAttractionCategoryList(res.data);
        })
        .catch(err =>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }, []);
    return(
    <>
        {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="c-main-attraction">
                <div className="c-main-attraction-head c-flex-center">
                    <CustomPageTitle 
                        title="Main Attractions"
                        smileyName="main-attraction.png"
                    />
                </div>
                <div className="c-main-attraction-quoete c-flex-center">
                    <CustomQuoete quoetes={quoete}/>
                </div>
                <div className="c-main-attraction-body-wrapper">
                    {
                        mainAttractionCategoryList.length 
                        
                            ?
                        <Grid 
                            container style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-around"
                            }}
                        >
                            {mainAttractionCategoryList.map((v,k)=>{
                                return(
                                    <MainAttractionItem key={k} thumb={v.thumb} slug={v.slug} title={v.title} desc={v.desc} />
                                )
                            })}
                        </Grid>
                            : 

                        <Grid container style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignContent: 'space-around'
                        }}>
                            <MainAttractionItemSkeleton />
                            <MainAttractionItemSkeleton />
                            <MainAttractionItemSkeleton />
                            <MainAttractionItemSkeleton />
                            <MainAttractionItemSkeleton />
                            <MainAttractionItemSkeleton />
                        </Grid>
                        
                    }
                </div>
            </div>
            <style jsx>{`

                @media screen and (max-width: 899px){
                    .c-main-attraction{
                        margin-top: 50px !important;
                    }
                }
                .c-main-attraction{
                    height: auto;
                    width: 100%;
                    background: #265078;
                    display: flex;
                    flex-direction: column;
                }
                .c-main-attraction-head{
                    height: 100px;
                    background: #193d61;
                    width: 100%;
                }
                .c-main-attraction-quoete{
                    height: auto;
                    width: 100%;
                }
                .c-main-attraction-body-wrapper{
                    min-height: 400px;
                    width: 100%;
                    display: flex;
                    padding-bottom: 10px;
                }
            `}</style>
    </>
    );
}


export default MainAttraction;