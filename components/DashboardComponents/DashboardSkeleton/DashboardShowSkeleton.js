import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, GridList } from "@material-ui/core";

const DashboardShowSkeleton = () => {
    return(
        <Grid container>
            <Skeleton variant="rect" width="100%" height= "57px" style={{margin: "10px"}}/>
            <Skeleton variant="rect" width="100%" height= "80px" style={{margin: "10px"}}/>
            <Skeleton variant="rect" width="100%" height= "80px" style={{margin: "10px"}}/>
            <Skeleton variant="rect" width="100%" height= "80px" style={{margin: "10px"}}/>
            <Skeleton variant="rect" width="100%" height= "80px" style={{margin: "10px"}}/>
        </Grid>
    )
}

export default DashboardShowSkeleton;