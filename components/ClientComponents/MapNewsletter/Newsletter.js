import React from 'react';
import TextField  from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Loader from '../../loader';
import SnackBar from "../../SnackBar";
import {withStyles} from '@material-ui/core/styles';


const styles = {
    onSuccess: {
        '& .MuiOutlinedInput-root fieldset': {
            borderColor: "#06a10b"
        },
        '& .MuiFormHelperText-root': {
            color: "#06a10b"
        }
    },
    onError: {
        '& .MuiFormHelperText-root': {
            color: "red"
        }
    }
};

const CustomTextField = withStyles({
    root: {
        "& .MuiFormLabel-root":{
            color: "#ffffff"
        },
        "& .MuiInputBase-root": {
            color: "#ffffff"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#cccccc"
            },
            "&:hover fieldset": {
              borderColor: "#ffffff"
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976D2"
            }
        },
        '& .MuiFormHelperText-root': {
            color: "#ffffff"
        }
    }
})(TextField);

const CustomButton = withStyles({
    root: {
        width: "150px",
        height: "45px",
        marginTop: "20px"
    }
})(Button);




const Newsletter = (props) => {

    const {classes} = props;

    const [username, setUsername] = React.useState({
        value: "",
        helperText: "",
        error: false,
        isValid: false
    });
    const [email, setEmail] = React.useState({
        value: "",
        helperText: "",
        error: false,
        isValid: false
    });
    const [phone, setPhone] = React.useState({
        value: "",
        helperText: "",
        error: false,
        isValid: false
    });
    const [message, setMessage] = React.useState({
        value: "",
        helperText: "",
        error: false,
        isValid: false
    })

    const [status, setStatus] = React.useState(false);

    const [showLoader, setShowLoader] = React.useState(false);

    const [showSnack, setShowSnack] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const onNewsletterSendHandler = (e) => {
        e.preventDefault();
        const data = {
            username: username.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        }
        setShowSnack({...showSnack, value: false});
        setShowLoader(true);
        axios.post('/dashboard/newsletter/save', data)
        .then((res)=>{
            setStatus(true);
            setShowLoader(false);
            setShowSnack({
                value: true,
                message: res.data.message,
                variant: "success"
            })
            
        })
        .catch((err)=>{
            setStatus(false);
            setShowLoader(false);
            setShowSnack({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const onNewsletterBlurHandler = (e) => {
        const usernamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phonePattern = /^\d{10}$/;
        switch(e.target.id){
            case "outlined-username-input":
                if(e.target.value === ""){
                    setUsername({...username, helperText: "Username cannot be empty feild!", isValid: false, error: true});
                }
                else{
                    if(usernamePattern.test(e.target.value)){
                        setUsername({...username, helperText: "Valid username!", isValid: true, error: false});
                    }else{
                        setUsername({...username, helperText: "Enter full name!", isValid: false, error: true});
                    }
                }
                break;
            case "outlined-email-input":
                    if(e.target.value === ""){
                        setEmail({...email, helperText: "Email cannot be empty feild!", isValid: false, error: true});
                    }
                    else{
                        if(emailPattern.test(e.target.value)){
                            setEmail({...email, helperText: "Valid email!", isValid: true, error: false});
                        }else{
                            setEmail({...email, helperText: "Enter a valid email format!", isValid: false, error: true});
                        }
                    }
                break;
            case "outlined-number-input":
                    if(e.target.value === ""){
                        setPhone({...phone, helperText: "Phone field cannot be empty feild!", isValid: false, error: true});
                    }
                    else{
                        if(phonePattern.test(e.target.value)){
                            setPhone({...phone, helperText: "Valid phone number format!", isValid: true, error: false});
                        }else{
                            setPhone({...phone, helperText: "Enter a 10 digit valid phone number!", isValid: false, error: true});
                        }
                    }
                break;
            case "outlined-message-input":
                    if(e.target.value === ""){
                        setMessage({...message, helperText: "Please enter something :(", isValid: false, error: true});
                    }
                    else{
                        setMessage({...message, helperText: "Thank you, this means alot :)", isValid: true, error: false});
                    }
                break;
            default: 
                break;
        }
    }


    return(
        <React.Fragment>
            <Loader show={showLoader} message="Sending data . . ."/>
            {showSnack.value && <SnackBar open={true} message={showSnack.message} variant={showSnack.variant}/>}
            <div className="c-newsletter-wrapper">
                <form onSubmit={onNewsletterSendHandler} autoComplete="off" className="c-newsletter">
                    <CustomTextField 
                    id="outlined-username-input"
                    label="Name"
                    value={username.value}
                    onChange={(e)=>setUsername({...username, value: e.target.value})}
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    required
                    error={username.error}
                    onBlur={onNewsletterBlurHandler}
                    helperText={username.helperText}
                    className={username.isValid ? classes.onSuccess : classes.onError}
                    />
                    <CustomTextField 
                    id="outlined-email-input"
                    label="Email"
                    value={email.value}
                    onChange={(e)=>setEmail({...email, value: e.target.value})}
                    variant="outlined"
                    margin="normal"
                    type="email"
                    fullWidth
                    required
                    error={email.error}
                    onBlur={onNewsletterBlurHandler}
                    helperText={email.helperText}
                    className={email.isValid ? classes.onSuccess : classes.onError}
                    />
                    <CustomTextField
                    id="outlined-number-input"
                    label="Phone"
                    type="tel"
                    value={phone.value}
                    onChange={(e)=>setPhone({...phone, value: e.target.value})}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    error={phone.error}
                    onBlur={onNewsletterBlurHandler}
                    helperText={phone.helperText}
                    className={phone.isValid ? classes.onSuccess : classes.onError}
                    />
                    <CustomTextField
                    id="outlined-message-input"
                    label="Message"
                    type="textarea"
                    value={message.value}
                    onChange={(e)=>setMessage({...message, value: e.target.value})}
                    multiline
                    rows="3"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    error={message.error}
                    onBlur={onNewsletterBlurHandler}
                    helperText={message.helperText}
                    className={message.isValid ? classes.onSuccess : classes.onError}
                    />
                    <CustomButton
                    type="submit"
                    variant="outlined" 
                    color="primary"
                    disabled={status}
                    style={{
                        borderColor: "orange",
                        color: "white",
                        background: "orange"
                    }}
                    >
                        {status ? `Sent!` : `Notify Me!`}
                    </CustomButton>
                </form>
            </div>
            <style jsx>{`
                .c-newsletter-wrapper{
                    flex: 1;
                    border: 1px solid #ffffff;
                    padding: 30px 20px 30px 20px;
                    border-radius: 10px;
                }

                .c-newsletter{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                @media screen and (min-width: 780px){
                    .c-newsletter-wrapper{
                        width: 60% !important;
                        // border: 1 upx solid red;
                    }
                }
            `}</style>
        </React.Fragment>
    );
}

export default withStyles(styles)(Newsletter);