export default function SettingsItem({ label }) {
    return (
        <div className="flex justify-between items-center py-3 border-b">

            <span>{label}</span>

            <span className="text-gray-400">{">"}</span>

        </div>
    )
}