import React from 'react';
import axios from 'axios';
import CustomPageTitle from '../CustomPageTitle/CustomPageTitle';
import CustomQuoete from '../CustomQuoete/CustomQuoete';
import LastYearMemorySkeleton from './LastYearMemorySkeleton';
import { Modal } from '@material-ui/core';

const LastYearMemory = () => {

    const [galleryNamesList, setGalleryNamesList] = React.useState([]);

    const [imageId, setImageId] = React.useState(0);

    const [lightboxModal, setLightboxModal] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        axios.get('/dashboard/last-year-memory/get-last-year-memory-gallery-names')
        .then(res=>{
            setGalleryNamesList(res.data);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
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

    return(
        <>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
            <div className="c-last-year-memory-wrapper">
                <div className="c-last-year-memory">
                    <div className="c-last-year-memory-title c-flex-center">
                        <CustomPageTitle smileyName="last-year-memory.png" title="Last Year Memory" />
                    </div>
                    <div className="c-last-year-memory-quoete c-flex-center">
                        <CustomQuoete quoetes="We believe only practical work and experience lead the young to maturity!" />
                    </div>
                    {
                        galleryNamesList.length
                            ?
                        <div className="c-last-year-memory-gallery">
                            {galleryNamesList.map((v,k)=>{
                                return(
                                    <img 
                                        src={`/static/images/last-year-memory/${v}`}
                                        alt={k}  
                                        className="c-last-year-memory-gallery-images-grid-item"
                                        key={k}
                                        onClick={()=>{
                                            setImageId(k);
                                            openLightboxModal();
                                        }}
                                    />
                                );
                            })}
                        </div>
                            :
                        <div className="c-last-year-memory-gallery">
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />    
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                            <LastYearMemorySkeleton />
                        </div>
                    }
                </div>
            </div>
            <Modal
                aria-labeledby="last-year-memory-modal-lightbox-modal"
                aria-describedby="last-year-memory-modal-lightbox-modal-desc"
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
                    src={`/static/images/last-year-memory/${galleryNamesList[imageId]}`}
                    alt={`${galleryNamesList[imageId]}-${imageId}`}
                    style={{
                        maxHeight: "90%",
                        maxWidth: "90%"
                    }}
                />
            </Modal>
            <style jsx>{`
                .c-last-year-memory-wrapper{
                    height: auto;
                    width: 100%;
                    background: #265078;
                    border-bottom: 1px solid #333333;
                }

                .c-last-year-memory{
                    min-height: 400px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 5px;
                }

                .c-last-year-memory-title{
                    height: 100px;
                    width: 100%;
                    background: #193d61;
                }
                .c-last-year-memory-quoete{
                    height: 100px;
                    width: 100%;
                }
                .c-last-year-memory-gallery{
                    min-height: 300px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-gap: 5px;
                    padding: 5px;
                    background: white;
                    border-radius: 5px;
                }
                .c-last-year-memory-gallery-images-grid-item{
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    cursor: zoom-in;
                }   
                .c-last-year-memory-gallery-images-grid-item:hover{
                    cursor: zoom-in;
                    opacity: 0.7;
                    transition: 0.6s;
                }
            `}
            </style>
        </>
    );
}

export default LastYearMemory;