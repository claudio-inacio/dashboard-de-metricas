import TitleComponent from "../title/TitleComponent";


interface ApresentationComponentProps {
    title: string;
    description: string;
}
const ApresentationComponent = ({ title, description }: ApresentationComponentProps) => {
    return (
        <section className=" pt-4 md:pt-20 0 flex flex-col items-center justify-center">
            <TitleComponent title={title} styleClass="mb-2 md:mb-6" />
            <span className=" md:w-1/2 text-center text-gray-500 text-xl px-8">
                {description}
            </span>
        </section>
    )
}

export default ApresentationComponent;