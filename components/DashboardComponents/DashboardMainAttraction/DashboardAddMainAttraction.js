import React from 'react';
import {Typography, TextField, Button, withStyles, Chip} from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import KarimFileInput from '../../KarimComponents/KarimFileInput/KarimFileInput'


const CustomTextField = withStyles({
    root: {
        '& .MuiFormControl-marginDense':{
            marginBottom: "15px !important"
        },
        '& .MuiFormHelperText-contained':{
            color: "green",
            background: "#ffffff"
        }
    }
})(TextField);

const DashboardAddMainAttraction = () => {
    const [title, setTitle] = React.useState('');
    const [thumb, setThumb] = React.useState("")
    const [slug, setSlug] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [projectName, setProjectName] = React.useState('');
    const [projectNameList, setProjectNameList] = React.useState([]);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });


    const submitMainAttraction = (e) => {
        e.preventDefault();

        const projectNameLists = [];
        projectNameList.forEach(v=>{
            projectNameLists.push(v.projectName)
        });

        const data = {
            title: title,
            thumb: thumb,
            slug: slug,
            desc: desc,
            projectNamesList: projectNameList
        }
        axios.post('/dashboard/main-attractions/add', data)
        .then(res=>{
            showSnackBar({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            setTimeout(()=>{
                showSnackBar({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 2000);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
        
    }


    const addProjectHandler = () => {
        setProjectNameList((prevState)=>[...prevState, projectName]);
    }
    const removeProjectName = (key) => {
        var editableArray = [...projectNameList];
        editableArray.splice(key, 1);
        setProjectNameList(editableArray);
    }

    return(
        <>
            <div className="d-add-main-attraction-wrapper">
                <div className="d-add-main-attraction">
                    <form onSubmit={submitMainAttraction} encType="multipart/form-data">
                        {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
                        <Typography
                            variant="h4"
                            align="center"
                            style={{borderBottom: "1px solid #333333"}}
                            gutterBottom
                        >
                            Add Main Attraction
                        </Typography>
                        <div>
                            <CustomTextField
                                id="custom-outline-title-input"
                                type="text"
                                variant="outlined"
                                label="Title"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                helperText="Only strings are allowed"
                                fullWidth
                            />
                        </div>
                        <div>
                            <KarimFileInput 
                                setThumb={setThumb}
                                allowedFileTypes={["image/png", "image/svg"]}
                            />
                        </div>
                        <div>
                            <CustomTextField
                                id="custom-outline-image-slug-input"
                                type="text"
                                variant="outlined"
                                label="Slug"
                                value={slug}
                                onChange={(e)=>setSlug(e.target.value)}
                                helperText='*for example: a demo slug would be like "project-exhibtion"'
                                fullWidth
                            />
                        </div>
                        <div>
                            <CustomTextField
                                id="custom-outline-image-desc-textarea"
                                variant="outlined"
                                label="Description"
                                value={desc}
                                onChange={(e)=>setDesc(e.target.value)}
                                helperText='*write a descriptiom'
                                fullWidth
                                multiline
                                rows={8}
                                margin="normal"                            
                        />
                        </div>
                        <div className="d-main-attraction-project-list">
                            <div className="d-main-attraction-project-list-add">
                                <CustomTextField
                                    id="custom-outline-project-list"
                                    type="text"
                                    variant="outlined"
                                    label="Project List"
                                    value={projectName}
                                    onChange={(e)=>setProjectName(e.target.value)}
                                    fullWidth
                                    margin="dense"
                                />
                                <Button 
                                    disabled={snackBar.value}
                                    variant="contained" 
                                    color="secondary"
                                    onClick={addProjectHandler}
                                >
                                Add Project
                                </Button>
                            </div>
                            <div className="d-main-attraction-project-list-show">
                                {
                                    !projectNameList.lenght
                                        ?
                                    projectNameList.map((obj, k)=>(
                                        <Chip
                                            label={obj}
                                            key={k}
                                            color="primary"
                                            onDelete={()=>removeProjectName(k)}
                                        />
                                    ))
                                        :
                                    null
                                }
                                    
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button 
                                // disabled={snackBar.value}
                                disabled={true}
                                type="submit"
                                variant="contained" 
                                color="primary"
                            >
                            Add
                            </Button>
                        </div>
                    </form>
                </div>    
                <style jsx>{`
                .d-main-attraction-project-list{
                    min-height: 220px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 10px;
                }
                .d-main-attraction-project-list-add{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-bottom: 5px;
                }
                .d-main-attraction-project-list-show{
                    min-height: 100px;
                    width: 100%;
                    background: antiquewhite;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    padding: 10px;
                    border-radius: 5px;
                    flex-wrap: wrap;
                }
                .d-add-main-attraction-wrapper{
                    height: auto;
                    width: 100%;
                    padding: 10px;
                    display: flex;
                }
                .d-add-main-attraction{
                    flex: 1;
                }
                .d-add-main-attraction>form>div{
                    margin-bottom: 20px !important;
                }
                `}</style>
            </div>
       </>
    );
}

export default DashboardAddMainAttraction;