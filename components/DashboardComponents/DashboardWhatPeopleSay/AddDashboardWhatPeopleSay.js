import { TextField, Button } from "@material-ui/core";
import KarimFileInput from "../../KarimComponents/KarimFileInput/KarimFileInput";
import axios from 'axios';
import SnackBar from "../../SnackBar";

const AddDashboardWhatPeopleSay = () => {

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


    const addWhatPeopeSay = (e) => {
        e.preventDefault();
        const data = {fullName, thumb, quoete, facebook, instagram, twitter};
        axios.post('/dashboard/what-people-say/add-feedback', data)
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
        });
    }


    return (
        <>
            <form onSubmit={addWhatPeopeSay}>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}  
                <div className="d-a-d-w-p-s">
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
                        <KarimFileInput allowedFileTypes={["image/png", "image/svg", "image/jpg", "image/jpeg"]} setThumb={setThumb}/>
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
                            // disabled={snackBar.value}
                            disabled={true}
                        type="submit" color="primary" variant="contained">
                            Add
                        </Button>
                    </div>
                </div>
            </form>
            <style jsx>{`

            .d-a-d-w-p-s{
                width: 100%;
                min-height: 200px;
            }
            .d-a-d-w-p-s>div{
                margin: 10px 0px 10px 0px;
            }
            `}</style>
        </>
    );
}

export default AddDashboardWhatPeopleSay;