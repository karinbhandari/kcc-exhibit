import React from 'react';
import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import UpdateDashboardModal from '../../components/DashboardComponents/DashboardModal/UpdateDashboardModal';
import { Switch, Button, Modal } from '@material-ui/core';
import Axios from 'axios';
import SnackBar from '../../components/SnackBar';

const Modals = () => {
    const [checked, setCheck] = React.useState(false);

    const [toggleUpdateModal, setToggleUpdateModal] = React.useState(false);

    const [modal, setModal] = React.useState([]);

    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        getInitialModal();
    }, []);

    const closeUpdateInitalModal = () => {
        setToggleUpdateModal(false);
        getInitialModal();
    }
    const openUpdateInitalModal = () => {
        setToggleUpdateModal(true);
    }

    const switchInitialModal = () => {
        Axios.post('/dashboard/modal/set-show', {showModal: !checked})
        .then(res=>{
            if(res.data.flag){
                setShowSnack({
                    value: true,
                    message: "Modal Is Activated!",
                    variant: "success"
                })
                setTimeout(()=>{
                    setShowSnack({
                        value: false,
                        message: "",
                        variant: ""
                    })
                }, 1500);
            }else{
                setShowSnack({
                    value: true,
                    message: "Modal Is Deactivated!",
                    variant: "error"
                })
                setTimeout(()=>{
                    setShowSnack({
                        value: false,
                        message: "",
                        variant: ""
                    })
                }, 1500);
            }
            
        })
        .catch(err=>{
            setShowSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const getInitialModal = () => {
        Axios.get('/dashboard/modal/get')
        .then(res=>{
            setCheck(res.data[0].showModal);
            setModal(res.data);
        })
        .catch(err=>{
            setShowSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    return(
        <DashboardContainerLayout title="Modals" desc="Modals of Dashboard">
            {showSnack.value && <SnackBar open={true} message={showSnack.message} variant={showSnack.variant}/>}
            <div className="d-show-dashboard-modal">
                <div className="d-show-dashboard-modal-header">
                    <span
                        style={{
                            background: "cadetblue",
                            padding: "10px",
                            borderRadius: "5px",
                            color: "white",
                            fontFamily: "italic",
                            marginLeft: "10px",
                            marginRight: "10px"
                        }}
                    >
                        If the button is turned on then the modal will be shown when visitors visits the website.
                    </span>
                    <Switch
                        checked={checked}
                        disabled={showSnack.value}
                        onChange={(e)=>{
                            setCheck(prevState => !prevState);
                            switchInitialModal();
                        }}
                        value={checked}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
                <div className="d-show-dashboard-modal-body c-flex-center">
                    <img
                        src={modal.length && modal[0].thumb}
                        alt="demo-modal"
                        height= "auto"
                        width= "auto"
                        style={{
                            background: "lavender",
                            padding: "15px",
                            borderRadius: "5px"
                        }}
                    />
                </div>
                <div className="d-show-dashboard-modal-button c-flex-center">
                        <Button
                            onClick={openUpdateInitalModal}
                            style={{
                                width: "200px",
                                height: "50px"
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Update
                        </Button>
                </div>
            </div>
            <Modal
                arial-labelledby="update-initial-modal"
                arial-describedby="update-initial-modal-desc"
                open={toggleUpdateModal}
                onClose={closeUpdateInitalModal}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <UpdateDashboardModal />
            </Modal>
            <style jsx>{`
                .d-show-dashboard-modal{
                    width: 100%;
                    min-height: 300px;
                    padding: 30px 20px 20px 20px;
                    overflow-y: scroll;
                }
                .d-show-dashboard-modal>div{
                    width: 100%;
                    min-height: 100px;
                    display: flex;
                    flex-direction: column;
                }
                .d-show-dashboard-modal-header{
                    display: flex;
                    flex-direction: column;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </DashboardContainerLayout>
    );
}

export default Modals;