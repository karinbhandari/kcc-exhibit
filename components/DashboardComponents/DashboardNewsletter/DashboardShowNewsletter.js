import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles, Button, Modal} from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import DashboardSkeleton from '../DashboardSkeleton/DashboardShowSkeleton';
import DashboardViewNewsletter from './DashboardViewNewsletter';

const style = {
    rootPaper:{
        minHeight: "100%",
        width: "100%",
        padding: "10px"
    },
    paper: {
        overflowX: "auto",
        width: "100%",
        height: "100%"
    },
    table: {
        minWidth: "700px"
    },
    button: {
        backgroundColor: "red",
        color: "#ffffff"
    }
};

const CustomTableCell = withStyles({
    root:{
            backgroundColor: "#333333 !important",
            color: "#ffffff !important",
            fontSize: "18px"
    }
})(TableCell);


const DashboardShowNewsletter = (props) => {
    const {classes} = props;
    const [newsletters, setNewsletters] = React.useState([]);
    const [newsletterId, setNewsletterId] = React.useState(0);
    const [updateNewsletterModel, setUpdateNewsletterModel] = React.useState(false);
    const [snack, showSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });
    React.useEffect(()=>{
        fetchNewsletter();
    }, [])

    const openUpdateNewsletterModel = () => {
        setUpdateNewsletterModel(true);   
    }
    const closeUpdateNewsletterModel = () => {
        setUpdateNewsletterModel(false);   
    }

    const fetchNewsletter = () => {
        axios.get('/dashboard/newsletter/get-all-newsletter')
        .then(res=>{
           setNewsletters(res.data);
        })
        .catch(err=>{
            showSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }

    const deleteNewsletter = (id) => {
        axios.post(`/dashboard/newsletter/delete?id=${id}`)
        .then(res=>{
            showSnack({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            fetchNewsletter();
        })
        .catch(err=>{
            console.log(err.message);
            showSnack({
                value: true,
                message: err.data.message,
                variant: "error"
            })
        })
    }

    return(
        <Paper className={classes.rootPaper}>
            <Paper className={classes.root}>
                {snack.value && <SnackBar open={true} message={snack.message} variant={snack.variant}/>}
                        {
                            !newsletters.length
                                ?
                            <DashboardSkeleton />
                                :
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell>S.N</CustomTableCell>
                                        <CustomTableCell>Name</CustomTableCell>
                                        <CustomTableCell>Email</CustomTableCell>
                                        <CustomTableCell></CustomTableCell>
                                        <CustomTableCell></CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {newsletters.map((v,k)=>(
                                        <TableRow key={k}>  
                                            <TableCell>{v.k}</TableCell>
                                            <TableCell>{v.username}</TableCell>
                                            <TableCell>{v.email}</TableCell>
                                            <TableCell>
                                                <Button onClick={()=>{
                                                    setNewsletterId(v._id);
                                                    openUpdateNewsletterModel();
                                                }} color="secondary" variant="contained">
                                                    View
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button onClick={()=>{
                                                        setNewsletterId(v._id);
                                                        deleteNewsletter(v._id);
                                                    }}
                                                     className={classes.button} variant="contained">
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        }
            </Paper>
            <Modal
                arial-labelledby="newsletter-update-model"
                arial-describedby="newsletter-update-model-dashboard-compo"
                open={updateNewsletterModel}
                onClose={closeUpdateNewsletterModel}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <DashboardViewNewsletter id={newsletterId} closeUpdateNewsletterModel={closeUpdateNewsletterModel}/>
            </Modal>
        </Paper>
    );
}

DashboardShowNewsletter.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(DashboardShowNewsletter);