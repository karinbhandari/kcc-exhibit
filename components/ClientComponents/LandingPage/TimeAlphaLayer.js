import React from 'react';
import axios from 'axios';
import SnackBar from '../../SnackBar';


const todays_date = new Date();
const next_year = new Date().getUTCFullYear() + 1;
const next_year_date = new Date(`${next_year}-01-01T00:00:00.000Z`);
let interval = "";

class TimeAlphaLayer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: {
                startDate: new Date(),
                endDate: new Date(),
                startTime: new Date(),
                endTime: new Date()
            },
            counterData: {
                secLeft: 0,
                minuteLeft: 0,
                hourLeft: 0,
                dayLeft: 0
            },
            happen: false,
            over: false,
            counter: false,
            snackBar: {
                value: false,
                message: "",
                variant: ""
            }
        };
    }

    componentDidMount(){

        this.getDateInfo();
    }

    componentWillUnmount(){
        console.log("Clearing interval for timer ...");
        clearInterval(interval);
    }

     getDateInfo = () => {
        axios.get('/dashboard/landing-page/get-landing-page-date-info')
        .then(res=>{
            this.setState({
                data: {
                    startDate: new Date(res.data.startingEnglishDate),
                    endDate: new Date(res.data.endingEnglishDate),
                    startTime: new Date(res.data.startingEnglishTime),
                    endTime: new Date(res.data.endingEnglishTime)
                }
            });

            this.props.setData({
                exhibitYear: new Date(res.data.startingEnglishDate).getUTCFullYear(),
                month: new Date(res.data.startingEnglishDate).getUTCMonth(),
                startDay: new Date(res.data.startingEnglishDate).getUTCDate(),
                endDay: new Date(res.data.endingEnglishDate).getDate(),
                startTime: new Date(res.data.startingEnglishTime).getUTCHours(),
                endTime: new Date(res.data.endingEnglishTime).getUTCHours()
            });

            if(todays_date >= this.state.data.startDate && todays_date <= this.state.data.endDate){
                this.setState({
                    happen: true
                });
            }else if(todays_date >= this.state.data.endDate && todays_date < next_year_date && todays_date != next_year_date){
                this.setState({
                    over: true
                });
            }else{
                this.setState({
                    counter: true
                });
                interval = setInterval(()=>{
                    const todays_date = new Date();
                    var difference = this.state.data.startDate.getTime() - todays_date.getTime();
                
                    this.setState({
                        counterData: {
                            secLeft: Math.floor((difference % (1000 * 60)) / 1000),
                            minuteLeft: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                            hourLeft: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                            dayLeft: Math.floor(difference / (1000 * 60 * 60 * 24))
                        }
                    })
                }, 1000)
                
            }

        })
        .catch(err=>{
            this.setState({
                snackBar: {
                value: true,
                message: err.message,
                variant: "error"
            }});
        });
    }

    showCounter = () => {
        return(
        <>  
            <div className="cover-time-body-row">
                <div className="cover-time-day">
                    <div className="cover-time-wrapper-head c-flex-center">
                        <h4 className="days-left">{this.state.counterData.dayLeft}</h4>
                    </div>
                    <div className="cover-time-wrapper-body c-flex-center">
                        <h5>Days</h5>
                    </div>
                </div>
                <div className="cover-time-hours">
                    <div className="cover-time-wrapper-head c-flex-center">
                        <h4 className="hours-left">{this.state.counterData.hourLeft}</h4>
                    </div>
                    <div className="cover-time-wrapper-body c-flex-center">
                        <h5>Hours</h5>
                    </div>
                </div>
            </div>
            <div className="cover-time-body-row">
                <div className="cover-time-minutes">
                    <div className="cover-time-wrapper-head c-flex-center">
                        <h4 className="minutes-left">{this.state.counterData.minuteLeft}</h4>
                    </div>
                    <div className="cover-time-wrapper-body c-flex-center">
                        <h5>Minutes</h5>
                    </div>
                </div>
                <div className="cover-time-seconds">
                    <div className="cover-time-wrapper-head c-flex-center">
                        <h4 className="seconds-left">{this.state.counterData.secLeft}</h4>
                    </div>
                    <div className="cover-time-wrapper-body c-flex-center">
                        <h5>Seconds</h5>
                    </div>
                </div>
            </div>
            <style jsx>{`
            
                .cover-time-body-row{
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                }
                .cover-time-body-row>div{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .cover-time-body-row>div>div{
                    flex: 1;
                }
                .cover-time-wrapper-head>*{
                    color: white;
                    font-size: 25px;
                }
                .cover-time-wrapper-body>*{
                    color: white;
                    font-size: 20px;
                    letter-spacing: 1.5px;
                }
    
                @media screen and (max-width: 400px){
                    .cover-time-body-row>div{
                        display: block !important;
                        width: 100px !important;
                    }
                }
            `}</style>
            </>
        )
    }

    render(){
        return(
            <>
                {this.state.snackBar.value && <SnackBar open={true} message={this.state.snackBar.message} variant={this.state.snackBar.variant} />}  
                <div className="c-time-alpha-layer-wrapper">
                    <div className="c-time-alpha-layer">
                        <div className="c-cover-time-wrapper c-flex-center">
                            {
                                this.state.happen
                                &&
                                <span
                                    style={{
                                        fontSize: "20px",
                                        color: "#ffffff",
                                        margin: "0px 20px 0px 20px",
                                        letterSpacing: "1.5px"
                                    }}
                                >
                                    Kcc Exhibit is Happening!
                                </span> 
                            }
    
                            {
                                this.state.over
                                &&
                                <span
                                    style={{
                                        fontSize: "20px",
                                        color: "#ffffff",
                                        margin: "0px 20px 0px 20px",
                                        letterSpacing: "1.5px"
                                    }}
                                >
                                    Kcc Exhibit 2019 is sucessfully over. See you in {next_year}!
                                </span>   
                            }
    
                            {
                                this.state.counter
                                &&
                                this.showCounter()
                            }
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .c-time-alpha-layer-wrapper{
                        width: 100%;
                        height: calc(100vh - 150px);
                        min-height: 450px;
                        top: 150px !important;
                        display: flex;
                        position: absolute;
                        left: 0;
                        border; 1px solid green;
                    }
    
                    @media screen and (max-width: 900px){
                        .c-time-alpha-layer-wrapper{
                            height: calc(100vh - 50px);
                        }
                        .c-time-alpha-layer-wrapper{
                            top: 50px !important;
                        }
                        .c-time-alpha-layer{
                            padding-bottom: 20px !important;
                        }
                    }
    
                    @media screen and (max-width: 400px){
                        .c-cover-time-wrapper{
                            height: 170px !important;
                            flex-direction: column !important;
                        }
                    }
    
                    @media screen and (max-width: 500px){
                        .c-cover-time-wrapper{
                            width: 95% !important;
                        }
                    }
                    .c-time-alpha-layer{
                        flex: 1;
                        min-height: 450px;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                    }
                    .c-cover-time-wrapper{
                        height: 100px;
                        width: 450px;
                        border: 1px solid orange;
                        display: flex;
                        border-radius: 5px;
                        flex-direction: row;
                        background: #052434;
                        opacity: 0.9;
                        padding: 5px;
                    }
                    
                `}</style>
            </>
        );
    }
}

export default TimeAlphaLayer;