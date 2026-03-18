import {useEffect, useState} from "react";
import GameCard from "../components/games/GameCard.jsx";
import {fetchMinigames} from "../fetches/MinigameFetch.jsx";

export default function MinigamesPage() {
    const [minigames, setMinigames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMinigames = async () => {
            try {
                setLoading(true);
                const data = await fetchMinigames();
                setMinigames(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getMinigames();
    }, []);

    return (
        <div className="bg-white-blue min-h-screen">
            <main className="py-15 px-25">
                <h1 className="text-3xl font-bold font-primary text-black-blue mb-8">
                    Minigames
                </h1>

                {loading && <p>Loading games...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {minigames.map((game) => {
                            const isHangman = game.name.toLowerCase().includes("galgje") || game.name.toLowerCase().includes("hangman");
                            return (
                                <GameCard
                                    key={game.id}
                                    title={game.name}
                                    description={game.description}
                                    to={isHangman ? "/minigames/hangman" : "/minigames/not-available"}
                                    toMulti={isHangman ? "/minigames/hangman/multiplayer" : null}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}