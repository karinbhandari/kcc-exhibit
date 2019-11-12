import {Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
const Loader = (props) => {
    return(
        <>
        <div className="c-loader-wrapper" style={{
            display: props.show ? "flex" : "none"
        }}>
            <CircularProgress size="6rem" />
            <Typography
            variant="h6"
            style={{marginTop: "5px", color: "#ffffff", letterSpacing: "1.5px"}}
            >
                {props.message}
            </Typography>
        </div>
        <div className="c-loader-layer" style={{
            display: props.show ? "flex" : "none"
        }}>

        </div>
        <style jsx>{`
        .c-loader-wrapper{
            position: fixed;
            top: 0px;
            height: 100vh;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 110;
        }
        .c-loader-layer{
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 0px;
            background: #000000;
            z-index: 109;
            opacity: 0.5;
            scroll-y: none;
        }
        `}</style>
        </>
    );
}
export default Loader;