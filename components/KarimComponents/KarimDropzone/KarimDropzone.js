import React from 'react';
import FileView from './FileView';


const KarimDropzone = (props) => {

    const [keyToDelete, setKeyToDelete] = React.useState(undefined);

    const [allowedType] = React.useState(props.allowedFileTypes);

    const [helperText, setHelperText] = React.useState({
        value: "*Accepted files must be 8.",
        color: "green"
    });



    const [acceptedFiles, setAcceptedFiles] = React.useState([]);

    const [rejectedFiles, setRejectedFiles] = React.useState([]);

    const [acceptedFilesUrlFormat, setAcceptedFilesUrlFormat] = React.useState([]);

    React.useEffect(()=>{
        if(acceptedFiles.length < props.galleryLength){
            setHelperText({
                value: `*Please select ${props.galleryLength} for your operation`,
                color: "red"
            });
        }else if(acceptedFiles.length === props.galleryLength){
            setHelperText({
                value: "- You are going with the following files!",
                color: "green",
                setButton: true
            });
        }else{
            setHelperText({
                value: "*Selected files cannot be more than 8",
                color: "red"
            });
        }
    }, []);

    React.useEffect(()=>{
        if(keyToDelete != undefined){
            var arr = [...acceptedFilesUrlFormat];
            arr.splice(keyToDelete, 1);
            setAcceptedFilesUrlFormat(arr);
        }
    }, [keyToDelete])


    const onKarimDropzoneChange = (e) => {

        const selectedFiles = Array.from(e.target.files);

        
        // if(selectedFiles.length < props.galleryLength){
        //     setHelperText({
        //         value: "*Please select 8 for your operation",
        //         color: "red"
        //     });
        // }else if(selectedFiles.length === props.galleryLength){
            // set accpeted files
            selectedFiles.forEach(file=>{
                if(allowedType.includes(file.type.toLowerCase())){
                    setAcceptedFiles(prevFiles => [...prevFiles, file]);
                    props.setImages(prevFiles => [...prevFiles, file]);
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) =>{
                        setAcceptedFilesUrlFormat(prevFiles=>[...prevFiles, e.target.result]);
                    }
                }
                else{
                    setRejectedFiles(prevFiles => [...prevFiles, file])
                }
            })

            // now set rejected files

        //     setHelperText({
        //         value: "- You are going with the following files!",
        //         color: "green",
        //         setButton: true
        //     });
        // }else{
        //     setHelperText({
        //         value: "*Selected files cannot be more than 8",
        //         color: "red"
        //     });
        // }
    }

    return(
        <React.Fragment>
            <div className="karim-dropzone-wrapper">
                <p style={{color: helperText.color}}>{helperText.value}</p>
                <p style={{color: "green"}}>*Allowed file formats are [.png or .jpg and .jpeg]</p>
                <div className="karim-dropzone">
                    <div className="karim-dropzone-hidden-section">
                        <input 
                            type="file" 
                            multiple
                            className="karim-dropzone-custom-input"
                            onChange={onKarimDropzoneChange}
                        />
                    </div>
                    <div className="karim-dropzone-visible-section">
                        <span
                            style={{
                                height: "40px",
                                // border: "1px solid red",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#696969",
                                fontSize: "18px"
                            }}
                        >
                            Drag 'n' drop some files here, or click to select files
                        </span>
                        <img 
                            src="/static/drag-drop.png" 
                            alt="drag-drop" 
                            style={{
                                height: "calc(200px - 40px)",
                                width: "140px",
                                // border: "1px solid red"
                            }}
                        />
                    </div>
                </div>
                <div className="karim-dropzone-image-section">
                    <div className="karim-dropzone-rejected-section"
                        style={{
                            borderRight: "1px solid #cccccc"
                        }}
                    >
                        <div className="karim-dropzone-image-section-head">
                            <p>Rejected Files : </p>
                        </div>
                        <div className="karim-dropzone-image-section-body">
                            {
                                rejectedFiles.length
                                    &&
                                    rejectedFiles.map((v,k)=>{
                                        return(
                                            <span className="karim-dropzone-rejected-list" key={k}>{k}. {v.name}</span>
                                        )
                                    })                            
                            }
                        </div>
                    </div>
                    <div className="karim-dropzone-accepted-section">
                        <div className="karim-dropzone-image-section-head">
                            <p>Accepted Files : </p>
                        </div>
                        <div className="karim-dropzone-image-section-body">
                            {
                                acceptedFilesUrlFormat.length
                                    &&
                                acceptedFilesUrlFormat.map((v,k)=>(
                                    <FileView value={v} keyVal={k} key={k} setKeyToDelete={setKeyToDelete}/>
                                ))                            
                            }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                
                .karim-dropzone-wrapper{
                    height: auto;
                    width: 100%;
                    padding: 10px;
                }
                .karim-dropzone{
                    height: 200px;
                    width: 100%;
                    border: 2px dashed #cccccc;
                    background: #f0f0f0;
                    position: relative;
                }
                .karim-dropzone-hidden-section{
                    position: absolute;
                    height: 200px;
                    width: 100%;
                }
                .karim-dropzone-custom-input{
                    border: 1px solid red;
                    height: 200px;
                    width: 100%;
                    opacity: 0;
                    cursor: pointer;
                }
                .karim-dropzone-visible-section{
                    height: 200px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .karim-dropzone-image-section{
                    height: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    border: 1px solid #cccccc;
                }
                .karim-dropzone-image-section>div{
                    width: 50%;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                .karim-dropzone-image-section-head{
                    width: 100%;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .karim-dropzone-image-section-body{
                    min-height: 50px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    padding: 5px;
                }
                .karim-dropzone-image-section-head>p{
                    font-weight: bold;
                    color: #333333;
                    border-bottom: 1px solid #cccccc;
                    padding: 0px 10px 0px 10px;
                }
                .karim-dropzone-rejected-list{
                    margin: 0px 10px 10px 10px;
                    height: auto;
                    width: 100%;
                    padding: 5px;
                    border: 1px solid darkgray;
                    border-radius: 5px;
                    cursor: pointer;
                    overflow: hidden;
                }
                .karim-dropzone-rejected-list:hover{
                    background: lavender;
                }
            `}</style>
        </React.Fragment>
    );
}

export default KarimDropzone;