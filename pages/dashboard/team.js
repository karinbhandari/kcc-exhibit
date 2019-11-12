import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';
import AddDashboardTeam from '../../components/DashboardComponents/DashboardTeam/AddDashboardTeam';
import ShowDashboardTeam from '../../components/DashboardComponents/DashboardTeam/ShowDashboardTeam';

const Team = () => {
    return(
        <DashboardContainerLayout title="Team" desc="Team of Dashboard">
            <DashboardMainLayout 
            tabs={[
                {
                    tab: "Show All",
                    compo: <ShowDashboardTeam />
                },
                {
                    tab: "Add",
                    compo: <AddDashboardTeam />
                },
            ]}
            />
        </DashboardContainerLayout>
    );
}

export default Team;