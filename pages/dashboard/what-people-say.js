import ShowDashboardWhatPeopleSay from '../../components/DashboardComponents/DashboardWhatPeopleSay/ShowDashboardWhatPeopleSay';
import AddDashboardWhatPeopleSay from '../../components/DashboardComponents/DashboardWhatPeopleSay/AddDashboardWhatPeopleSay';
import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';

const WhatPeopleSay = () => {
    return(
        <DashboardContainerLayout title="What People say" desc="What People Says of Dashboard">
            <DashboardMainLayout 
            tabs={[
                {
                    tab: "Show All",
                    compo: <ShowDashboardWhatPeopleSay />
                },
                {
                    tab: "Add",
                    compo: <AddDashboardWhatPeopleSay />
                },
            ]}
            />
        </DashboardContainerLayout>
    );
}

export default WhatPeopleSay;