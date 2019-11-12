import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, Modal, Grid } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import ShowGallerySkeleton from './ShowGallerySkeleton';

const styles = {
    textfield: {
        '& .MuiFormLabel-root': {
            color: "#ffffff !important"
        },
        '& .MuiSelect-selectMenu': {
            color: "#ffffff"
        }, 
        '& .MuiFormHelperText-root':{
            color: "#ffffff"
        },
        '& .MuiFormControl-marginNormal': {
            margin: "none !important"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#cccccc"
            },
            "&:hover fieldset": {
              borderColor: "#ffffff"
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976D2"
            },
            "&:focus fieldset": {
                borderColor: "red"
              },
        },
    }
};

const ShowGallery = (props) => {

    const {classes} = props;

    const [imageId, setImageId] = React.useState(0);

    const [lightboxModal, setLightboxModal] = React.useState(false);

    const [categoryFilterList, setCategoryFilterList] = React.useState([]);
    const [dateFilterList, setDateFilterList] = React.useState([]);

    const [categoryFilter, setCategoryFilter] =  React.useState("Project Exhibition");
    const [dateFilter, setDateFilter] =  React.useState("2019");

    const [gallery, setGallery] = React.useState([]);

    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    
    const openLightboxModal = () => {
        setLightboxModal(true);
    }

    const closeLightboxModal = () => {
        setLightboxModal(false);
    }


    React.useEffect(()=>{
        getGalleryDate();
        getGalleryCategory();
        getGallery();
    }, []);

    const  getGalleryCategory = () => {
        axios.get(`/dashboard/main-attractions/get-categories`)
        .then(res =>{
            if(res.data.length){
                setCategoryFilterList(res.data)
            }else{
                setShowSnack({
                    value: true,
                    message: "Not Found: Gallery Category!",
                    variant: "error"
                })
            }
            setTimeout(()=>{
                setShowSnack({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 2000);
        })
        .catch(err=> setShowSnack({
            value: true,
            message: err.message,
            variant: "error"
        }));
    }

    const getGalleryDate = () => {
        axios.get(`/dashboard/gallery/get-gallery-date?category=${categoryFilter}`)
        .then(res=>{
             if(res.data.length){
                setDateFilterList(res.data);
            }else{
                setShowSnack({
                    value: true,
                    message: "No Found: Gallery Date!",
                    variant: "error"
                })
            }
            setTimeout(()=>{
                setShowSnack({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 2000);
        })
        .catch(err=> setShowSnack({
            value: true,
            message: err.message,
            variant: "error"
        }));
    }

    const getGallery = (date = dateFilter, category = categoryFilter) => {
        axios.get(`/dashboard/gallery/get-gallery-names?category=${category}&date=${date}`)
        .then(res=>{
            if(res.data.length){
                setGallery(res.data);
            }else{
                setGallery([]);
                setShowSnack({
                    value: true,
                    message: "No Found: Gallery!",
                    variant: "error"
                })
            }
            setTimeout(()=>{
                setShowSnack({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 2000);
        })
        .catch(err=> setShowSnack({
            value: true,
            message: err.message,
            variant: "error"
        }));
    }


    return(
        <>
        {showSnack.value && <SnackBar open={true} message={showSnack.message} variant={showSnack.variant}/>}
            <div className="c-show-gallery-wrapper">
                <div className="c-show-gallery">
                    <div className="c-show-gallery-filter">
                    <TextField
                        id="CATEGORY-FILTER"
                        select
                        label="Select"
                        className={classes.textfield}
                        variant="outlined"
                        value={categoryFilter}
                        onChange={(e)=>{
                            setCategoryFilter(e.target.value);
                            getGallery(dateFilter, e.target.value);
                        }}
                        helperText="Please select a category"
                        margin="normal"
                    >
                        {
                            categoryFilterList.length
                                ?
                            categoryFilterList.map((cat, key) => (
                                <MenuItem key={key} value={cat}>
                                    {cat}
                                </MenuItem>
                            ))
                                :
                            <MenuItem disabled key="empty" value="empty">
                                Empty
                            </MenuItem>
                        }
                    </TextField>
                    <TextField
                        id="DATE-FILTER"
                        select
                        label="Select"
                        className={classes.textfield}
                        variant="outlined"
                        value={dateFilter}
                        onChange={(e)=>{
                            setDateFilter(e.target.value);
                            getGallery(e.target.value, categoryFilter);
                        }}
                        helperText="Please select a date"
                        margin="normal"
                    >
                        {
                            dateFilterList.length
                                ?
                            dateFilterList.map((date, key) => (
                                <MenuItem key={key} value={date}>
                                    {date}
                                </MenuItem>
                            ))
                                :
                            <MenuItem disabled key="empty" value="empty">
                                Empty
                            </MenuItem>
                        }
                    </TextField>
                    </div>        
                            {
                                !gallery.length
                                    ?
                                <div className="c-show-gallery-images">
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                    <ShowGallerySkeleton />
                                </div>
                                    :
                                <>
                                <div className="c-show-gallery-images">
                                    {gallery[0].galleryNames.map((v,k)=>{
                                            return(
                                                <img 
                                                    src={`/static/images/gallery/${gallery[0].category}/${gallery[0].date}/${v}`} 
                                                    alt={k}  
                                                    className="c-gallery-images-grid-item" 
                                                    key={k}
                                                    onClick={()=>{
                                                        setImageId(k);
                                                        openLightboxModal();
                                                    }}
                                                />
                                            )
                                    })}
                                </div>
                                <Modal
                                    aria-labeledby="gallery-modal-lightbox-modal"
                                    aria-describedby="gallery-modal-lightbox-modal-desc"
                                    open={lightboxModal}
                                    onClose={closeLightboxModal}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                    
                                >
                                    <img
                                        src={`/static/images/gallery/${gallery[0].category}/${gallery[0].date}/${gallery[0].galleryNames[imageId]}`}
                                        alt={`${gallery[0].galleryNames[imageId]}-${imageId}`}
                                        style={{
                                            maxHeight: "90%",
                                            maxWidth: "90%"
                                        }}
                                    />
                                </Modal>
                                </>
                            }
                </div>        
            </div> 
            <style jsx>{`
                .c-show-gallery-wrapper{
                    height: auto;
                    width: 100%;
                    display: flex;
                }   
                .c-show-gallery{
                    height: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 5px;
                }   
                .c-show-gallery-filter{
                    height: 100px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0px 20px 0px 20px;
                }   
                .c-show-gallery-filter>*{
                    margin-right: 10px !important;
                }
                .c-show-gallery-images{
                    min-height: 400px;
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-gap: 5px;
                    padding: 5px;
                    background: white;
                    border-radius: 5px;
                }     
                .c-gallery-images-grid-item{
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    cursor: zoom-in;
                }      
                .c-gallery-images-grid-item:hover{
                    cursor: zoom-in !important;    
                    opacity: 0.7;
                    transition: 0.6s;
                }  

            `}</style>
        </>              
    )
}

export default withStyles(styles)(ShowGallery);