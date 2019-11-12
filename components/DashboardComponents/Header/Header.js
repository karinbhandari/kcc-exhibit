import React from 'react';
import { ListItem, ListItemIcon, Modal } from '@material-ui/core';
import ToggleOnIcon from '@material-ui/icons/ToggleOnOutlined';
import ToggleOffIcon from '@material-ui/icons/ToggleOffOutlined'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PropTypes from 'prop-types';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const DashboardHeader = (props) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
    
      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
    
      // return focus to the button when we transitioned from !open -> open
      const prevOpen = React.useRef(open);
      React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }
    
        prevOpen.current = open;
      }, [open]);

    return (
        <React.Fragment>
            <div className="d-header-wrapper">
                <div className="d-header">
                    <ListItem>
                        <p style={{fontSize: "24px", color: "#ffffff", letterSpacing: "1.5px"}}>DASHBOARD&nbsp;</p>
                        <ListItemIcon 
                            style={{marginleft: "10px", cursor: "pointer", color: "#ffffff"}} 
                            onClick={props.toggleDashboardSideNav}
                        >
                            {props.toggle ? <ToggleOnIcon fontSize="large"/> : <ToggleOffIcon fontSize="large"/>}
                        </ListItemIcon>
                    </ListItem>
                </div>
                <div className="d-header-back-overlay c-flex-center">
                </div>
                <div
                    style={{
                        width: "125px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        cursor: "pointer"
                    }}
                    onClick={handleToggle}
                    ref={anchorRef}
                >
                    <span
                        style={{
                            color: "white",
                            letterSpacing: "1px"
                        }}
                    >
                        Hello, Admin
                    </span>
                    <AccountCircleOutlinedIcon
                        style={{
                            color: "white"
                        }}
                    />
                    <Popper style={{zIndex: '9999'}} open={open} anchorEl={anchorRef.current} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper id="menu-list-grow">
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList style={{background: "#1e4258", color: "white"}} autoFocusItem={open} onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={props.signOut}>Sign Out</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                </div>
            </div>
            <style jsx>{`
            .d-header-toggle{
                border: 1px solid red;
            }
            .d-header-wrapper{
                height: 50px;
                width: 100%;
                top: 0px;
                left: 0px;
                border-bottom: 1px solid #333333;
                display: flex;
            }
            .d-header{
                flex: 1;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
            }
            .d-header-back-overlay{
                position: absolute;
                width: 100%;
                height: 50px;
                z-index: -5;
                background: #1a3b5c;
            }
            `}</style>
        </React.Fragment>
    );
}

DashboardHeader.propTypes = {
    toggle: PropTypes.bool.isRequired
}

export default DashboardHeader;