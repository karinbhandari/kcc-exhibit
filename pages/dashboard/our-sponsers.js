import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';
import DashboardShowOurSponser from "../../components/DashboardComponents/DashboardOurSponser/DashboardShowOurSponser";
import DashboardAddOurSponser from "../../components/DashboardComponents/DashboardOurSponser/DashboardAddOurSponser";

const OurSponsers = () => {
    return(
        <DashboardContainerLayout title="Our Sponsers" desc="Our Sponsers of Dashboard">
            <DashboardMainLayout
                tabs={[
                    {
                        tab: "Show All",
                        compo: <DashboardShowOurSponser />
                    },
                    {
                        tab: "Add",
                        compo: <DashboardAddOurSponser />
                    }
                ]}
            />
        </DashboardContainerLayout>
    );
}

export default OurSponsers;