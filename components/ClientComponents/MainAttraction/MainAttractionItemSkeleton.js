import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const MainAttractionItemSkeleton = () => {
    return(
        <Grid item xs={10} sm={5} md={4}
            style={{
                padding: '10px'
            }}
        >
            <Skeleton style={{borderRadius: "5px"}} variant="rect" height="auto" width="100%">
                <div
                    style={{
                        width: "100%",
                        height: "100px",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        padding: "10px",
                        justifyContent: "space-between"
                    }}
                >
                    <Skeleton style={{marginRight: "10px"}} variant="circle" height="100px" width="120px" />
                    <Skeleton style={{borderRadius: "5px"}} varint="rect" height="70px" width="100%" />
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        padding: "10px"
                    }}
                >
                    <Skeleton style={{borderRadius: "5px"}} variant="rect" height="60%" width="100%"/>
                    <Skeleton style={{borderRadius: "5px"}} variant="rect" height="20%" width="100%"/>

                </div>
            </Skeleton>
        </Grid>
    );
}
export default MainAttractionItemSkeleton;