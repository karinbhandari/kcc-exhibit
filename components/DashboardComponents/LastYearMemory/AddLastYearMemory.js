import React from 'react';
import KarimDropzone from '../../KarimComponents/KarimDropzone/KarimDropzone';
import { Button } from '@material-ui/core';
import SnackBar from '../../SnackBar';
import axios from 'axios';

const AddLastYearMemory = () => {
    const [images, setImages] = React.useState([]);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const AddLastYearMemoryHandler = () => {
        const galleryFormData = new FormData();
        const galleryNames = [];
        images.forEach(v=>{
            galleryFormData.append("last-year-best-images", v);
        })

        images.forEach(image=>{
            galleryNames.push(image.name);
        })

        // Update Last Year Memory
         axios.post("/dashboard/last-year-memory/update", {galleryNames})
        .then(res=>{
            axios.post("/dashboard/last-year-memory/move-last-year-memory-images", galleryFormData)
            .then(res=>{
                showSnackBar({
                    value: true,
                    message: `Memories sucessfully updated!`,
                    variant: "success"
                })
            })
            .catch(err=>{
                showSnackBar({
                    value: true,
                    message: err.message,
                    variant: "error"
                })
            });
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
            <div className="d-add-last-year-memory-wrapper">
                <span
                    style={{
                        width: "100%",
                        border: "1px solid red"
                    }}
                >
                    When you press update old last year memory will get deleted!
                </span>
                <KarimDropzone setImages={setImages} galleryLength={12} allowedFileTypes={["image/jpg", "image/jpeg", "image/png"]}/>
                <Button disabled={true} variant="contained" color="primary" onClick={AddLastYearMemoryHandler}>
                    Update
                </Button>
            </div>
            <style jsx>{`
            
            .d-add-last-year-memory-wrapper{
                border: 1px solid red;
            }

            `}</style>
        </React.Fragment>
    );
}

export default AddLastYearMemory;