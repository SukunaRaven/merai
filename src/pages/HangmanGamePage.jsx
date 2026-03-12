import Nav from "../components/layout/Nav.jsx";
import {useState, useEffect} from "react";
import {fetchMinigameSessionById, fetchMinigameSessions, submitGuess} from "../fetches/MinigameSessionFetch.jsx";

function HangmanGamePage() {
    const [gameState, setGameState] = useState(null);
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const startGame = async () => {
    //         try {
    //             const data = await fetchMinigameSessions(3, 1);
    //             setGameState(data.state);
    //         } catch (e) {
    //             setError("Kon game niet starten" + e);
    //         }
    //     };
    //     startGame();
    // }, []);
    useEffect(() => {
        const initGame = async () => {
            try {
                const savedId = localStorage.getItem('hangman_session_id');

                if (savedId) {
                    // Er is nog een spel bezig, haal de huidige status op via ID
                    const data = await fetchMinigameSessionById(savedId);
                    setGameState(data.state);
                } else {
                    // Geen spel bezig, start een gloednieuwe sessie
                    const data = await fetchMinigameSessions(1, 1);
                    setGameState(data.state);
                    // Sla de ID op zodat we bij een refresh hierboven uitkomen
                    localStorage.setItem('hangman_session_id', data.state.sessionId);
                }
            } catch (e) {
                // Als de opgeslagen sessie verlopen is of niet bestaat,
                // is het slim om de localStorage leeg te maken zodat de volgende keer een nieuwe game start.
                localStorage.removeItem('hangman_session_id');
                setError("Kon de game niet laden: " + e.message);
            }
        };
        initGame();
    }, []);

    const handleGuess = async (e) => {
        e.preventDefault();
        if (!input || !gameState) return;

        const guessData = input.length > 1 ? {word: input} : {letter: input.toLowerCase()};

        try {
            const data = await submitGuess(gameState.sessionId, guessData);
            setGameState(data.state);
            setInput("");
        } catch (e) {
            alert("Fout bij het raden" + e);
        }
    };

    if (error) return <div className="text-red-500 p-10">{error}</div>;
    if (!gameState) return <div className="p-10 text-center">Laden...</div>;

    return (<div className="bg-white-blue min-h-screen">
            <Nav/>
            <main className="py-15 px-25">
                <h1 className="text-black-blue font-bold text-center font-primary text-3xl mb-8">Galgje</h1>

                <div className="flex justify-between gap-4 text-sm mt-10 font-medium">
                    <div className="flex-1 text-center bg-white rounded-xl p-7 shadow-sm">
                        <div className="text-2xl font-bold">
                            Fouten: {gameState.wrongCount} / {gameState.maxWrong}
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {gameState.wrongLetters.map(l => (
                                <span key={l} className="bg-red-100 text-red-600 px-2 py-1 rounded uppercase">{l}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex-2 text-center bg-white border-l-2 border-gray-200 p-7 rounded-xl shadow-sm">
                        <div className="text-4xl mb-10">
                            {gameState.maskedWord}
                        </div>

                        <form onSubmit={handleGuess} className="flex flex-col items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="border-b-2 border-black-blue outline-none text-center text-2xl w-full max-w-xs mb-4"
                                placeholder="..."
                                autoFocus
                            />
                            <button type="submit" className="bg-black-blue text-white px-8 py-2 rounded-full font-bold">
                                Verstuur
                            </button>
                        </form>
                    </div>
                </div>

                {gameState.status !== "active" && (
                    <div className="text-center mt-10 p-10 bg-black-blue text-white rounded-xl">
                        <h2 className="text-3xl font-bold mb-4">
                            {gameState.status === "won" ? "Gewonnen!" : "Helaas, verloren... "}
                        </h2>
                    </div>
                )}
            </main>
        </div>
    )
}

export default HangmanGamePage;