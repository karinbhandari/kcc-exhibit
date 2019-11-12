const FooterBottom = (props) => {
    return(
        <div className="c-footer-bottom-wrapper">
            {props.children}
            <style jsx>{`
            .c-footer-bottom-wrapper{
                height: 30px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #022140;
                border-top: 1px solid #ffffff;
            }
            
            @media screen and (max-width: 450px){
                .c-footer-bottom-text{
                    font-size: 8px !important;
                }
            }
            `}</style>
        </div>
    );
}

export default FooterBottom;