import React from 'react';
import { TextField, Button, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';


const DashboardChangePassword = (props) => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false
    });
    const [values1, setValues1] = React.useState({
        username: '',
        password: '',
        showPassword: false
    });

    const [password, setPassword] = React.useState("");
    
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [helperText, setHelperText] = React.useState({
        value: "",
        color: "",
        bool: true
    })

    const matchPassword = () => {
        if(password === "" || confirmPassword === ""){
            setHelperText({
                value: "*Password cannot be empty!",
                color: "red",
                bool: true
            });
        }else{
            if(password !== confirmPassword){
                setHelperText({
                    value: "*Password not matched!",
                    color: "red",
                    bool: true
                });
            }else{
                setHelperText({
                    value: "*Password matched! Enter the button.",
                    color: "green",
                    bool: false
                });
            }
        }
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    const handleClickShowPassword1 = () => {
        setValues1({ ...values1, showPassword: !values1.showPassword });
    };

    return(
        <React.Fragment>
            <div className="d-resuable-pass-compo-wrapper">
                <div 
                    className="c-flex-center"
                    style={{
                        width: "auto",
                        height: "auto",
                        padding: "7px",
                        background: "#51aee8",
                        margin: "0px 20px 0px 20px",
                        borderRadius: "5px",
                        letterSpacing: '1.5px'
                    }}
                >
                    <span
                        style={{
                            fontSize: "25px",
                            color: "white"
                        }}
                    >
                        Create A New Password
                    </span>
                </div>
                <div className="d-resuable-pass-compo">
                <TextField
                        id="custom-outline-password-input"
                        type="password"
                        variant="outlined"
                        label={props.oldLabel}
                        value={password}
                        onBlur={matchPassword}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        style={{marginBottom: "30px"}}
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        id="custom-outline-confirm-password-input"
                        type="password"
                        variant="outlined"
                        label={props.confirmLabel}
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        style={{marginBottom: "20px"}}
                        fullWidth
                        helperText={helperText.value}
                        type={values1.showPassword ? 'text' : 'password'}
                        onBlur={()=>{
                            matchPassword();
                        }}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values1.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={()=>props.onButtonClickHandler(confirmPassword)}
                        // disabled={helperText.bool || props.button}
                        disabled={true}
                    >
                        {props.buttonLabel}
                    </Button>

                </div>
            </div>
            <style jsx>{`
               .d-resuable-pass-compo-wrapper{
                height: auto;
                max-width: 700px;
                min-width: 400px;
                display: flex;
                flex-direction: column;
                
            }
            .d-resuable-pass-compo{
                height: auto;
                width: auto;
                margin: 20px;
                padding: 20px;
                border-radius: 5px;
                background: lavender;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
            `}</style>
        </React.Fragment>
    );
}

export default DashboardChangePassword;