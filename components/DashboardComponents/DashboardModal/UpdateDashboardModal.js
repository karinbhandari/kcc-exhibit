import React from 'react';
import KarimFileInput from '../../KarimComponents/KarimFileInput/KarimFileInput';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import SnackBar from '../../SnackBar';

const UpdateDashboardModal = () => {

    const [thumb, setThumb] = React.useState("");

    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const updateInitialModal = () => {
         Axios.post('/dashboard/modal/update-modal', {thumb})
        .then(res=>{
            setShowSnack({
                value: true,
                message: "Initial Modal Sucessfully Updated!",
                variant: "success"
            })
            setTimeout(()=>{
                setShowSnack({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 1500);
        })
        .catch(err=>{
            setShowSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
            setTimeout(()=>{
                setSnackBar({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 1500);
        });
    }

    return(
        <>
        {showSnack.value && <SnackBar open={true} message={showSnack.message} variant={showSnack.variant}/>}
            <div className="d-update-dashboard-modal">
                <div className="d-update-dashboard-modal-body c-flex-center">
                    <KarimFileInput
                        allowedFileTypes={["image/jpg", "image/png", "image/jpeg", "image/svg"]}
                        setThumb={setThumb}
                    />
                </div>
                <div className="d-update-dashboard-modal-button c-flex-center">
                        <Button
                            // disabled={showSnack.value}
                            disabled={true}
                            onClick={updateInitialModal}
                            style={{
                                width: "200px",
                                height: "50px"
                            }}
                            variant="contained"
                            color="secondary"
                        >
                            Update Modal
                        </Button>
                </div>
            </div>
            <style jsx>{`
                .d-update-dashboard-modal{
                    width: 70%;
                    min-height: 300px;
                    padding: 30px 20px 20px 20px;
                    background: white;
                    border-radius: 5px;
                }
                .d-update-dashboard-modal>div{
                    width: 100%;
                    min-height: 100px;
                    display: flex;
                    flex-direction: column;
                }
                .d-update-dashboard-modal-header{
                    display: flex;
                    flex-direction: column;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </>
    );
}

export default UpdateDashboardModal;