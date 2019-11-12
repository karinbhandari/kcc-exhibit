import Skeleton from "@material-ui/lab/Skeleton";

const ProfileCardSkeleton = () => {
    return(
        <>
            <div className="c-profile-card-skeleton">
                <Skeleton variant="circle" width="150px" height="150px"/>
                <div>
                    <Skeleton variant="rect" width="100%" height="100px" />
                </div>
                <div>
                    <Skeleton variant="rect" width="100%" height="50px" />
                </div>
                <div>
                    <Skeleton variant="rect" width="100%" height="50px" />
                </div>
            </div>
            <style jsx>{`
                @media screen and (min-width: 750px){
                    .c-profile-card-skeleton{
                        width: 600px !important;
                    }    
                }
                .c-profile-card-skeleton{
                    height: auto;
                    width: 90%;
                    display: flex;
                    background: #234a6f;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 5px;
                    padding: 10px;
                }
                .c-profile-card-skeleton>div{
                    margin: 5px;
                    width: 100%;
                    height: auto
                }
            `}</style>
        </>
    );
}

export default ProfileCardSkeleton;