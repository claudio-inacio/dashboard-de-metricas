import { statusColorEnum } from "@/app/enum";
import { CampaignStatus } from "@/app/types/dashboardData";

interface StatusProps {
    status: CampaignStatus;
}


const StatusComponent = ({ status }: StatusProps) => {

    return (
        <div
            style={{ minWidth: '100px', width: '100px' }}
            className={`text-center  py-3 text-white ${statusColorEnum[status]}`}
        >
            {status.toUpperCase()}

        </div >
    )
}

export default StatusComponent;