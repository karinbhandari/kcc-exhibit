import PropTypes from 'prop-types';
import {AppBar, Tabs, Tab, Typography} from '@material-ui/core'

const TabPanel = (props) => {
    return(
        <Typography
        component="div"
        hidden={props.value != props.index}
        style={{flex: "1"}}
        >
            {props.children}
        </Typography>
    )
}

TabPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}


const DashboardMainLayout = (props) => {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
            setValue(newValue);
    }


    return(
        <>
            <div className="d-dashboard-main-layout-wrapper">
                <div className="d-dashboard-main-layout">
                    <div className="d-dashboard-main-layout-head-wrapper">
                        <AppBar position="static">
                            <Tabs
                            centered
                            value={value}
                            onChange={handleChange}
                            >
                                {props.tabs.map((v, k)=>(
                                    <Tab label={v.tab} key={k}/>
                                ))}
                            </Tabs>
                        </AppBar>
                    </div>
                    <div className="d-dashboard-main-layout-body-wrapper">
                        <div className="d-dashboard-main-layout-body">
                        {
                            props.tabs
                                && 
                            props.tabs.map((v, k)=>(
                                <TabPanel value={value} index={k} key={k}>
                                    {v.compo}
                                </TabPanel>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .d-dashboard-main-layout-wrapper{
                width: 100% !important;
                height: 100%;
                display: flex;
                padding: 10px;
            }
            .d-dashboard-main-layout{
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .d-dashboard-main-layout-head-wrapper{
                height: 40px;
                width: 100%;
                display: flex;
                background: #333333;
            }
            .d-dashboard-main-layout-body{
                height: auto;
                width: 100%;
                display: flex;
            }
            .d-dashboard-main-layout-body-wrapper{
                height: calc(100% - 40px);
                width: 100%;
                display: flex;
                padding: 10px 10px 0px 10px;
                border: 1px solid #cccccc;
                overflow-y: scroll;
            }
            `}</style>
        </>
    );
}

DashboardMainLayout.propTypes = {
    tabs: PropTypes.array.isRequired
}

export default DashboardMainLayout;