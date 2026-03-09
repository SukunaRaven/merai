import {Link} from "react-router";
import GameCard from "../components/games/GameCard"
import Nav from "../components/layout/Nav.jsx";

export default function MinigamesPage() {
    return (
        <div>
            <Nav/>
            <main className="py-15 px-25">
                <h1 className="text-3xl font-semibold font-primary text-black-blue mb-8">
                    Minigames
                </h1>

                <div className="grid grid-cols-2 gap-6">

                    <GameCard
                        title="Galgje"
                        description="Detect AI patronen"
                    />

                    <GameCard
                        title="Memory"
                        description="Match AI gegenereerde beelden"
                    />

                    <GameCard
                        title="SWYS"
                        description="Spot What You See"
                    />

                </div>
            </main>
        </div>
    )
}