import React from 'react';
import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';
import UpdateLandingPage from '../../components/DashboardComponents/DashboardLandingPage/UpdateLandingPage';
import ShowLandingPage from '../../components/DashboardComponents/DashboardLandingPage/ShowLandingPage';

const LandingPage = () => {
    return(
        <DashboardContainerLayout title="Landing Page" desc="Landing Page of Dashboard">
            <DashboardMainLayout 
            tabs={[
                {
                    tab: "Show All",
                    compo: <ShowLandingPage />
                },
                {
                    tab: "Update",
                    compo: <UpdateLandingPage />
                }
            ]}
            />
        </DashboardContainerLayout>
    );
}



export default LandingPage;