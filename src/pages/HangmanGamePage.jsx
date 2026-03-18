import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {fetchMinigameSessionById, fetchMinigameSessions, submitGuess} from "../fetches/MinigameSessionFetch.jsx";

function HangmanGamePage() {
    const [gameState, setGameState] = useState(null);
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const initGame = async () => {
            try {
                const savedId = localStorage.getItem('hangman_session_id');

                if (savedId) {
                    const data = await fetchMinigameSessionById(savedId);
                    setGameState(data.state);
                } else {
                    const data = await fetchMinigameSessions(1, 1);
                    setGameState(data.state);
                    localStorage.setItem('hangman_session_id', data.state.sessionId);
                }
            } catch (e) {
                localStorage.removeItem('hangman_session_id');
                setError("Kon de game niet laden: " + e.message);
            }
        };
        initGame();
    }, []);

    const handleReset = () => {
        localStorage.removeItem('hangman_session_id');
        window.location.reload();
    };

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
            <main className="py-15 px-25">
                <div className="flex justify-between items-center -mt-10 mb-5">
                    <h1 className="text-black-blue font-bold text-center font-primary text-3xl flex-1">Galgje</h1>
                </div>

                <div className="flex justify-between gap-4 text-sm mt-5 font-medium">
                    <div className="flex-1 text-center bg-white rounded-xl p-7 shadow-sm">
                        <div className="text-2xl font-bold mb-4">
                            Fouten: {gameState.wrongCount} / {gameState.maxWrong}
                        </div>
                        <div
                            className="relative w-64 h-64 mx-auto mb-6 border border-gray-100 rounded-lg overflow-hidden">                            {/*<img src='/HangmanGround.png' alt="Galgje vloer"/>*/}
                            <img src='/HangmanGround.png' alt="Galgje vloer"
                                 className="absolute inset-0 w-full h-full"/>
                            {gameState.wrongCount >= 1 &&
                                <img src='/1.png' className="absolute inset-0 w-full h-full"
                                     alt="Eerste Fout"/>}
                            {gameState.wrongCount >= 2 &&
                                <img src='/2.png' className="absolute inset-0 w-full h-full"
                                     alt="Tweede Fout"/>}
                            {gameState.wrongCount >= 3 &&
                                <img src='/3.png' className="absolute inset-0 w-full h-full"
                                     alt="Derde Fout"/>}
                            {gameState.wrongCount >= 4 &&
                                <img src='/4.png' className="absolute inset-0 w-full h-full"
                                     alt="Vierde Fout"/>}
                            {gameState.wrongCount >= 5 &&
                                <img src='/5.png' className="absolute inset-0 w-full h-full"
                                     alt="Vijfde Fout"/>}
                            {gameState.wrongCount >= 6 &&
                                <img src='/6.png' className="absolute inset-0 w-full h-full"
                                     alt="Zesde Fout"/>}
                            {gameState.wrongCount >= 7 &&
                                <img src='/7.png' className="absolute inset-0 w-full h-full"
                                     alt="Zevende Fout"/>}
                            {gameState.wrongCount >= 8 &&
                                <img src='/8.png' className="absolute inset-0 w-full h-full"
                                     alt="Achtste Fout"/>}
                            {gameState.wrongCount >= 9 &&
                                <img src='/9.png' className="absolute inset-0 w-full h-full"
                                     alt="Negende Fout"/>}
                            {gameState.wrongCount >= 10 &&
                                <img src='/10.png' className="absolute inset-0 w-full h-full"
                                     alt="Tiende Fout"/>}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {gameState.wrongLetters.map(l => (
                                <span key={l}
                                      className="bg-red-100 text-red-600 px-3 py-1 rounded-md font-bold uppercase shadow-sm">{l}</span>
                            ))}
                        </div>
                    </div>
                    <div
                        className="flex-2 text-center  bg-white border-l-2 border-gray-200 p-7 rounded-xl shadow-sm">
                        <div className="text-4xl mt-34 mb-5">
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
                            <button type="submit"
                                    className="bg-primary text-black-blue px-8 py-2 rounded-full font-bold">
                                Verstuur
                            </button>
                        </form>
                    </div>
                </div>

                {gameState.status !== "active" && (
                    <div className="text-center mt-10 p-10 bg-blue text-white rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-2">
                            {gameState.status === "won" ? "🎉 Gewonnen!" : "💀 Helaas, verloren..."}
                        </h2>
                        <button
                            onClick={handleReset}
                            className="mt-4 bg-blue-light text-white-blue px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                        > Opnieuw Spelen
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default HangmanGamePage;