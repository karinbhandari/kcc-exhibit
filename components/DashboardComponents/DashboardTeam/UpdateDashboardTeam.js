import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KarimFileInput from '../../KarimComponents/KarimFileInput/KarimFileInput';
import axios from 'axios';
import SnackBar from '../../SnackBar';


const UpdateDashboardTeam = (props) => {

    const [memberName, setMemberName] = React.useState("");
    const [thumb, setThumb] = React.useState("");
    const [memberRole, setMemberRole] = React.useState("");
    const [memberContact, setMemberContact] = React.useState("");


    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        axios.get(`/dashboard/our-team/get-one?id=${props.id}`)
        .then(res=>{
            setMemberName(res.data[0].memberName);
            setThumb(res.data[0].thumb);
            setMemberRole(res.data[0].memberRole);
            setMemberContact(res.data[0].memberContact);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }, []);

    const updateTeamHandler = (e) => {
        e.preventDefault();

        const data = {memberName, thumb, memberRole, memberContact};

        axios.post(`/dashboard/our-team/update-one?memberContact=${memberContact}`, data)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            });
            props.closeUpdateTeamModel();
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
           <div className="d-add-dashboard-team">
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <form onSubmit={updateTeamHandler} className="d-d-a-o-s">
                <div>
                    <TextField
                        id="custom-outline-team-name-input"
                        type="text"
                        variant="outlined"
                        label="Member Name"
                        value={memberName}
                        onChange={(e)=>setMemberName(e.target.value)}
                        helperText="Mr. Karim Bhandari"
                        fullWidth
                    />
                </div>
                <KarimFileInput thumb={thumb} allowedFileTypes={["image/jpeg", "image/jpg", "image/svg", "image/png"]} setThumb={setThumb}/>
                <div>
                    <TextField
                        id="custom-outline-role-input"
                        type="text"
                        variant="outlined"
                        label="Member Role"
                        value={memberRole}
                        onChange={(e)=>setMemberRole(e.target.value)}
                        helperText="*example: Event Coordinator"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        id="custom-outline-contact-input"
                        type="text"
                        variant="outlined"
                        label="Contact No."
                        value={memberContact}
                        onChange={(e)=>setMemberContact(e.target.value)}
                        helperText="*example: 9823714111"
                        fullWidth
                    />
                </div>
                <div>
                    <Button disabled={true} type="submit" color="primary" variant="contained">
                        Update
                    </Button>
                </div>
            </form>
           </div>
           <style jsx>{`
           
           .d-add-dashboard-team{
               min-height: 300px;
               width: 100%;
           }
           .d-add-dashboard-team>form>div{
                margin-top: 30px !important;
            }

           `}</style>
       </React.Fragment>
    );
}

export default UpdateDashboardTeam;