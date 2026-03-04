
interface TitleComponentProps {
    title: string;
    styleClass?: string;
}


const TitleComponent = ({ title, styleClass }: TitleComponentProps) => {
    return (
        <h1 className={`md:text-4xl text-2xl  font-bold ${styleClass}`}>
            {title}
        </h1>
    )
}

export default TitleComponent;