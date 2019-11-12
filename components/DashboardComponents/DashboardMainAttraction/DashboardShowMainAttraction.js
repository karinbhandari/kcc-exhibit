import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Modal } from '@material-ui/core';
import SnackBar from '../../SnackBar';
import DashboardShowSkeleton from '../DashboardSkeleton/DashboardShowSkeleton';
import DashboardUpdateMainAttraction from './DashboardUpdateMainAttraction'


const DashboardShowMainAttraction = () => {

    const [attractionId, setAttractionId] = React.useState(0);

    const [mainAttractions, setMainAttractions] = React.useState([]);

    const [updateAttractionModel, setUpdateAttractionModel] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getAttractions();
    }, []);

    const openUpdateAttractionModel = () => {
        setUpdateAttractionModel(true);
    }

    const closeUpdateAttractionModel = () => {
        setUpdateAttractionModel(false);
        getAttractions();
    }

    const getAttractions = () => {
        axios.get('/dashboard/main-attractions/get-all')
        .then(res=>{
            setMainAttractions(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const deleteAttraction = (id) => {
        axios.post(`/dashboard/main-attractions/delete?id=${id}`)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            setTimeout(()=>{
                showSnackBar({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 2000);
            getAttractions();
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
        <div className="d-show-main-attraction-wrapper">
            {
                mainAttractions.length
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
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mainAttractions.map((obj, key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableCell>{key}</TableCell>
                                    <TableCell>
                                        <img src={obj.thumb} alt={obj.title} height="100px" width="100px" />
                                    </TableCell>
                                    <TableCell>{obj.title}</TableCell>
                                    <TableCell>
                                        <Button disabled={snackBar.value} color="secondary" variant="contained" onClick={e=>{
                                            setAttractionId(obj._id);
                                            openUpdateAttractionModel();
                                        }}>
                                            Update
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button 
                                            // disabled={snackBar.value}
                                            disabled={true}
                                            // style={{background: "red", color: "white"}}
                                            variant="contained" onClick={()=>{
                                            setAttractionId(obj._id);
                                            deleteAttraction(obj._id)
                                        }}>
                                            Delete
                                        </Button>      
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>  
                    :
                <DashboardShowSkeleton />
            }
        </div>
        <Modal
            arial-labelledby="attraction-update-model"
            arial-describedby="attraction-update-model"
            open={updateAttractionModel}
            onClose={closeUpdateAttractionModel}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <DashboardUpdateMainAttraction id={attractionId} />

        </Modal>
        <style jsx>{`

        .d-show-main-attraction-wrapper{
            min-height: 200px;
            width: 100%;
        }

        `}</style>
    </React.Fragment>
    )
                
}

export default DashboardShowMainAttraction;