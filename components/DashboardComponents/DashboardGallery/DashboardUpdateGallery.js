import React from 'react';
import axios from 'axios';
import KarimDropzone from '../../KarimComponents/KarimDropzone/KarimDropzone';
import TextField from '@material-ui/core/TextField';
import SnackBar from '../../SnackBar';
import { Button } from '@material-ui/core';

const DashboardUpdateGallery = (props) => {

    const [selectedOption, setOption] = React.useState("Project Exhibition");
    const [selectedDate, setSelectedDate] = React.useState("2019");

    // This should be set by dropzone not by react useeffect fetch
    // We won't need fetched gallery
    const [images, setImages] = React.useState([]);
    
    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getAGallery();
    }, []);

    const getAGallery = () => {
        axios.get(`/dashboard/gallery/get-a-gallery?id=${props.id}`)
        .then(res=>{
            setOption(res.data[0].category);
            setSelectedDate(res.data[0].date);
            // setImages(res.data[0].galleryNames);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const updateAGallery = (e) => {
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
        axios.post(`/dashboard/gallery/update-one?category=${selectedOption}&date=${selectedDate}`, data)
        .then(res=>{
            axios.post(`/dashboard/gallery/move-gallery?galleryName=${selectedOption}&date=${selectedDate}`, galleryData)
            .then(res=>{
                showSnackBar({
                    value: true,
                    message: `${selectedOption} sucessfully updated!`,
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
        });
    }

    return(
        <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="d-update-gallery">
                <div className="d-dashboard-add-gallery-head">
                    <span>Update Gallery Here!</span>
                </div>    
                <div>
                    <span>Please view gallery in the website!</span>
                </div>
                <form onSubmit={updateAGallery} className="d-dashboard-add-gallery-body">
                    <div className="d-dashboard-add-gallery-category">
                        <TextField
                            id="custom-gallery-name-input"
                            type="text"
                            variant="outlined"
                            label="Category"
                            value={selectedOption}
                            onChange={(e)=>setOption(e.target.value)}
                            helperText='for ex: "Project Exhibition"'
                            fullWidth
                        />
                    </div>
                    <div className="d-dashboard-add-gallery-date">
                        <TextField
                            id="standard-gallery-date"
                            type="text"
                            variant="outlined"
                            label="Date"
                            value={selectedDate}
                            onChange={(e)=>setSelectedDate(e.target.value)}
                            helperText="Please select a date"
                            margin="normal"
                        />
                    </div>
                    <div className="d-dashboard-add-gallery-images">
                        <KarimDropzone
                            allowedFileTypes={["image/jpg", "image/jpeg", "image/png", "image/svg"]}
                            setImages={setImages}
                        />
                    </div>
                    <div className="d-dashboard-add-gallery-button">
                        <Button disabled={true} type="submit" variant="contained" color="primary" >
                            Update Gallery
                        </Button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .d-update-gallery{
                    height: 90%;
                    width: 80%;
                    background: white;
                    overflow-y: scroll;
                    padding: 20px;
                    border-radius: 5px;
                }
                .d-dashboard-add-gallery, .d-dashboard-add-gallery-body{
                    display: flex;
                    flex-direction: column;
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

export default DashboardUpdateGallery;