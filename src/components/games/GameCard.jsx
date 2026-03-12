import Button from "../ui/Button"
import {Link} from "react-router";


export default function GameCard({title, description, to = '#'}) {
    return (
        <div className="bg-white rounded-xl border p-5 flex flex-col gap-4">

            <div className="h-28 bg-gray-100 rounded-md"/>

            <h3 className="font-semibold">{title}</h3>

            <p className="text-sm font-secondary text-gray-500">
                {description}
            </p>

            <div className="flex gap-2 mt-auto">
                <Link to={to}
                      className="px-6 py-3 rounded-lg font-medium transition bg-gray-200 text-gray-800 hover:bg-gray-300">
                    <span>Solo</span>
                </Link>
                <Link to={to}
                      className="px-6 py-3 rounded-lg font-medium bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-dark)]"
                > <span>Multi</span>
                </Link>

            </div>

        </div>
    )
}