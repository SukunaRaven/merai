import GameCard from "../components/games/GameCard"

export default function MiniGames() {
    return (
        <div>

            <h1 className="text-3xl font-semibold mb-8">
                Minigames
            </h1>

            <div className="grid grid-cols-2 gap-6">

                <GameCard
                    title="Galqje"
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

        </div>
    )
}