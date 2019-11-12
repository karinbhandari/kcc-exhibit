import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, Modal } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import ShowGallerySkeleton from './ShowGallerySkeleton';

const styles = 
{
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

const AttractionGallery = (props) => {

    const {classes} = props;

    const [imageId, setImageId] = React.useState(0);

    const [lightboxModal, setLightboxModal] = React.useState(false);

    const [category, setCategory] = React.useState(props.title);

    const [dateFilterList, setDateFilterList] = React.useState([]);

    const [dateFilter, setDateFilter] =  React.useState("2019");

    const [gallery, setGallery] = React.useState([]);


    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });


    React.useEffect(()=>{
        getGalleryDate();

        return () => {
            console.log("Clearing lightbox ...");
            setLightboxModal(false)
        };
        
    }, []);

    const openLightboxModal = () => {
        setLightboxModal(true);
    }

    const closeLightboxModal = () => {
        setLightboxModal(false);
    }

    const getGalleryDate = (cat = category) => {
        axios.get(`/dashboard/gallery/get-gallery-date?category=${cat}`)
        .then(res=>{
            setDateFilterList(res.data);
            getGallery(dateFilter);
        })
        .catch(err=> setShowSnack({
            value: true,
            message: err.message,
            variant: "error"
        }));
    }

    const getGallery = (cat = category, date = dateFilter) => {
        axios.get(`/dashboard/gallery/get-gallery-names?category=${category}&date=${date}`)
        .then(res=>{
            if(res.data.length){
                setGallery(res.data)
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
            <div className="c-attraction-gallery-wrapper">
                <div className="c-attraction-gallery">
                    <div className="c-attraction-gallery-filter">
                        <span
                            style={{
                                fontSize: "25px",
                                letterSpacing: "1px",
                                color: "white",
                                border: "2px dashed white",
                                padding: "10px",
                                maxHeight: "60px"
                            }}
                        >
                            Related Gallery:
                        </span>
                        <TextField
                            id="DATE-FILTER"
                            select
                            label="Select"
                            className={classes.textfield}
                            variant="outlined"
                            value={dateFilter}
                            onChange={async(e)=>{
                                await setDateFilter(e.target.value);
                                await getGallery(category, e.target.value);
                            }}
                            helperText="Please select a date"
                            margin="normal"
                        >
                            {dateFilterList.map((date, key) => (
                                <MenuItem key={key} value={date}>
                                    {date}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>        
                    {
                        !gallery.length
                            ?
                        <div className="c-attraction-gallery-images">
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
                        <div className="c-attraction-gallery-images">
                            {gallery[0].galleryNames.map((v,k)=>{
                                return(
                                    <img 
                                        src={`/static/images/gallery/${gallery[0].category}/${gallery[0].date}/${v}`} 
                                        alt={k}  
                                        className="c-attraction-gallery-images-grid-item" 
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
                            aria-labeledby="attraction-modal-lightbox-modal"
                            aria-describedby="attraction-modal-lightbox-modal-desc"
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
                .c-attraction-gallery-wrapper{
                    height: auto;
                    width: 100%;
                    display: flex;
                }   
                .c-attraction-gallery{
                    height: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 5px;
                }   
                .c-attraction-gallery-filter{
                    min-height: 100px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px;
                }   
                .c-attraction-gallery-filter>*{
                    margin-right: 10px !important;
                }
                .c-attraction-gallery-images{
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
                .c-attraction-gallery-images-grid-item{
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    cursor: zoom-in;
                }     
                .c-attraction-gallery-images-grid-item:hover{
                    cursor: zoom-in !important;    
                    opacity: 0.7;
                    transition: 0.6s;
                }  


            `}</style>
        </>              
    )
}

export default withStyles(styles)(AttractionGallery);