import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import {withStyles} from '@material-ui/core';

const style = {
    button: {
        fontSize: "16px !important",
        color: "cornflowerblue",
        cursor: "pointer",
        '&:hover': {
            color: "crimson"
        }
    }
}

const FileView = (props) => {
    const {classes} = props;
    
    const closeFileView = () => {
        props.setKeyToDelete(props.keyVal);
    }
    
    return(
        <React.Fragment>
            <div className="custom-file-view">
                <div className="custom-file-image">
                    <img src={props.value} alt="demo" height="100px" width="100px" />
                </div>
                <div className="custom-file-loader">
                    <div className="custom-file-loader-head">
                        <span><CancelIcon className={classes.button} onClick={closeFileView}/></span>
                    </div>
                    <div className="custom-file-loader-body">
                    <progress
                        value={50}
                        max={100}
                        style={{
                            width: "100px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #cccccc !important"
                        }}
                    ></progress>
                    </div>

                </div>
            </div>
            <style jsx>{`

                .custom-file-view{
                    position: relative;
                    height: 100px;
                    width: 100px;
                    border: 1px solid #cccccc;
                    box-shadow: 5px 5px 5px #333333;
                    border-radius: 5px;
                    margin: 5px;
                }

                .custom-file-image{
                    height: 100px;
                    width: 100px;
                    border-radius: 5px;
                }
                .custom-file-loader{
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    top: 0px;
                    // justify-content: center;
                    // align-items: center;
                    cursor: pointer;

                }
                .custom-file-loader-head{
                    height: 20px;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                }
                

                .custom-file-loader-body{
                    height: calc(100% - 20px);
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

            `}</style>
        </React.Fragment>
    );
}

export default withStyles(style)(FileView);