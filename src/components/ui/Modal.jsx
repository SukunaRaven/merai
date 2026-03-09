export default function Modal({ open, onClose, children }) {

    if (!open) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">

            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl relative">

                <button
                    className="absolute top-4 right-4 text-gray-500"
                    onClick={onClose}
                >
                    ✕
                </button>

                {children}

            </div>
        </div>
    )
}