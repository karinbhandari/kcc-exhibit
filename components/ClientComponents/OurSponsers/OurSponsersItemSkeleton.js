import Skeleton from "@material-ui/lab/Skeleton";


const OurSponsersItemSkeleton = () => {
    return(
        <>
            <Skeleton className="c-our-sponser-item-skeleton"
                style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "5px",
                    marginBottom: "10px"
                }}
                variant="rect"
                height="auto"
                width="220px"
            >
                <Skeleton style={{marginBottom: "10px"}} variant="circle" height="160px" width="160px"/>
                <Skeleton style={{marginBottom: "10px"}} variant="rect" height="50px" width="100%"/>
                <Skeleton style={{marginBottom: "10px"}} variant="rect" height="50px" width="100%"/>
            </Skeleton>
            <style jsx>{`
                .c-our-sponser-item-skeleton>div{
                    width: 100%;
                    height: auto;
                    margin: 5px;
                }
            `}</style>
        </>
    );
}

export default OurSponsersItemSkeleton;