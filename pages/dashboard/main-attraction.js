import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';
import DashboardAddMainAttraction from '../../components/DashboardComponents/DashboardMainAttraction/DashboardAddMainAttraction';
import DashboardShowMainAttraction from '../../components/DashboardComponents/DashboardMainAttraction/DashboardShowMainAttraction';

const DashboardMainAttraction = () => {
    return(
        <DashboardContainerLayout title="Main Attraction" desc="Main Attraction of Dashboard">
            <DashboardMainLayout 
            tabs={[
                {
                    tab: "Show All",
                    compo: <DashboardShowMainAttraction />
                },
                {
                    tab: "Add",
                    compo: <DashboardAddMainAttraction />
                }
            ]}
            />
        </DashboardContainerLayout>
    );
}

export default DashboardMainAttraction;