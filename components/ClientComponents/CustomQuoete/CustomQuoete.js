import React from 'react';
import Quoete from '@material-ui/icons/FormatQuoteTwoTone';
const CustomQuoete = (props) => {
    return(
        <React.Fragment>
            <div className="c-custom-quoete">
                <span
                    style={{
                        color: "#ffffff"
                    }}
                >
                    <span
                        className="c-custom-quoete-char"
                    >
                        <Quoete />
                    </span>
                        <span
                            style={{
                                fontSize: "18px",
                                letterSpacing: "1.5px"
                            }}
                        >
                            {props.quoetes}
                        </span>
                    <span
                        className="c-custom-quoete-char"
                    >
                        <Quoete />
                    </span>
                </span>
            </div>
            <style jsx>{`
                .c-custom-quoete-char{
                    font-size: 30px !important;
                    padding: 0px 10px 0px 10px;
                    color: orange;
                }
                .c-custom-quoete{
                    height: auto;
                    margin: 10px;
                    border-radius: 10px;
                    padding: 5px;

                }
            `}</style>

        </React.Fragment>
    );
}

export default CustomQuoete;