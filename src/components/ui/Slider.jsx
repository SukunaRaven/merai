export default function Slider({ label, value, onChange }) {
    return (
        <div className="space-y-3">

            <p className="text-center bg-gray-200 rounded-md py-2">
                {label}
            </p>

            <div className="flex items-center gap-4">
                <span>1</span>

                <input
                    type="range"
                    min="1"
                    max="10"
                    value={value}
                    onChange={onChange}
                    className="w-full accent-blue"
                />

                <span>10</span>
            </div>

        </div>
    )
}