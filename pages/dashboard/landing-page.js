import React from 'react';
import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import ShowLandingPage from '../../components/DashboardComponents/DashboardLandingPage/ShowLandingPage';

const LandingPage = () => {
    return(
        <DashboardContainerLayout title="Landing Page" desc="Landing Page of Dashboard">
            <ShowLandingPage />
        </DashboardContainerLayout>
    );
}



export default LandingPage;