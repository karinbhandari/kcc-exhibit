import Layout from '../components/ClientComponents/Layout/Layout';
import ShowGallery from '../components/ClientComponents/Gallery/ShowGallery';

const Gallery = () => {
    return(
        <Layout title="Gallery - Kcc Exhibit" desc="Gallery page of Kcc Exhibit">
            <div className="c-gallery-wrapper">
                <div className="c-gallery">
                    <div className="c-gallery-top-wrapper">
                        <div className="c-gallery-top">
                            <div className="c-gallery-top-header-wrapper c-flex-center">
                                <div className="c-gallery-top-header">
                                    <span className="c-gallery-top-header-title">Our Memories!</span>
                                </div>
                            </div>
                            <div className="c-gallery-top-desc-wrapper c-flex-center">
                                <div className="c-gallery-top-desc">
                                    <p className="c-gallery-top-desc-title">Here are some of our memories, rather say happy times. We the team from "Kantipur City College" are shocked to see the new talents comming with unusal idea or project and that's gives us motivation to bring these <span style={{color: "#333333"}}>&hearts; &hearts; &hearts;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-gallery-body-wrapper">
                        <div className="c-gallery-body">
                            <ShowGallery />
                        </div>
                    </div>
                </div>    
            </div>
            <style jsx>{`

            @media screen and (max-width: 899px){
                .c-gallery-wrapper{
                    margin-top: 50px !important;
                }
            }

            .c-gallery-wrapper{
                min-height: 650px;
                width: 100%;
                display: flex;
                background: #265078;
            }
            .c-gallery{
                flex: 1;
            }
            
            .c-gallery-top-wrapper{
                min-height: 200px;
                width: 100%;
                display: flex;
            }
            
            .c-gallery-top{
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            
            .c-gallery-top-header-wrapper{
                height: 90px;
                width: 100%;
                display: flex;
            }
            
            .c-gallery-top-header{
                height: 100%;
                width: 80%;
            }
            .c-gallery-top-header-title{
                font-size: 38px !important;
                color: #ffffff;
                text-transform: uppercase;
                letter-spacing: 1.5px;
            }
            
            @media screen and (max-width: 450px){
                .c-gallery-top-header-title{
                    font-size: 30px !important;
                }
            }
            
            .c-gallery-top-desc-wrapper{
                min-height: 120px;
                width: 100%;
                display: flex;
            }
            
            .c-gallery-top-desc{
                height: 100%;
                width: 80%;
                padding: 15px 0px 15px 0px;
            }
            
            .c-gallery-top-header{
                display: flex;
                align-items: flex-end;
            }
            
            .c-gallery-top-desc{
                display: flex;
                align-items: center;
            }
            
            .c-gallery-top-desc-title{
                font-size: 18px !important;
                letter-spacing: 1.5px;
                color: #ffffff;
                line-height: 30px;
            }
            
            .c-gallery-body-wrapper{
                height: calc(100% - 200px);
                width: 100%;
                display: flex;
            }
            .c-gallery-body{
                flex: 1;
            }
            `}</style>
        </Layout>
    );
}

export default Gallery;