import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';
import DashboardViewNewsletter from '../../components/DashboardComponents/DashboardNewsletter/DashboardViewNewsletter';
import DashboardShowNewsletter from '../../components/DashboardComponents/DashboardNewsletter/DashboardShowNewsletter';

const Newsletters = () => {
    return(
        <DashboardContainerLayout title="Newsletters" desc="Newsletters of Dashboard">
            <DashboardMainLayout
                tabs={[
                    {
                        tab: "Show All",
                        compo: <DashboardShowNewsletter />
                    }
                ]}
            />
        </DashboardContainerLayout>
    );
}

export default Newsletters;