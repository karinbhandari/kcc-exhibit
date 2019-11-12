import WhyAboutLayout from "../components/ClientComponents/WhyAboutLayout/WhyAboutLayout";

const WhyKccExhibit = () => {
    const whyKccExhibitPara = {
                    para1: "1. Providing a common platform for individuals, academicians, researchers, and professionals to interact with various industries and academic institutions.",
                    para2: "2. Making students able to grasp the opportunities by empowering their efficiency and the taste of profession.",
                    para3: "3. Strengthening the communication and exposure of their skills at a professional level so as to meet the industry requirements.",
                    para4: "4. Identify potential issues in the field of ICT, Engineering, and Management, and to find a common solution for it.",
                    para5: "5. Seeking prospects and possible applications of students’ skills and expertise in the context of Nepal.",
                    para6: "6. Continuing college practice and providing awareness to the people by organizing the exhibition and seminar." 
    };
    return(
        <WhyAboutLayout smileyName="why-kcc-exhibit.png" whyKccExhibitPara={whyKccExhibitPara} title="Why Kcc Exhibit - Kcc Exhibit" desc="Why Kcc Exhibit page of Kcc Exhibit" headingTitle="Why Kcc Exhibit" image="../../../static/images/why-kcc-exhibit-profile.jpg" imageAlt="why kcc exhibit image"/>
    );
}

export default WhyKccExhibit;