import ApresentationComponent from "./ApresentationComponent";
import SelectAnalyticComponent from "./SelectAnalyticComponent";

interface HomeContentProps {
    title: string;
    description: string;
}
const HomeContent = ({ title, description }: HomeContentProps) => {

    return (
        <main className="flex flex-col">
            <ApresentationComponent title={title} description={description} />
            <SelectAnalyticComponent />
        </main>
    )
}

export default HomeContent;