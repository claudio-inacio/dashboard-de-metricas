
import AnalyticTypeCard from "../analytic-type/AnalyticTypeCard";
import dashboardImage from "../../assets/img/dashboard-analytic.png";
import reportImage from "../../assets/img/reports-image.png";
import { useRouter } from "next/navigation";


const SelectAnalyticComponent = ({ }) => {
    const router = useRouter();

    const handleRedirect = (pathName: string) => {
        router.push(pathName);
    }

    return (
        <div className="flex md:flex-row flex-col gap-8  items-center justify-center flex-wrap py-12">
            <AnalyticTypeCard
                title="Dashboard Analítico"
                description="Visualize métricas e relátorios detalhados."
                image={dashboardImage}
                handleFunction={() => handleRedirect("/dashboard")}
                buttontitle="Ir para o Dashboard"                
                buttonColor="primary"
                titleColor="text-primary"
            />
            <AnalyticTypeCard
                title="Lista de Campanhas"
                description="Gerencie e visualize suas campanhas."
                image={reportImage}
                handleFunction={() => handleRedirect("/campaigns")}
                buttontitle="Ir para Campanhas"
                buttonColor="warning"
                titleColor="text-secondary"
            />
        </div>
    )
}

export default SelectAnalyticComponent;