import React from "react";
import KarimFileInput from '../../KarimComponents/KarimFileInput/KarimFileInput';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import SnackBar from "../../SnackBar";


const DashboardUpdateOurSponsor = (props) => {
    const [companyName, setCompanyName] = React.useState("");
    const [thumb, setThumb] = React.useState("");
    const [websiteLink, setWebsiteLink] = React.useState("");

     const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getToUpdateSponsor();
    }, []);


    const getToUpdateSponsor = (id=props.id) => {
        axios.get(`/dashboard/our-sponser/get-one?id=${id}`)
        .then(res=>{
            setCompanyName(res.data[0].companyName);
            setThumb(res.data[0].thumb);
            setWebsiteLink(res.data[0].websiteLink);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }

    const ourSponserUpdateHandler = (e) => {
        e.preventDefault();
        const data = {companyName, thumb, websiteLink};
        axios.post(`/dashboard/our-sponser/update-one?id=${props.id}`, data)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            props.closeUpdateOurSponsorModel();
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }

    return(
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <form onSubmit={ourSponserUpdateHandler} className="d-u-o-s">
                <div>
                    <TextField
                        id="custom-outline-name-input"
                        type="text"
                        variant="outlined"
                        label="Company Name"
                        value={companyName}
                        onChange={(e)=>setCompanyName(e.target.value)}
                        helperText="*example: Kantipur City College"
                        fullWidth
                    />
                </div>
                <KarimFileInput thumb={thumb} allowedFileTypes={["image/png", "image/svg"]} setThumb={setThumb}/>
                <div>
                    <TextField
                        id="custom-outline-link-input"
                        type="text"
                        variant="outlined"
                        label="Website Link"
                        value={websiteLink}
                        onChange={(e)=>setWebsiteLink(e.target.value)}
                        helperText="*example: https://kcc.edu.np"
                        fullWidth
                    />
                </div>
                <div>
                    <Button disabled={true} type="submit" color="primary" variant="contained">
                        update
                    </Button>
                </div>
            </form>
            <style jsx>{`
                .d-u-o-s{
                    min-height: 300px;
                    width: 100%;
                }
                .d-u-o-s>div{
                    margin: 20px 0px 20px 0px;
                }
            `}</style>
        </React.Fragment>
    );
}

export default DashboardUpdateOurSponsor;