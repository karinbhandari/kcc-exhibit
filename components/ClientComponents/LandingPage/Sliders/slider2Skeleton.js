import Skeleton from "@material-ui/lab/Skeleton";


const Slider2Skeleton = () => {
    return(
        <Skeleton style={{marginLeft: "20px", padding: "10px 5px 10px 5px", borderRadius: "5px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}} variant="rect" height="195px" width="140px">
            <Skeleton style={{marginBottom: "5px"}} variant="circle" height="120px" width="120px" />
            <Skeleton variant="rect" height="50px" width="115px" />
        </Skeleton>
    );
}

export default Slider2Skeleton;