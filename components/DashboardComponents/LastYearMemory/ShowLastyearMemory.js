import React from 'react';
import { Button, Modal } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import LastYearMemorySkeletonGrid from './LastYearMemorySkeletonGrid';
import AddLastYearMemory from './AddLastYearMemory';

const ShowLastYearMemory = () => {

    const [images, setImages] = React.useState([]);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const [lastYearMemoryUpdate, setLastYearMemoryUpdate] = React.useState(false);

    React.useEffect(()=>{
        getLastYearMemory();
    }, []);

    const getLastYearMemory = () => {
        axios.get('/dashboard/last-year-memory/get-last-year-memory-gallery-names')
        .then(res=>{
            setImages(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }

    const openUpdateLastYearMemoryModal = () => {
        setLastYearMemoryUpdate(true);
    }
    const closeUpdateLastYearMemoryModal = () => {
        setLastYearMemoryUpdate(false);
        getLastYearMemory();
    }



    return(
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="d-show-landing-page">
                <div className="d-show-landing-page-main">
                    <div className="d-show-landing-page-main-message">
                        <div
                            className="c-flex-center"
                            style={{
                                width: "100%",
                                height: "auto",
                                background: "#007ee5",
                                padding: "10px",
                                borderRadius: "5px"
                            }}
                        >
                            <span
                                style={{
                                    color: "white",
                                    fontSize: "25px"
                                }}
                            >
                                Last Year Memory Gallery View
                            </span>
                        </div>
                        
                        {
                            images.length
                                ?
                            <div
                                style={{
                                    minHeight: "100px",
                                    width: "100%",
                                    padding: "10px",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    flexWrap: "wrap",
                                    background: "lavender",
                                    marginTop: "20px",
                                    borderRadius: "5px"
                                }}
                            >
                                {images.map((v,k)=>(
                                    <img 
                                        src={`/static/images/last-year-memory/${v}`}
                                        alt={`${v}-${k}`}
                                        width="150px"
                                        height="150px"
                                        style={{
                                            objectFit: "cover",
                                            marginBottom: "5px"
                                        }}
                                        key={k}
                                    />
                                ))}
                            </div>
                                :
                            <LastYearMemorySkeletonGrid />
                        }
                    </div>
                    <div className="d-show-landing-page-main-update c-flex-center">
                        <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={()=>{
                            openUpdateLastYearMemoryModal();
                        }}
                    >
                            Update Last Year Memory
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                arial-labelledby="last-year-memory-update-model"
                arial-describedby="last-year-memory-update-model-dashboard-compo"
                open={lastYearMemoryUpdate}
                onClose={closeUpdateLastYearMemoryModal}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflowY: "scroll"
                }}
            >
                <div className="d-update-last-year-memory">
                    <AddLastYearMemory closeUpdateLastYearMemoryModal={closeUpdateLastYearMemoryModal}/>
                </div>
            </Modal>
            <style jsx>{`
                // Modal
                .d-update-last-year-memory{
                    min-height: 300px;
                    width: 70%;
                    background: white;
                }
                .d-show-landing-page{
                    min-heigt: 400px;
                    width: 100%;
                    padding: 10px;
                    overflow-y: scroll;
                }
                .d-show-landing-page-main{
                    height: auto;
                    width: 100%;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    borderRadius: 5px;

                }
                .d-show-landing-page-main-message{
                    width: 100%;
                    min-height: 80px;
                    font-size: 20px;
                    color: #333333;
                    letter-spacing: 1.5px;
                    display: flex;
                    flex-direction: column;
                }
                .d-show-landing-page-main-update{
                    width: 100%;
                    min-height: 100px;
                    background: lavender;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            `}</style>
        </React.Fragment>
    );
}

export default ShowLastYearMemory;