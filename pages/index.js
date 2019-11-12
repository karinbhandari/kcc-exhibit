import Layout from '../components/ClientComponents/Layout/Layout';
import VisitorsFeedback from '../components/ClientComponents/VisitorsFeedback/VisitorsFeedback';
import MapNewsletter from '../components/ClientComponents/MapNewsletter/MapNewsletter';
import LastYearMemory from '../components/ClientComponents/LastYearMemory/LastYearMemory';
import LandingPage from '../components/ClientComponents/LandingPage/LandingPage';
import MainAttraction from '../components/ClientComponents/MainAttraction/MainAttraction';
import OurSponsers from '../components/ClientComponents/OurSponsers/OurSponsers';

const Home = () => {

    return(
        <Layout title="Home Kcc Exhibit" desc="Home page of Kcc Exhibit.">
            <div className="c-home-container">
                <div className="c-home">
                    <div>
                        <LandingPage />
                    </div>
                    <div>
                        <MainAttraction />
                    </div>
                    <div>
                        <VisitorsFeedback />
                    </div>
                    <div>
                        <OurSponsers />
                    </div>
                    <div>
                        <LastYearMemory />
                    </div>
                    <div>
                        <MapNewsletter />
                    </div>
                    
                </div>
                <div className="c-home-parallex">
                    <img src="/static/images/parallex.jpeg" alt="parallex" 
                    style={{
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "100vh"
                    }}/>
                </div>
            </div>
            <style jsx>{`
                .c-home-container{
                    height: auto;
                    width: 100%;
                    background: trasparent;
                }
                .c-home{
                    height: auto;
                    width: 100%;
                }
                .c-home>div{
                    margin-bottom: 100px;
                }
                .c-home-parallex{
                    position: fixed;
                    height: auto;
                    width: 100%;
                    z-index: -1;
                    top: 0;
                    left: 0;
                }
            `}</style>
        </Layout>
    );
}

export default Home;