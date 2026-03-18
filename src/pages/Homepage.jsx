import {Link} from "react-router-dom"; // Changed from "react-router"

function Homepage() {

    return (
        <div className="bg-white-blue flex flex-col gap-3">
            <main className="max-w-7xl mx-auto py-15 px-25">
                <div className="text-center">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Welkom bij Merai!</h1>
                    <p className="text-black-blue font-secondary">Merai is een educative tool die je op een speelse
                        manier
                        leert
                        over je eigen AI gebruik doormiddel van
                        mini games. </p>
                </div>
                <div className="p-4 flex gap-3 mt-auto">
                    <Link to={`/tipsandtricks`}
                          className="flex-1 bg-blue text-white-blue text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">
                        AI Tips en Tricks
                    </Link>
                    <Link to={`/minigames`}
                          className="flex-1 bg-blue text-white-blue text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">
                        Minigames
                    </Link>
                </div>
                <div className="p-4 flex mt-auto">
                    <Link to={`/attitudetest`}
                          className="flex-1 bg-blue-light text-black-blue text-center py-10 px-4 rounded-lg text-sm font-medium font-secondary hover:bg-blue hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">
                        Klik hier om eerst met de 0 meting te gaan
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Homepage;