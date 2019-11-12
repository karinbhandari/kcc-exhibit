import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ActiveLink from '../../ActiveLink';
import Button from '@material-ui/core/Button';

const Sidenav = () => {
    const NavList = [
        {name: "Home", link:"/"},
        {name: "Main Attraction", link:"/main-attractions"},
        {name: "About", link:"/about-us"},
        {name: "Why Kcc Exhibit", link:"/why-kcc-exhibit"},
        {name: "Gallery", link:"/gallery"},
        {name: "Contact", link:"/contact-us"}
    ]
    return(
        <div 
        className="c-sidenav" 
        role="presentation"
        >
            <List>
                {NavList.map((value, key)=>(
                    <ListItem button key={key}>
                        <ActiveLink href={value.link} activeClassName="active-sidenav-link">
                            <a className="sidenav-link">
                                <ListItemText primary={value.name} />
                            </a>
                        </ActiveLink>
                    </ListItem>
                ))}
                {/* <ListItem>
                    <Button style={{borderColor: "orange", color: "orange"}} variant="outlined">
                        Detailed PDF
                    </Button>        
                </ListItem>         */}
            </List>
            <style jsx>{`
            .active-sidenav-link{
                background: #041529;
                border-bottom: 1px solid orange;
            }
            .sidenav-link{
                color #ffffff !important;
                text-decoration: none;
                padding: 0px 10px 0px 10px;
            }
            .c-sidenav{
                width: 200px;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                background: #022140;
                color: #ffffff;
            }    
            `}</style>
        </div>
    );
}

export default Sidenav;