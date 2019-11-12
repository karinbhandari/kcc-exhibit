import React from 'react';
import axios from 'axios';
import SnackBar from '../../components/SnackBar';
import Layout from '../../components/ClientComponents/Layout/Layout';
import CustomPageTitle from '../../components/ClientComponents/CustomPageTitle/CustomPageTitle';
import { Table, TableRow, TableBody, TableHead, TableCell, Paper } from '@material-ui/core';
import AttractionGallery from '../../components/ClientComponents/Gallery/AttractionGallery';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    }
});

const ItemLayout = ({title}) => {
    const classes = useStyles();
    const [name] = React.useState(title);
    const [attraction, setAttraction] = React.useState({});
    const [galleryNames, setGalleryNames] = React.useState([]);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getAttraction();
        getGallery();
    }, []);


    const getAttraction = () => {
        axios.get(`/dashboard/main-attractions/get?title=${name}`)
        .then(res=>{
            setAttraction(res.data)
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const getGallery = () => {
        axios.get(`/dashboard/gallery/get-gallery-names?category=${name}`)
        .then(res=>{
            setGalleryNames(res.data.projectNamesList);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const MainAttractionReceived = () => (
    <>
        <div className="c-ma-item-layout-wrapper">
            <div className="c-ma-item-layout">
               
                <div className="c-ma-item-layout-logo c-flex-center">
                        <img 
                            src={attraction[0].thumb} 
                            alt={attraction[0].slug}
                            style={{
                                height: "170px",
                                width: "170px"
                            }}
                        />
                </div>
                <div className="c-ma-item-layout-title c-flex-center">
                    <CustomPageTitle title={title} smileyName="main-attraction.png"/>
                </div> 
                <div className="c-ma-item-layout-desc c-flex-center">
                   <div className="c-flex-center">
                    <p
                        style={{
                            width: "90%",
                            fontSize: "18px",
                            letterSpacing: "1px"
                        }}
                    >
                        {attraction[0].desc}
                    </p>
                   </div>
                </div>
                <div className="c-ma-item-layout-projects-title">
                    <span
                        style={{
                            fontSize: "16px",
                            color: "white"
                        }}
                    >{attraction[0].title} will have following:-</span>
                </div>
                <div className="c-ma-item-layout-projects-list c-flex-center">
                    <Paper className={classes.root}>
                        <Table
                            className={classes.table} aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.N.</TableCell>
                                    <TableCell>Names</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                            >
                                {
                                    attraction.map((v)=>{
                                        return(
                                            v.projectNamesList.map((v,k)=>(
                                                <TableRow key={k}>
                                                    <TableCell>{k+1}</TableCell>
                                                    <TableCell>{v}</TableCell>
                                                </TableRow>
                                            ))
                                        )
                                    })
                                }  
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div className="c-ma-item-layout-gallery">
                    <AttractionGallery title={attraction[0].title}/>
                </div>
            </div>
        </div>
        <style jsx>{`
            @media screen and (max-width: 899px){
                .c-ma-item-layout-wrapper{
                    margin-top: 50px !important;
                }
            }
            .c-ma-item-layout-wrapper{
                height: auto;
                width: 100%;
                background: #29658a;
            }
            .c-ma-item-layout{
                min-height: 400px;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            .c-ma-item-layout-logo{
                height: 200px;
                width: 100%;
            }

            .c-ma-item-layout-title{
                height: 70px;
                width: 100%;
            }
            .c-ma-item-layout-desc{
                min-height: 200px;
                width: 100%;
                padding: 10px;
                color: #ffffff;
                letter-spacing: 1.5px;
                font-size: 16px;
                flex-direction: column;
            }
            .c-ma-item-layout-desc>div{
                max-width: 1000px;
                padding: 40px 15px 40px 15px;
                background: #204568;
                border-radius: 5px;
            }
            .c-ma-item-layout-projects-title{
                min-height: 30px;
                width: 100%;
                padding: 10px;
                margin: 10px;
            }
            .c-ma-item-layout-projects-list{
                max-height: 400px;
                width: 100%;
                overflow-y: scroll;
                border: 1px solid red;
            }
            .c-ma-item-layout-gallery{
                min-height: 250px;
                width: 100%;
            }
        `}</style>
    </>
    );


    const MainAttractionSkeleton = () => (
        <React.Fragment>
            <div className="c-main-attraction-skeleton">
                <div className="c-flex-center">
                    <Skeleton variant="circle" width="170px" height="170px"/>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Skeleton variant="rect" width="300px" height="40px"/>
                    <div style={{width: "10px"}}></div>
                    <Skeleton variant="circle" width="60px" height="60px"/>
                </div>
                <div className="c-flex-center">
                    <Skeleton 
                        style={{
                            height: "300px",
                            width: "70%",
                            borderRadius: "5px"
                        }}
                        variant="rect"
                    />
                </div>
                <div className="c-flex-center">
                    <Skeleton 
                        variant="rect"
                        height="40px"
                        width="60%"
                    />
                </div>
                <div className="c-flex-center">
                    <Skeleton 
                        variant="rect"
                        height="400px"
                        width="90%"
                    />
                </div>
                <div className="c-flex-center">
                    <Skeleton 
                        variant="rect"
                        height="400px"
                        width="100%"
                    />
                </div>
            </div>
            <style jsx>{`
                .c-main-attraction-skeleton{
                    min-height: 500px;
                    width: 100%;
                    background: #29658a;
                }
                .c-main-attraction-skeleton>div{
                    width: 100%;
                    min-height: 80px;
                    padding: 10px;
                    margin-bottom: 10px;
                }
                @media screen and (max-width: 900px){
                    .c-main-attraction-skeleton{
                        margin-top: 50px !important;
                    }
                }
            `}</style>
        </React.Fragment>
    )

    return(
        <Layout title={title} desc={`${title} of the main attractions.`}>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            {
                attraction.length
                    ?
                <MainAttractionReceived />  
                    :
                <MainAttractionSkeleton />
            }
        </Layout>
    );
}

ItemLayout.getInitialProps = ({query}) => {
   return {title: query.title};
}

export default ItemLayout;
