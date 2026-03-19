import {Link} from "react-router-dom";

export default function SettingsItem({label, to = "#"}) {
    return (
        <Link to={to}
              className="flex justify-between items-center py-4 border-b border-gray-300 hover:bg-gray-50 transition-colors">
            <span className="text-blue-dark">{label}</span>
            <span className="text-xl text-gray-400">{">"}</span>
        </Link>
    )
}
