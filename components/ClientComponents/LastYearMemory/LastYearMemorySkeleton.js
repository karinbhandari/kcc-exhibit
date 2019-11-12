import Skeleton from "@material-ui/lab/Skeleton";


const LastYearMemorySkeleton = () => {
    return(
        <>
            <div className="c-last-year-memory-item-skeleton">
                <Skeleton variant="rect" height="100%" width="100%" />
            </div>
            <style jsx>{`
                .c-last-year-memory-item-skeleton{
                    height: 250px;
                    width: 100%;   
                }
                @media screen and (max-width: 430px){
                    .c-last-year-memory-item-skeleton{
                        width: 90% !important;
                        height: 250px;
                    }
                }
            `}</style>
        </>
    );
}

export default LastYearMemorySkeleton;