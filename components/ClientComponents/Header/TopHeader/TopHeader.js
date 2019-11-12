import { Button } from "@material-ui/core";
// import Router from 'next/router';
// import Link from 'next/link';

const TopHeader = (props) => {

    return(
        <>
        <div className="c-top-header-wrapper">
            <div className="c-top-header">
                <div className="c-top-header-logo c-flex-center">
                    <img src="/static/images/logo/kcc-logo.png" alt="Kcc Logo" height="80px" width="auto" />
                </div>
                <div className="c-top-header-buttons">
                    <Button variant="outlined"
                        style={{
                            borderColor: "orange",
                            color: "orange"
                        }}
                        onClick={()=>{
                            window.open("https://docs.google.com/forms/d/1ZWeAFwgye6yQ_Mh6CUqVn-WCAvVg6VWc0FG2LMOq8Dw/prefill");
                        }}
                    >
                        Register
                    </Button>
                    <Button 
                        onClick={()=>{
                            props.openInitialModal();
                        }}
                        variant="outlined"
                        style={{
                            borderColor: "orange",
                            color: "silver"
                        }}
                    >
                        More Details
                    </Button>
                </div>
            </div>
        </div>
        <style jsx>{`
        .c-top-header-wrapper{
            height: 100px;
            width: 100%;
            background: #022140;
            border-bottom: 1px solid #ffffff;
            display: flex;
        }
        .c-top-header{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .c-top-header-logo, .c-top-header-buttons{
            height: 100%;
            display: flex;
            flex-direction: row;
        }
        .c-top-header-logo{
            width: 100px;
            justify-content: center;
            align-items: center;
        }
        .c-top-header-buttons{
            width: 350px;
            justify-content: space-around;
            padding-bottom: 15px;
            align-items: flex-end;
        }
        `}</style>
        </>
    );
}

export default TopHeader;