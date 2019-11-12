import TopHeader from './TopHeader/TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import SmallHeader from './SmallHeader/SmallHeader';
import { useEffect } from 'react';
import { Modal } from '@material-ui/core';
import axios from 'axios';

const Header = (props) => {
    const initialSticky = false;

    const [sticky, setSticky] = React.useState(initialSticky);

    const [showModal, setShowModal] = React.useState(false);

    const [modalData, setModalData] = React.useState([]);

    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    useEffect(()=>{
        window.onscroll = () => {
            createStickyHeader();
        }
        getModal();
    }, []);

    const getModal = () => {
        // get modal condition
        axios.get('/dashboard/modal/get')
        .then(res=>{
            setModalData(res.data);
            const modalWasSeen = localStorage.getItem("modal-seen");
            if(!modalWasSeen){
                localStorage.setItem("modal-seen", true);
                setShowModal(res.data[0].showModal);
            }else{
                setShowModal(false);
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

    const closeInitialModal = () => {
        setShowModal(false);
    }

    const openInitialModal = () => {
        setShowModal(true);
    }

    const createStickyHeader = () => {
        if(window.pageYOffset >= 100){
            setSticky(true);
        }
        else{
            setSticky(initialSticky);
        }
    }

    return(
        <>
        <div className="c-header-wrapper">
            <div className="c-header">
                <TopHeader openInitialModal={openInitialModal} />
                <BottomHeader sticky={sticky}/>
            </div>
        </div>
        <SmallHeader toggleSideBar={props.toggleSideBar}/>
        {
            modalData.length
                ?
            <Modal
                arial-labeledby="initial-modal"
                arial-describedby="initial-modal-desc"
                open={showModal}
                onClose={closeInitialModal}
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img
                    src={modalData[0].thumb}
                    alt="intial-modal"
                    style={{
                        maxHeight: "90%",
                        maxWidth: "90%"
                    }}
                />
            </Modal>
                :
            null
        }
        <style jsx>{`
            /* stick bottom header */
            .c-sticky-bottom-header{
                position: fixed !important;
            }


            .c-header-wrapper{
                height: auto;
                width: 100%;
            }

            .c-header{
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            /* For big screen small header shouldn't exist */
            @media screen and (max-width: 900px){
                .c-header-wrapper{
                    display: none;
                }
            }

            /* For small screen big header shouldn't exist */
            @media screen and (min-width: 900px){
                .c-header-wrapper{
                    display: flex;
                }
            }
        `}</style>
        </>
    );
}

export default Header;