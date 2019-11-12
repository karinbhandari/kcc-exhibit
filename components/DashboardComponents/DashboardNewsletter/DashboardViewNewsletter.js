import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core';
import axios from 'axios';
import DashboardShowSkeleton from '../DashboardSkeleton/DashboardShowSkeleton';

const styles = {
    paper: {
        border: "1px solid #cccccc",
        minHeight: "90%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        padding: "20px"
    },
    paperRow: {
        minHeight: "50px",
        display: "flex",
        alignItems: "center"
    },
    paperTypo: {
        border: "1px solid #cccccc",
        padding: "0px 20px 0px 5px",
        borderRadius: "5px"
    }
}

const DashboardViewNewsletter = (props) => {
    const {classes} = props;

    const [toUpdateNewsletter, setToUpdateNewsletter] = React.useState([]);

    React.useEffect(()=>{
        viewNewsletter();
    });

    const viewNewsletter = () => {
        axios.get(`/dashboard/newsletter/find?id=${props.id}`)
        .then(res=>{
            setToUpdateNewsletter(res.data);
        })
        .catch(err=>{
            showSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }

    return(
        <>
            {
                toUpdateNewsletter.length
                    ?
                    toUpdateNewsletter.map((v,k)=>{
                        return(
                        <Paper className={classes.paper}>
                            <div className={classes.paperRow}>
                                <Typography
                                    variant="h4"
                                >
                                    Newsletter(Read only here)
                                </Typography>
                            </div>
                            <div className={classes.paperRow}>
                                <b>Name: &nbsp; &nbsp; &nbsp; &nbsp;</b>
                                <Typography
                                    className={classes.paperTypo}
                                    component="p"
                                >
                                    {v.username}
                                </Typography>
                            </div>
                            <div className={classes.paperRow}>
                                <b>Email: &nbsp; &nbsp; &nbsp; &nbsp;</b>
                                <Typography
                                    className={classes.paperTypo}
                                    component="p"
                                >
                                    {v.email}
                                </Typography>
                            </div>
                            <div className={classes.paperRow}>
                                <b>Phone: &nbsp; &nbsp; &nbsp; &nbsp;</b>
                                <Typography
                                    className={classes.paperTypo}
                                    component="p"
                                >
                                    {v.phone}
                                </Typography>
                            </div>
                            <div className={classes.paperRow}>
                                <b>Message: &nbsp; &nbsp;</b>
                                <Typography
                                    className={classes.paperTypo}
                                    component="p"
                                >
                                    {v.message}
                                </Typography>
                            </div>
                        </Paper>
                        )
                    })
                    :
                    <DashboardShowSkeleton />
            }
            <style jsx>{`

            `}</style>
        </>
    );
}

export default withStyles(styles)(DashboardViewNewsletter);