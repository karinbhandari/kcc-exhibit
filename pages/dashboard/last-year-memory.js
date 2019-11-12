import DashboardContainerLayout from '../../components/DashboardComponents/DashboardContainerLayout/DashboardContainerLayout';
import ShowLastYearMemory from '../../components/DashboardComponents/LastYearMemory/ShowLastyearMemory';

const LastYearMemory = () => {
    return(
        <DashboardContainerLayout title="Last Year Memory" desc="Last Year Memory of Dashboard">
            <ShowLastYearMemory />
        </DashboardContainerLayout>
    );
}

export default LastYearMemory;