import {useEffect, useState} from "react";
import GameCard from "../components/games/GameCard";
import Nav from "../components/layout/Nav.jsx";
import {fetchMinigames} from "../fetches/MinigameFetch.jsx";
import SettingsItem from "../components/ui/SettingsItem.jsx";

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
                setError(null);
            } catch (error) {
                setError(error.message);
                console.error("Failed to fetch minigames:", error);
            } finally {
                setLoading(false);
            }
        };

        getMinigames();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <main className="py-15 px-25">
                <h1 className="text-3xl font-semibold font-primary text-black-blue mb-8">
                    Minigames
                </h1>

                {loading && <p>Loading games...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {minigames.map((game) => (
                            <GameCard
                                key={game._id}
                                title={game.name}
                                description={game.description}
                                to="/minigames/hangman"/>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}