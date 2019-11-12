import React from 'react';

const KarimFileInput = (props) => {

    const [allowedFileTypes] = React.useState(props.allowedFileTypes);

    const [file, setFile] = React.useState({
        value: '/static/no-image.svg',
        helperText: "*Allowed files type are .png / .svg",
        color: "green"
    });


    const onKarimInputChange = (e) => {

        let f = e.target.files[0];


        allowedFileTypes.forEach(v=>{
            if(v === f.type.toLowerCase()){
                var reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = (e) => {
                    window.file = e.target.result;
                    setFile({...file, value: e.target.result, helperText:"*Valid file selected", color:"green"});
                    props.setThumb(e.target.result);
                }
            }
            else{
                setFile({...file, helperText: `*${f.type} is not allowed, select either .png or .svg file for thumb`, color: "red"});
            }
        });

    }

    return(
        <React.Fragment>
            <div className="karim-file-input-wrapper">
                <div className="karim-file-input">

                    <input type="file" className="karim-file-input-type"
                        onChange = {onKarimInputChange}
                    />

                    <p style={{
                        color: file.color,
                        marginTop: "2px",
                        marginBottom: "10px",
                        fontSize: "12px",
                        paddingRight: "5px"
                    }}>
                        {file.helperText}
                    </p>

                    <img src={props.thumb !== "" && props.thumb !== undefined ? props.thumb : file.value} alt="thumb-image" height="100px" width="100px" style={{
                        border: "1px solid #cccccc"
                    }}/>

                </div>         
            </div>
            <style jsx>{`
                
                .karim-file-input-wrapper{
                    height: auto;
                    width: 100%;
                    border: 1px dashed #cccccc;
                    padding: 10px;
                }
                .karim-file-input{
                    min-height: 100px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .karim-file-input-type{
                    width: 100%;
                    background: #cccccc;
                    color: #ffffff;
                    font-weight: bold;
                    height: 30px !important;
                }

            `}</style>
        </React.Fragment>
    );
}

export default KarimFileInput;