import React from "react";
import axios from 'axios';
import SnackBar from "../../SnackBar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Modal } from '@material-ui/core';
import DashboardShowSkeleton from '../DashboardSkeleton/DashboardShowSkeleton';
import DashboardUpdateOurSponsor from "./DashboardUpdateOurSponser";

const DashboardShowOurSponser = () => {

    const [sponserList, setSponserList] = React.useState([]);

    const [sponsorId, setSponsorId] = React.useState(0);

    const [ourSponsorModal, setOurSponsorModal] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
       getAllSponsor();
    }, []);


    const openUpdateOurSponsorModel = () => {
        setOurSponsorModal(true);
    }

    const closeUpdateOurSponsorModel = () => {
        setOurSponsorModal(false);
        getAllSponsor();
    }

    const getAllSponsor = () => {
        axios.get('/dashboard/our-sponser/get-all')
        .then(res=>{
            setSponserList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const DeleteASponsor = (id) => {
        axios.post(`/dashboard/our-sponser/delete?id=${id}`)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            getAllSponsor();
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
            <div className="d-d-s-o-s">
                {
                    sponserList.length
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
                                <TableCell>Company Name</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sponserList.map((obj, key)=>{
                                return(
                                    <TableRow key={key}>
                                        <TableCell>{key}</TableCell>
                                        <TableCell>
                                            <img src={obj.thumb} alt={obj.title} height="100px" width="100px" />
                                        </TableCell>
                                        <TableCell>{obj.companyName}</TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={()=>{
                                                    setSponsorId(obj._id);
                                                    openUpdateOurSponsorModel();
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
                                                    setSponsorId(obj._id);
                                                    DeleteASponsor(obj._id);
                                                }}
                                                // style={
                                                //     {background: "red",
                                                //     color: "white"
                                                // }}
                                                disabled={true}
                                                variant="contained"
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
                    <DashboardShowSkeleton />
                }
            </div>
            <Modal
                arial-labelledby="our-sponser-update-model"
                arial-describedby="our-sponser-update-model-dashboard-compo"
                open={ourSponsorModal}
                onClose={closeUpdateOurSponsorModel}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div className="d-update-our-sponsor">
                    <DashboardUpdateOurSponsor closeUpdateOurSponsorModel={closeUpdateOurSponsorModel} id={sponsorId}/>
                </div>
            </Modal>
            <style jsx>{`
                .d-d-s-o-s{
                    min-height: 300px;
                    width: 100%;
                }
                .d-update-our-sponsor{
                    min-height: 300px;
                    width: 70%;
                    background: white;
                }
            `}</style>
        </React.Fragment>
    );
}

export default DashboardShowOurSponser;