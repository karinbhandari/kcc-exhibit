import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Modal } from '@material-ui/core';
import axios from 'axios'
import DashboardShowSkeleton from '../DashboardSkeleton/DashboardShowSkeleton';
import UpdateWhatPeopleSay from './UpdateDashboardWhatPeopleSay';
import SnackBar from '../../SnackBar';

const ShowDashboardWhatPeopleSay = () => {

    const [toUpdateId, setToUpdateId] = React.useState(0);

    const [whatPeopleSayList, setWhatPeopleSayList] = React.useState([]);

    const [updateViewModel, setUpdateViewModel] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const closeUpdateViewModel = () => {
        setUpdateViewModel(false);
        getAllPeopleView();
    }
    const openUpdateViewModel = () => {
        setUpdateViewModel(true);
    }

    React.useEffect(()=>{
        getAllPeopleView();
    }, []);

    const getAllPeopleView = () => {
        axios.get('/dashboard/what-people-say/get-all')
        .then(res=>{
            setWhatPeopleSayList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            }); 
        })
    }

    const deletePeopleView = (id) => {
        axios.post(`/dashboard/what-people-say/delete?id=${id}`)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            }); 
            setTimeout(()=>{
                showSnackBar({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 2000);
            getAllPeopleView();
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            }); 
        })
    }

    return (
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}  
            <div className="d-s-d-w-p-s">
                {
                    whatPeopleSayList.length === 0
                        ?
                    <DashboardShowSkeleton />
                        :
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>S.N</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {whatPeopleSayList.map((v,k)=>{
                                return(
                                    <TableRow key={k}>
                                        <TableCell>{k+1}</TableCell>
                                        <TableCell>
                                            <img src={v.thumb} alt={v.fullName} width="100px" heigt="100px" />
                                        </TableCell>
                                        <TableCell>{v.fullName}</TableCell>
                                        <TableCell>
                                            <Button 
                                                disabled={snackBar.value}
                                                onClick={()=>{
                                                    setToUpdateId(v._id);
                                                    openUpdateViewModel();
                                                }}
                                            color="secondary" variant="contained">
                                                Update
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button 
                                                // disabled={snackBar.value}
                                                disabled={true}
                                                onClick={()=>{
                                                    setToUpdateId(v._id);
                                                    deletePeopleView(v._id);
                                                }} 
                                                // style={{background: "red", color: "white"}}
                                                    variant="contained">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                }
            </div>
            <Modal
                arial-labelledby="view-update-model"
                arial-describedby="view-update-model-dashboard-compo"
                open={updateViewModel}
                onClose={closeUpdateViewModel}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div className="d-update-view-modal">
                    <UpdateWhatPeopleSay closeUpdateViewModel={closeUpdateViewModel} id={toUpdateId}/>
                </div>
            </Modal>
            <style jsx>{`
                .d-s-d-w-p-s{
                    min-height: 200px;
                    width: 100%;
                }
                .d-update-view-modal{
                    min-height: 300px;
                    max-height: 90%;
                    width: 80%;
                    background: white;
                    padding: 20px;
                    overflow-y: scroll;
                }
            `}</style>
        </React.Fragment>
    );
}

export default ShowDashboardWhatPeopleSay;