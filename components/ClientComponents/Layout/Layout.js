import Head from 'next/head';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';
import Footer from '../Footer/Footer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Layout = (props) => {

    const [toggleSideBar, setToggleSideBar] = React.useState(false);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const toogleSideBar = (open) => (
        setToggleSideBar(open)
    )

    return(
        <div className="c-layout">
            <Head>
                <title>{props.title}</title>
                {props.desc ? <meta name="description" content={props.desc} />: null}
            </Head>
            <Header toggleSideBar={()=>toogleSideBar(true)}/>

            {props.children}
            
            <SwipeableDrawer
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
            open={toggleSideBar}
            onOpen={()=>toogleSideBar(true)}
            onClose={()=>toogleSideBar(false)}
            >
                <Sidenav />
            </SwipeableDrawer>

            

            <Footer />
            <style jsx global>{`
                * {
                    margin: 0px;
                    padding: 0px;
                    boxSizing: border-box;
                    outline: none;
                }
                
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                      sans-serif;
                      letter-spacing: 0.5px;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                  }
                  
                  code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
                      monospace;
                  }
                
                .c-layout{
                    height: auto;
                    width: 100%;
                }

                
                
                /* All paragraph title and others styling */
                .c-h3{
                    font-size: 30px !important;
                    color: white;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-weight: bold;
                }
                
                
                /* Button */
                .c-custom-button{
                    width: 150px !important;
                    height: 50px !important;
                }
                
                
                /* All flex resuable styling */
                
                .c-flex-center{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .c-flex-c-end{
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }

                // footer
                .c-footer-wrapper, .c-footer, .c-footer-top-wrapper, .c-footer-top, .c-footer-top-left-wrapper, .c-footer-top-right-wrapper, .c-footer-top-left, .c-footer-top-right{
                    height: auto;
                    width: 100% !important;
                }
            `}</style>
        </div>
    );
}

export default Layout;