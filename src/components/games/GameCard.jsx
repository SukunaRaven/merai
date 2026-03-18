import {Link} from "react-router-dom";

export default function GameCard({title, description, to, toMulti}) {
    return (
        <div className="bg-white rounded-xl border p-5 flex flex-col gap-4">

            <div className="h-28 bg-gray-100 rounded-md"/>

            <h3 className="font-semibold">{title}</h3>

            <p className="text-sm font-secondary text-gray-500">
                {description}
            </p>

            <div className="flex gap-2 mt-auto">
                <Link to={to}
                      className="flex-1 bg-gray-200 text-gray-800 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    Solo
                </Link>
                {toMulti ? (
                    <Link to={toMulti}
                          className="flex-1 bg-blue text-white-blue text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">
                        Multi
                    </Link>
                ) : (
                    <button disabled
                            className="flex-1 bg-gray-100 text-gray-400 text-center py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed">
                        Multi
                    </button>
                )}
            </div>
        </div>
    )
}