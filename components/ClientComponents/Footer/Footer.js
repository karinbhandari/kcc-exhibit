import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
    return(
        <>
            <div className="c-footer">
                    <FooterTop />
                    <FooterBottom>
                        <i className="c-footer-bottom-text" style={{color: "#FFFFFF", fontSize: "12px", letterSpacing: "1.5px"}}>© 2019 | All rights reserved by KCC | CSDR</i>
                    </FooterBottom>
            </div>
            <style jsx>{`
                
                .c-footer{
                    height: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
            
            `}</style>
        </>
    );
}

export default Footer;