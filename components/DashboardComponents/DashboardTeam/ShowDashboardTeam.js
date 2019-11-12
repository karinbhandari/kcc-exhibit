import React from 'react';
import axios from 'axios';
import SnackBar from "../../SnackBar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Modal } from '@material-ui/core';
import AddDashboardTeam from './AddDashboardTeam';
import UpdateDashboardTeam from './UpdateDashboardTeam';
import Skeleton from '@material-ui/lab/Skeleton';
import DashboardShowSkeleton from '../DashboardSkeleton/DashboardShowSkeleton';


const ShowDashboardTeam = () => {
    
    const [teamId, setTeamId] = React.useState(0);

    const [teamList, setTeamList]= React.useState([]);

    const [updateTeamModel, setUpdateTeamModel] = React.useState(false);

    
    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const closeUpdateTeamModel = () => {
        setUpdateTeamModel(false);
        getAllTeamInfo();
    }
    const openUpdateTeamModel = () => {
        setUpdateTeamModel(true);
    }

    React.useEffect(()=>{
        getAllTeamInfo();
    }, []);

    

    const getAllTeamInfo = () => {
        axios.get('/dashboard/our-team/get-all')
        .then(res=>{
            setTeamList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const onTeamDeleteHandler = (id) => {
        axios.post(`/dashboard/our-team/delete?id=${id}`)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            getAllTeamInfo();
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
        <div className="d-dashboard-show-team">
            {
                teamList.length
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
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teamList.map((obj, key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableCell>{key}</TableCell>
                                    <TableCell>
                                        <img src={obj.thumb} alt={obj.memberName} height="100px" width="100px" />
                                    </TableCell>
                                    <TableCell>{obj.memberRole}</TableCell>
                                    <TableCell>
                                        <Button color="secondary" variant="contained" onClick={
                                            ()=>{
                                                setTeamId(obj._id);
                                                openUpdateTeamModel();
                                            }
                                        }>
                                            Update
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button style={{background: "red", color: "white"}} variant="contained" onClick={
                                            ()=>{
                                                setTeamId(obj._id);
                                                onTeamDeleteHandler(obj._id);
                                            }
                                        }
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
                <DashboardShowSkeleton />
            }
        </div>
        <Modal
            arial-labelledby="team-update-model"
            arial-describedby="team-update-model-dashboard-compo"
            open={updateTeamModel}
            onClose={closeUpdateTeamModel}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div className="d-update-team">
                <UpdateDashboardTeam closeUpdateTeamModel={closeUpdateTeamModel} id={teamId}/>
            </div>
        </Modal>
        <style jsx>{`
            .d-d-s-o-s{
                min-height: 300px;
                width: 100%;
            }
            .d-update-team{
                min-height: 300px;
                width: 80%;
                background: white;
                padding: 20px;
            }
        `}</style>
    </React.Fragment>
    );

}

export default ShowDashboardTeam;