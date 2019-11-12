import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import DashboardMainLayout from '../../components/DashboardComponents/DashboardMainLayout/DashboardMainLayout';
import DashboardAddGallery from '../../components/DashboardComponents/DashboardGallery/DashboardAddGallery';
import DashboardShowGallery from '../../components/DashboardComponents/DashboardGallery/DashboardShowGallery';

const Gallery = () => {
    return(
        <DashboardContainerLayout title="Gallery" desc="Gallery of Dashboard">
            <DashboardMainLayout
                tabs={[
                    {
                        tab: "Show All",
                        compo: <DashboardShowGallery />
                    },
                    {
                        tab: "Add",
                        compo: <DashboardAddGallery />
                    }
                ]}
            />
        </DashboardContainerLayout>
    );
}

export default Gallery;