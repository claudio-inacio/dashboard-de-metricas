"use client";
import Button from "../button/Button";



interface ErrorModalProps {
    open: boolean;
    title?: string;
    message: string;
    onClose: () => void;
}

const ModalErrorInfo = ({ open, title = "Erro", message, onClose }: ErrorModalProps) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                        <span className="text-red-600 text-2xl font-bold">!</span>
                    </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                    {title}
                </h2>

                <p className="text-gray-500 text-sm text-center mt-2">
                    {message}
                </p>

                <div className="flex justify-center mt-6">
                    <Button buttontitle="Entendido" handleFunction={onClose} color="error" disabled={false} />

                </div>

            </div>
        </div>
    );
};

export default ModalErrorInfo;