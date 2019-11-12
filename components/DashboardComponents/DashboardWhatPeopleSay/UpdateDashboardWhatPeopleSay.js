import React from 'react';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import { TextField, Button } from '@material-ui/core';
import KarimFileInput from '../../KarimComponents/KarimFileInput/KarimFileInput';

const UpdateWhatPeopleSay = (props) => {

    const [fullName, setFullName] = React.useState("");
    const [thumb, setThumb] = React.useState("");
    const [quoete, setQuoete] = React.useState("");
    const [facebook, setFacebook] = React.useState("");
    const [instagram, setInstagram] = React.useState("");
    const [twitter, setTwitter] = React.useState("");

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getAView();
    }, []);

    const getAView = (id = props.id) => {
        axios.get(`/dashboard/what-people-say/get-one?id=${id}`)
        .then(res=>{
            setFullName(res.data[0].fullName);
            setThumb(res.data[0].thumb);
            setQuoete(res.data[0].quoete);
            setFacebook(res.data[0].facebook);
            setInstagram(res.data[0].instagram);
            setTwitter(res.data[0].twitter);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            }); 
        })
    }

    const updatePeopleView = (e) => {
        e.preventDefault();
        const data = {fullName, thumb, quoete, facebook, instagram, twitter};
        axios.post(`/dashboard/what-people-say/update-one?id=${props.id}`, data)
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
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            }); 
        })
    }

    return(
        <>
        {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}  
            <div className="d-u-d-w-p-s">
                <div>
                    <TextField
                        id="custom-outline-name-input"
                        type="text"
                        variant="outlined"
                        label="Full Name"
                        value={fullName}
                        onChange={(e)=>setFullName(e.target.value)}
                        helperText="*example: Mr. Karim Bhandari"
                        fullWidth
                    />
                </div>
                <div>
                    <KarimFileInput allowedFileTypes={["image/png", "image/svg", "image/jpg", "image/jpeg"]} thumb={thumb} setThumb={setThumb}/>
                </div>
                <div>
                    <TextField
                        id="custom-outline-quoete-input"
                        type="text"
                        variant="outlined"
                        label="Quoete"
                        value={quoete}
                        onChange={(e)=>setQuoete(e.target.value)}
                        helperText="*example quoete"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        id="custom-outline-facebook-input"
                        type="text"
                        variant="outlined"
                        label="Facebook"
                        value={facebook}
                        onChange={(e)=>setFacebook(e.target.value)}
                        helperText="*example: https://facebook.com/karimbhandari"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        id="custom-outline-instagram-input"
                        type="text"
                        variant="outlined"
                        label="Instagram"
                        value={instagram}
                        onChange={(e)=>setInstagram(e.target.value)}
                        helperText="*example: https://instagram.com/karimbhandari"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        id="custom-outline-twitter-input"
                        type="text"
                        variant="outlined"
                        label="Twitter"
                        value={twitter}
                        onChange={(e)=>setTwitter(e.target.value)}
                        helperText="*example: https://twitter.com/karimbhandari"
                        fullWidth
                    />
                </div>
                <div>
                    <Button 
                        disabled={snackBar.value}
                        disabled={true}
                        onClick={updatePeopleView} type="submit" color="primary" variant="contained">
                        Add
                    </Button>
                </div>
            </div>
            <style jsx>{`

            .d-u-d-w-p-s{
                width: 100%;
                min-height: 200px;
            }
            .d-u-d-w-p-s>div{
                margin: 10px 0px 10px 0px;
            }
            `}</style>
        </>
    );
}

export default UpdateWhatPeopleSay;