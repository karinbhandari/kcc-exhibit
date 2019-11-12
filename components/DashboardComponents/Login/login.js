import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import SnackBar from '../../SnackBar';
import Loader from '../../loader';

const Login = (props) => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false
    });

    const [loader, showLoader] = React.useState({
        show: false,
        message: ""
    });

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const validateUser = (e) => {
        e.preventDefault();
        const data = {
            username: values.username,
            password: values.password
        }
        showLoader({
            show: true,
            message: "Authenticating admin..."
        });
      axios.post("/api/login/validate-password", data)
        .then(res=>{
            showLoader({
                show: false,
                message: ""
            });
            if(res.data.isValid === true){
                showSnackBar({
                    value: true,
                    message: "Access Granted!",
                    variant: "success"
                })
                setTimeout(()=>{
                    showSnackBar({
                        value: false,
                        message: "",
                        variant: ""
                    })
                }, 1500);
                props.signIn(values.username);
            }else{
                showSnackBar({
                    value: true,
                    message: "Invalid Username or Password!",
                    variant: "error"
                })
                setTimeout(()=>{
                    showSnackBar({
                        value: false,
                        message: "",
                        variant: ""
                    })
                }, 1500);
            }
        })
        .catch(err=>{
            showLoader({
                show: false,
                message: ""
            });
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
            setTimeout(()=>{
                showSnackBar({
                    value: false,
                    message: "",
                    variant: ""
                })
            }, 1500);
        });   
    }

    // testing create password
    // const createPassword = () => {
    //     const data = {
    //         username: values.username,
    //         password: values.password
    //     }
    //     axios.post("/api/login/create-password", data)
    //     .then(res=>{
    //         showSnackBar({
    //             value: true,
    //             message: res.data.message,
    //             variant: "success"
    //         })
    //     })
    //     .catch(err=>{
    //         showSnackBar({
    //             value: true,
    //             message: err.message,
    //             variant: "error"
    //         })
    //     });    
    // }


    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
    event.preventDefault();
    };


    return(
        <>
            <Loader show={loader.show} message={loader.message} />
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
                <div className="c-login-wrapper">
                    <div className="c-login">
                        <div className="c-login-top-wrapper">
                            <span style={{
                                color: "white",
                                fontSize: "25px",
                                letterSpacing: "1.5px"
                            }}>Login</span>
                        </div>
                        <div className="c-login-bottom-wrapper">
                        <TextField 
                            id="outlined-adornment-username"
                            variant="outlined"
                            style={{width: "100%", marginTop: "15px"}}
                            label="Username"
                            value={values.username}
                            onChange={handleChange('username')}
                            InputProps={{
                                endAdornment: 
                                            <InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>
                            }}
                            />
                            <TextField
                            id="outlined-adornment-password"
                            variant="outlined"
                            style={{width: "100%", marginTop: "30px"}}
                            type={values.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={values.password}
                            onChange={handleChange('password')}
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
    
                            <Button disabled={snackBar.value} onClick={(e)=>validateUser(e)} variant="contained" className="c-custom-button" style={{backgroundColor: "#1e4258", marginTop: "30px", color: "#ffffff"}}>
                                Login
                            </Button>
                        </div>
                    </div>
                    <style jsx>{`
                    .c-login-wrapper{
                        height: 100vh;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    
                    .c-login{
                        height: 350px;
                        width: 300px;
                        border-radius: 10px 10px 0px 0px;
                    }
                    
                    @media screen and (max-width: 300px){
                        .c-login{
                            width: 100vw !important;
                        }
                    }
                    
                    .c-login-top-wrapper{
                        height: 50px;
                        width: 100%;
                        background: #1e4258;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px 10px 0px 0px;
                    }
                    .c-login-bottom-wrapper{
                        height: calc(100% - 50px);
                        width: auto;
                        padding: 15px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        background: lavender;
                    }
                    `}</style>
                </div>
        </>
    );
}

export default Login;