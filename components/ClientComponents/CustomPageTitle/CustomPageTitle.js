const CustomPageTitle = (props) => {
    return(
        <div className="c-custom-pages-title-wrapper">
            <div className="c-custom-pages-title c-flex-center">
                <span className="c-custom-pages-title-word">{props.title}</span>
                <img 
                    src={`/static/images/smiles/${props.smileyName}`}
                    alt={props.smileyName}
                    height="50px"
                    width="50px"
                    style={{
                        marginLeft: "10px"
                    }}
                />
            </div>
            <style jsx>{`
            .c-custom-pages-title-wrapper{
                height: 60px;
                border-radius: 5px;
                width: auto;
                display: flex;
            }
            .c-custom-pages-title{
                flex: 1;
                margin: 5px 10px 0px 5px;
            }
            .c-custom-pages-title-word{
                text-transform: uppercase;
                font-size: 25px !important;
                letter-spacing: 1.5px;
                font-weight: bolder;
                color: white;
            }

            @media screen and (max-width: 450px){
                .c-custom-pages-title-wrapper{
                    max-width: 250px !important;
                }
                .c-custom-pages-title-word{
                    font-size: 16px !important;
                    letter-spacing: normal !important;
                }
                c-custom-pages-title>img{
                    height: 40px;
                    width: 40px;
                }
            }
            `}</style>
        </div>
    );
}

export default CustomPageTitle;