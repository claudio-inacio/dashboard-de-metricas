


type CampaignStatusFilterButtonProps = {
    isActive: boolean;
    nameButton: string
    handlefunction: () => void;
};
export default function CampaignStatusFilterButton({
    isActive,
    nameButton,
    handlefunction,
}: CampaignStatusFilterButtonProps) {
    return (
        <button
            onClick={() => handlefunction()}
            className={`px-4 py-2 cursor-pointer rounded-lg text-sm font-semibold transition
        ${isActive
                    ? "bg-white text-blue-600 shadow border border-blue-200"
                    : "text-gray-500 hover:text-gray-700"
                }`}
        >

            {nameButton}
        </button>

    );
}