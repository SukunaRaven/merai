import {Link} from "react-router";

export default function SettingsItem({label, to = "#"}) {
    return (
        <Link to={to} className="flex justify-between items-center py-4 border-b hover:bg-gray-50 transition-colors">
            <span className="text-gray-800">{label}</span>
            <span className="text-xl text-gray-400">{">"}</span>
        </Link>
    )
}
