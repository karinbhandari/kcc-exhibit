import Dehaze from '@material-ui/icons/Dehaze';
import Link  from 'next/link';
import Button from '@material-ui/core/Button';

const SmallHeader = (props) => {
    return(
        <div className="c-small-header-wrapper">
            <div className="c-small-header-logo-wrapper">
                <div className="c-small-header-logo-wrapper">
                    <Link href="/">
                        <img src="/static/images/logo/kcc-logo.png" alt="Kcc Logo" height="45px" width="auto" />
                    </Link>
                    
                </div>
            </div>
            <div className="c-small-header">
            <div>
                <div className="c-small-header-drawer-wrapper">
                    <div className="c-small-header-drawer c-flex-center"  onClick={props.toggleSideBar}>
                        <Dehaze fontSize="large" />
                    </div>        
                    <Button 
                        style={{
                            width: "121px",
                            height: "80%",
                            fontSize: "12px",
                            marginRight: "15px",
                            color: "orange",
                            borderColor: "orange"
                        }}
                        className="c-header-register-now-button"
                        variant="outlined" 
                        onClick={()=>{
                            window.open("https://docs.google.com/forms/d/1ZWeAFwgye6yQ_Mh6CUqVn-WCAvVg6VWc0FG2LMOq8Dw/prefill");
                        }}
                    >
                            Register Now
                    </Button>
                </div>
            </div>
        </div>
        <style jsx>{`

            /* For big screen small header shouldn't exist */
            @media screen and (max-width: 900px){
                .c-small-header-wrapper{
                    display: flex;
                }
            }


            /* For small screen big header shouldn't exist */
            @media screen and (min-width: 900px){
                .c-small-header-wrapper{
                    display: none;
                }
            }
            .c-small-header-wrapper{
                height: 50px;
                width: 100%;
                position: fixed;
                z-index: 999;
                background: #022140;
                top: 0;
                left: 0;
            }
            .c-small-header{
                flex: 1;
                display: flex;
                justify-content: flex-start;
            }
            .c-small-header-drawer-wrapper{
                height: 50px;
                width: 100vw;
                position:fixed;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .c-small-header-drawer{
                color: #ffffff !important;
                height: 100%;
                margin-left: 8px;
                cursor: pointer;
            }
            
            .c-small-header-logo-wrapper{
                position: fixed;
                height: 50px;
                width: 100%;
                top: 0px;
                left: 0px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        
        `}</style>
        </div>
    );
}

export default SmallHeader;