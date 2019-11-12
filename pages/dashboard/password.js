import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import axios from 'axios';
import DashboardChangePassword from '../../components/DashboardComponents/DashboardPassword/DashboardChangePassword';
import DashboardVerifyPassword from '../../components/DashboardComponents/DashboardPassword/DashboardVerifyPassword';
import SnackBar from '../../components/SnackBar';

const Password = () => {
    const [step2, setStep2] = React.useState(false);

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    const verifyOldPasscode = (password) => {
        const data = {
            username: "admin",
            password: password
        }
        axios.post('/api/login/validate-password', data)
        .then(res=>{
            if(res.data.isValid){
                showSnackBar({
                    value: true,
                    message: "Password Verified!",
                    variant: "success"
                })
                setTimeout(()=>{
                    showSnackBar({
                        value: false,
                        message: "",
                        variant: ""
                    })
                }, 2000);
                setStep2(true);
            }else{
                showSnackBar({
                    value: true,
                    message: "Password Incorrect, Please try again!",
                    variant: "error"
                })
            }
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        });
    }

    const updatePassword = (password) => {
        const data = {
            username: "admin",
            password: password
        }
        axios.post('/api/login/update-password', data)
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
            showSnackBar((prevState)=>(
                {
                    ...prevState,
                    value: true,
                    message: err.message,
                    variant: "error"
                }
            ))
        });
    }
    return(
        <DashboardContainerLayout title="Password" desc="Password of Dashboard">
           <React.Fragment>
            {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
                <div className="d-d-c-p c-flex-center">
                    {
                        step2 
                            ?
                        <DashboardChangePassword 
                            oldLabel="New Password"
                            confirmLabel="Confirm New Password"
                            buttonLabel="Create A New Password"
                            onButtonClickHandler={updatePassword}
                            button={snackBar.value}
                        />  
                            :
                        <DashboardVerifyPassword 
                            oldLabel="Old Password"
                            confirmLabel="Confirm Old Password"
                            buttonLabel="Verify Old Password"
                            onButtonClickHandler={verifyOldPasscode}
                        />
                    } 
                </div>
                <style jsx>{`
                    .d-d-c-p{
                        min-height: 300px;
                        padding-top: 30px;
                        width: 100%;
                    }
                `}</style>
           </React.Fragment>
        </DashboardContainerLayout>
    );
}

export default Password;
