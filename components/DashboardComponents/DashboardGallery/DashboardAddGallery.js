import React from 'react';
import KarimDropzone from '../../KarimComponents/KarimDropzone/KarimDropzone';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import {withStyles, Button} from '@material-ui/core';
import SnackBar from '../../SnackBar';

const styles = {
    textField: {
        '& .MuiFormControl-marginNormal': {
            margin: "0px !important"
        }
    }
}

const DashboardAddGallery = (props) => {

    const {classes} = props;
    const [receivedOption, setReceivedOption] = React.useState([]);
    const [selectedOption, setOption] = React.useState("Project Exhibition");
    const [selectedDate, setSelectedDate] = React.useState("2019");
    const [images, setImages] = React.useState([]);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        console.log("Running...");
        axios.get("/dashboard/main-attractions/get-categories")
        .then(res=>{
            setReceivedOption(res.data);
        }).
        catch(err =>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }, []);

    const addGalleryHandler = (e) => {
        e.preventDefault();
        const galleryData = new FormData();
        const galleryNamesList = [];
        images.map(image=>{
            galleryNamesList.push(image.name);
        });
        images.map(image=>{
            galleryData.append("gallery", image);
        });
        const data = {
            category: selectedOption,
            date: selectedDate,
            galleryNames: galleryNamesList
        }
        axios.post("/dashboard/gallery/add-gallery", data)
        .then(res=>{
            axios.post(`/dashboard/gallery/move-gallery?galleryName=${selectedOption}&date=${selectedDate}`, galleryData)
            .then(res=>{
                showSnackBar({
                    value: true,
                    message: `${selectedOption} sucessfully added!`,
                    variant: "success"
                })
            })
            .catch(err=>{
                showSnackBar({
                    value: true,
                    message: err.message,
                    variant: "error"
                })
            })
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
            <div className="d-dashboard-add-gallery-wrapper">
                <div className="d-dashboard-add-gallery">
                    <div className="d-dashboard-add-gallery-head">
                        <span>Add Gallery Here!</span>
                    </div>    
                    <form onSubmit={addGalleryHandler} className="d-dashboard-add-gallery-body">
                        <div className="d-dashboard-add-gallery-category">
                            <TextField
                                id="standard-add-gallery-category"
                                select
                                variant="outlined"
                                label="Select"
                                className={classes.textField}
                                value={selectedOption}
                                onChange={(e)=>setOption(e.target.value)}
                                helperText="Please select a category"
                                margin="normal"
                            >
                                {receivedOption.map((option, key) => (
                                <MenuItem key={key} value={option}>
                                    {option}
                                </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="d-dashboard-add-gallery-date">
                            <TextField
                                id="standard-gallery-date"
                                // select
                                type="text"
                                variant="outlined"
                                label="Date"
                                className={classes.textField}
                                value={selectedDate}
                                onChange={(e)=>setSelectedDate(e.target.value)}
                                helperText="Please select a date"
                                margin="normal"
                            />
                        </div>
                        <div className="d-dashboard-add-gallery-images">
                            <KarimDropzone
                                allowedFileTypes={["image/jpg", "image/jpeg", "image/png"]}
                                setImages={setImages}
                            />
                        </div>
                        <div className="d-dashboard-add-gallery-button">
                            <Button disabled={true} type="submit" variant="contained" color="primary" >
                                Add Gallery
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <style jsx>{`
                .d-dashboard-add-gallery, .d-dashboard-add-gallery-body{
                    display: flex;
                    flex-direction: column;
                }
                .d-dashboard-add-gallery-wrapper{
                    height: auto;
                    width: 100%;
                    padding: 10px;
                }
                .d-dashboard-add-gallery{
                    min-height: 200px;
                    width: 100%;
                    border: 1px solid #cccccc;
                    padding: 10px;
                }
                .d-dashboard-add-gallery-head{
                    height: 50px;
                    width: 100%;
                    margin-bottom: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .d-dashboard-add-gallery-head>span{
                    text-transform: uppercase;
                    font-size: 25px;
                    color: #333333;
                    letter-spacing: 1.5px;
                    padding: 0px 10px 0px 10px;
                    border-bottom: 2px solid #333333;
                }
                .d-dashboard-add-gallery-body{
                    height: auto;
                    width: 100%;
                }
                .d-dashboard-add-gallery-category{
                    height: 80px;
                    width: 100%;
                    margin-bottom: 30px;
                }
                .d-dashboard-add-gallery-images{
                    min-height: 200px;
                    width: 100%;
                    margin-bottom: 20px;
                }
                .d-dashboard-add-gallery-button{
                    height: 50px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20px;
                }
            `}</style>
        </React.Fragment>
    );
}

export default withStyles(styles)(DashboardAddGallery);