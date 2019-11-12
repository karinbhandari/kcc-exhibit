import React from "react";
import 'date-fns';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import axios from 'axios';
import SnackBar from '../../SnackBar';

const UpdateLandingPage = (props) => {

    // Exhibit english date
    const [startingEnglishDate, setStartingEnglishDate] = React.useState(new Date('2018-08-18T21:11:54'));
    const [endingEnglishDate, setEndingEnglishDate] = React.useState(new Date('2018-08-18T21:11:54'));

    // Exhibit time
    const [startingEnglishTime, setStartingEnglishTime] = React.useState(new Date('2018-08-18T21:11:54'));
    const [endingEnglishTime, setEndingEnglishTime] = React.useState(new Date('2018-08-18T21:11:54'));

    const [snackBar, showSnackBar] = React.useState({
        value: false,
        message: "",
        variant: ""
    });

    React.useEffect(()=>{
        axios.get('/dashboard/landing-page/get-landing-page-date-info')
        .then(res=>{
            setStartingEnglishDate(res.data.startingEnglishDate);
            setEndingEnglishDate(res.data.endingEnglishDate);
            setStartingEnglishTime(res.data.startingEnglishTime);
            setEndingEnglishTime(res.data.endingEnglishTime);
        })
        .catch(err=>{
            showSnackBar({
                value: true,
                message: err.message,
                variant: "error"
            })
        })
    }, []);

    const updateSlider = () => {

        const data = {
            startingEnglishDate,
            endingEnglishDate,
            startingEnglishTime,
            endingEnglishTime
        }

        axios.post('/dashboard/landing-page/update-landing-page-date-info', data)
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
        });
    }

    return(
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="d-landing-page-wrapper">
                    {snackBar.value && <SnackBar open={true} message={snackBar.message} variant={snackBar.variant} />}
                    <div className="d-landing-page-english-date-wrapper"
                        style={{
                            width: "100%"
                        }}
                    >
                        <fieldset
                            style={{
                                width: "100%",
                                borderColor: "#06a10b"
                            }}
                        >
                            <legend>Update</legend>
                            <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="exhibit-english-date-picker-start"
                                    label="Exhibit Starting Date"
                                    format="MM/dd/yyyy"
                                    value={startingEnglishDate}
                                    fullWidth
                                    onChange={(date)=>setStartingEnglishDate(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    helperText="*select exhibit starting date"
                                />
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="exhibit-english-date-picker-end"
                                    label="Exhibit Ending Date"
                                    format="MM/dd/yyyy"
                                    fullWidth
                                    variant="outlined"
                                    value={endingEnglishDate}
                                    onChange={(date)=>setEndingEnglishDate(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    helperText="*select exhibit ending date"
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="exhibit-starting-time-picker"
                                    label="Exhibit Starting Time"
                                    fullWidth
                                    value={startingEnglishTime}
                                    onChange={(time)=>setStartingEnglishTime(time)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="exhibit-ending-time-picker"
                                    fullWidth
                                    label="Exhibit Ending Time"
                                    value={endingEnglishTime}
                                    onChange={(time)=>setEndingEnglishTime(time)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </div>
                            
                        </fieldset>
                    </div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={updateSlider}
                        // disabled={snackBar.value}
                        disabled={true}
                    >
                        Update
                    </Button>
                </div>
            </MuiPickersUtilsProvider>
            <style jsx>{`

                .d-landing-page-wrapper{
                    height: auto;
                    padding: 30px 0px 30px 0px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .d-landing-page-english-date-wrapper{
                    margin-bottom: 30px;
                }

            `}</style>
        </>
    );
}

export default UpdateLandingPage;