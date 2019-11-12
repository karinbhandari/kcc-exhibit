import React from 'react';
import WhyAboutLayout from '../components/ClientComponents/WhyAboutLayout/WhyAboutLayout';

const AboutUs = () => {

    const aboutUsPara = {
        para1: `KCC Exhibit is a Project Exhibition & Seminar; Kantipur City College has been organizing in its premises since 2001. The prime objective of this project exhibition and seminar is to promote the students’ projects and to interact with various industries, organizations and academic institutions so as to promote academic standard and sustainability. The Kantipur City College has firm belief that “KCC Exhibit" will impart benefits not only to graduates but also to individuals, academicians, professionals, and industrialists.`,
        para2: `The KCC exhibit is organized by Center for Software Research and Development (CSDR) at Kantipur City College (KCC) with the motif of “Ingenious thoughts, sustainable solution”.`
    }

    return(
        <>
            <WhyAboutLayout smileyName="about-us.png" aboutUsPara={aboutUsPara} title="About Us - Kcc Exhibit" desc="About us page of kcc exhibit" headingTitle="what we are all about" image="../../../static/images/about.png" imageAlt="about us image"/>
            <style jsx>{`
            .c-about-us-wrapper{
                min-height: 400px;
                width: 100%;
                display: flex;
            }
            .c-about-us{
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            
            .c-about-us-top-wrapper{
                height: 100px;
                width: 100%;
                display: flex;
                background: #265078;
            }
            .c-about-us-top{
                flex: 1;
            }
            .c-about-us-bottom-wrapper{
                height: calc(100% - 100px);
                width: 100%;
                display: flex;
                background: #29658a;
            }
            .c-about-us-bottom{
                flex: 1;
            }        
            `}</style>
        </>
    );
}

export default AboutUs;