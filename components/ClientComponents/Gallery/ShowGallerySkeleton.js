import Skeleton from "@material-ui/lab/Skeleton";


const ShowGallerySkeleton = () => {
    return(
        <>
            <div className="c-show-gallery-item-skeleton">
                <Skeleton variant="rect" height="100%" width="100%" />
            </div>
            <style jsx>{`
                .c-show-gallery-item-skeleton{
                    height: 200px;
                    width: 100%;   
                }
                @media screen and (max-width: 430px){
                    .c-show-gallery-item-skeleton{
                        width: 90% !important;
                        height: 200px;
                    }
                }
            `}</style>
        </>
    );
}

export default ShowGallerySkeleton;