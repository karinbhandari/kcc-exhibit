import React from "react";
import axios from 'axios';
import SnackBar from "../../SnackBar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Modal } from '@material-ui/core';
import DashboardShowSkeleton from "../DashboardSkeleton/DashboardShowSkeleton";
import DashboardUpdateGallery from "./DashboardUpdateGallery";

const DashboardShowGallery = () => {

    const [galleryId, setGalleryId] = React.useState(0);

    const [galleryList, setGalleryList] = React.useState([]);

    const [updateGalleryModel, setUpdateGalleryModel] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const closeUpdateGalleryModel = () => {
        setUpdateGalleryModel(false);
        getAllGallery();
    }
    const openUpdateGalleryModel = () => {
        setUpdateGalleryModel(true);
    }

    React.useEffect(()=>{
        getAllGallery();
    }, []);

    const getAllGallery = () => {
        axios.get('/dashboard/gallery/get-all')
        .then(res=>{
            setGalleryList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const deleteAGallery = (category, date) => {
        axios.get(`/dashboard/gallery/delete-gallery?category=${category}&date=${date}`)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            getAllGallery();
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    return(
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="d-d-s-g">
                {
                    galleryList.length
                        ?
                    <Table
                        stickyHeader 
                        aria-label="sticky table"
                        style={{
                            height: "auto",
                            width: "100%",
                            overflow: "auto"
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>S.N</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {galleryList.map((obj, key)=>{
                                return(
                                    <TableRow key={key}>
                                        <TableCell>{key + 1}</TableCell>
                                        <TableCell>
                                            {obj.date}
                                        </TableCell>
                                        <TableCell>{obj.category}</TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={()=>{
                                                    setGalleryId(obj._id);
                                                    openUpdateGalleryModel();
                                                }}
                                                color="secondary"
                                                variant="contained"
                                            >
                                                Update
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button 
                                                onClick={()=>{
                                                    setGalleryId(obj._id);
                                                    deleteAGallery(obj.category, obj.date);
                                                }}
                                                // style={
                                                //     {
                                                //         background: "red",
                                                //         color: "white"
                                                //     }
                                                // } 
                                                variant="contained"
                                                disabled={true}
                                            >
                                                Delete
                                            </Button>      
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>  
                        :
                    <DashboardShowSkeleton closeUpdateGalleryModel={closeUpdateGalleryModel} id={galleryId}/>
                }
            </div>
            <Modal
                arial-labelledby="gallery-update-model"
                arial-describedby="gallery-update-model"
                open={updateGalleryModel}
                onClose={closeUpdateGalleryModel}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                    <DashboardUpdateGallery closeUpdateGalleryModel={closeUpdateGalleryModel} id={galleryId}/>
            </Modal>
            <style jsx>{`
                .d-d-s-g{
                    min-height: 300px;
                    width: 100%;
                }
            `}</style>
        </React.Fragment>
    );
}

export default DashboardShowGallery;