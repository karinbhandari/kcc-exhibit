const TeamProfile = (props) => {
    return(
        <>
            <div className="c-team-profile-card">
                <div className="c-team-profile-card-image  c-flex-center">
                    <img 
                        src={props.teamList.thumb}
                        alt="image"
                        height="100px"
                        width="100px"
                        style={{
                            borderRadius: "50%"
                        }}
                    />
                </div>
                <div className="c-team-profile-card-name c-flex-center">
                    {props.teamList.memberName}
                </div>
                <div className="c-team-profile-card-job-title c-flex-center">
                    {props.teamList.memberRole}
                </div>
                <div className="c-team-profile-card-contact c-flex-center">
                    {props.teamList.memberContact}
                </div>
            </div>
            <style>{`
                .c-team-profile-card{
                    max-height: 215px;
                    width: 180px;
                    border-radius: 5px;
                    border: 1px solid white;
                    margin: 10px 0px 10px 0px;
                }

                .c-team-profile-card-name, .c-team-profile-card-job-title, .c-team-profile-card-contact{
                    min-height: 25px;
                    width: 100%;
                    padding: 0px 10px 0px 10px;
                    color: #ffffff;
                }

                .c-team-profile-card-image{
                    height: 120px;
                    width: 100%;
                }
            `}</style>
        </>
    );
}

export default TeamProfile;