import Link from 'next/link';
import { Button } from '@material-ui/core';
import ActiveLink from '../../../ActiveLink';

const BottomHeader = (props) => {
    return(
        <div className="c-bottom-header-wrapper" style={{
            position: props.sticky ? "fixed" : "sticky"
        }}>
            <ul className="c-bottom-header">
                {
                    props.sticky &&
                    <li className="c-header-link-list c-flex-center">
                        <Link href="/">
                            <img src="/static/images/logo/kcc-logo.png" alt="Kcc Logo" height="45px" width="auto" />
                        </Link>
                    </li>
                }
                <li className="c-header-link-list"><ActiveLink href="/" activeClassName="active"><a className="c-header-link-a c-flex-center">Home</a></ActiveLink></li>
                <li className="c-header-link-list"><ActiveLink href="/main-attractions" activeClassName="active"><a className="c-header-link-a  c-flex-center">Main Attraction</a></ActiveLink></li>
                <li className="c-header-link-list"><ActiveLink href="/about-us" activeClassName="active"><a className="c-header-link-a c-flex-center">About</a></ActiveLink></li>
                <li className="c-header-link-list"><ActiveLink href="/why-kcc-exhibit" activeClassName="active"><a className="c-header-link-a c-flex-center">Why Kcc Exhibit</a></ActiveLink></li>
                <li className="c-header-link-list"><ActiveLink href="/gallery" activeClassName="active"><a className="c-header-link-a c-flex-center">Gallery</a></ActiveLink></li>
                <li className="c-header-link-list"><ActiveLink href="/contact-us" activeClassName="active"><a className="c-header-link-a c-flex-center">Contact</a></ActiveLink></li>
                {
                    props.sticky &&
                    <li className="c-header-link-list c-flex-center">
                        <Link href="/">
                            <Button variant="outlined"
                                style={{
                                    borderColor: "orange",
                                    color: "orange"
                                }}
                            >
                                Register Now
                            </Button>
                        </Link>
                    </li>
                }
            </ul>
            <style jsx>{`

                .active{
                    background: #041529;
                }
                .c-bottom-header-wrapper{
                    height: 50px;
                    width: 100%;
                    background: #022140;
                    display: flex;
                    z-index: 99;
                }

                .c-bottom-header{
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }
                
                .c-header-link-list{
                    height: 50px !important;
                    width: auto;
                    list-style-type: none;
                    margin-right: 5px;
                    cursor: pointer;
                }

                .c-header-link-list:hover{
                    border-bottom: 1px solid orange;
                    color: pink !important;
                }
                
                .c-header-link-a{
                    height: 100%;
                    width: 100%;
                    text-decoration: none;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    padding: 0px 8px 0px 8px;
                }
            `}</style>
        </div>
    );
}

export default BottomHeader;