import Skeleton from "@material-ui/lab/Skeleton";

const TeamProfileSkeleton = () => {
    return(
        <Skeleton className="c-flex-center" style={{marginBottom: "10px", padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} variant="rect" height="215px" width="180px">
            <Skeleton style={{marginBottom: "5px"}} variant="circle" height="120px" width="120px"/>
            <Skeleton variant="rect" height="20px" width="100%"/>
            <Skeleton variant="rect" height="20px" width="100%"/>
            <Skeleton variant="rect" height="20px" width="100%"/>
        </Skeleton>
    );
}

export default TeamProfileSkeleton;