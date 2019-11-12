import React from 'react';
import Head from 'next/head';
import DashboardHeader from "../Header/Header";
import DashboardSidenav from "../Sidenav/Sidenav";
import Login from '../Login/login';

const DashboardContainerLayout = (props) => {

    const [toggle, setToggle] = React.useState(true);

    const [username, setUsername] = React.useState("");


    const signIn = (username) => {
        localStorage.setItem("KccExhibit-User", username);
        setUsername(username);
    }
    const signOut = () => {
        localStorage.removeItem("KccExhibit-User");
        window.location.reload();
      }
    
      React.useEffect(()=>{
        const user = localStorage.getItem("KccExhibit-User");
        if(user){
            setUsername(user);
        }else{
            setUsername("");
        }
        // else empty username string
      }, []);

     

    const toggleDashboardSideNav = () => {
        setToggle(!toggle);
    }

    if(username === ""){
        return(
            <Login signIn={signIn}/>    
        );
    }else{
        return(
            <div className="d-dashboard-layout-wrapper">
                <Head>
                    <title>{props.title}</title>
                    {props.desc ? <meta name="description" content={props.desc} />: null}
                </Head>
                    <DashboardHeader username={username} signOut={signOut} toggle={toggle} toggleDashboardSideNav={toggleDashboardSideNav}/>
                    <div className="d-dashboard-body">
                        <DashboardSidenav toggle={toggle}/>
                            {props.children}
                    </div>
                   
                <style jsx>{`
                *{
                    margin: 0px;
                    padding: 0px;
                }
                .body{
                    height: 100vh;
                    width: 100vw;
                }
                .d-dashboard-layout-wrapper{
                    height: 100vh;
                    width: 100%;
                }
                .d-dashboard-body{
                    height: calc(100% - 50px);
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: no-wrap;
                }
                `}</style>
                <style jsx global>{`
                .c-flex-center{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }            
                `}</style>
        </div>
            );
    }
}

export default DashboardContainerLayout;