import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    createMatch,
    joinMatch,
    fetchMatchPlayers,
    startMatch,
    fetchMatchState,
    submitMatchGuess
} from "../fetches/MinigameMatchFetch.jsx";

function HangmanMultiplayerPage() {
    const navigate = useNavigate();
    const [matchInfo, setMatchInfo] = useState(null); // { match_id, join_code, user_id, is_host }
    const [players, setPlayers] = useState([]);
    const [gameState, setGameState] = useState(null);
    const [input, setInput] = useState("");
    const [joinCodeInput, setJoinCodeInput] = useState("");
    const [error, setError] = useState(null);

    // Poll for players or game state
    useEffect(() => {
        let interval;
        if (matchInfo?.match_id) {
            interval = setInterval(async () => {
                try {
                    // Always update players list
                    const playersData = await fetchMatchPlayers(matchInfo.match_id);
                    setPlayers(playersData);

                    // If game started, update state
                    if (gameState || playersData.some(p => p.status === 'active')) { // Assuming backend might not give status in players list, checking if we can fetch state
                         try {
                             const stateData = await fetchMatchState(matchInfo.match_id);
                             if (stateData.state) {
                                 setGameState(stateData.state);
                             }
                         } catch (e) {
                             // Match might not be started yet
                         }
                    }
                } catch (e) {
                    console.error("Polling error", e);
                }
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [matchInfo, gameState]);


    const handleCreateMatch = async () => {
        try {
            // Hardcoded user ID for now as auth is not fully detailed in prompt, assuming 1 for host
            // In a real app, get from auth context
            const userId = 1; 
            const data = await createMatch(3, userId); // minigame_id = 3
            setMatchInfo({
                match_id: data.match_id,
                join_code: data.join_code,
                user_id: userId,
                is_host: true
            });
        } catch (e) {
            setError("Could not create match: " + e.message);
        }
    };

    const handleJoinMatch = async () => {
        try {
            // Hardcoded user ID for player 2
            const userId = Math.floor(Math.random() * 1000) + 2; 
            const data = await joinMatch(joinCodeInput, userId);
            setMatchInfo({
                match_id: data.match_id,
                join_code: joinCodeInput,
                user_id: userId,
                is_host: false
            });
        } catch (e) {
            setError("Could not join match: " + e.message);
        }
    };

    const handleStartMatch = async () => {
        if (!matchInfo) return;
        try {
            const data = await startMatch(matchInfo.match_id, matchInfo.user_id);
            setGameState(data.state);
        } catch (e) {
            setError("Could not start match: " + e.message);
        }
    };

    const handleGuess = async (e) => {
        e.preventDefault();
        if (!input || !gameState || !matchInfo) return;

        const guessData = input.length > 1 ? {word: input} : {letter: input.toLowerCase()};

        try {
            const data = await submitMatchGuess(matchInfo.match_id, matchInfo.user_id, guessData);
            setGameState(data.state);
            setInput("");
        } catch (e) {
            alert("Fout bij het raden: " + e.message);
        }
    };

    if (error) return (
        <div className="p-10 text-center">
            <div className="text-red-500 mb-4">{error}</div>
            <button onClick={() => setError(null)} className="bg-blue text-white px-4 py-2 rounded">Terug</button>
        </div>
    );

    // Lobby View
    if (matchInfo && !gameState) {
        return (
            <div className="bg-white-blue min-h-screen p-10 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-5">Lobby</h1>
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
                    <p className="text-lg mb-2">Join Code:</p>
                    <p className="text-4xl font-mono font-bold tracking-widest mb-6">{matchInfo.join_code}</p>
                    
                    <h2 className="text-xl font-bold mb-4">Spelers:</h2>
                    <ul className="mb-6 space-y-2">
                        {players.map(p => (
                            <li key={p.id} className="bg-gray-50 p-2 rounded border border-gray-100 flex justify-between">
                                <span>{p.username || `Speler ${p.user_id}`}</span>
                                {p.is_host === 1 && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">HOST</span>}
                            </li>
                        ))}
                    </ul>

                    {matchInfo.is_host ? (
                        <button 
                            onClick={handleStartMatch}
                            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition"
                        >
                            Start Game
                        </button>
                    ) : (
                        <p className="text-gray-500 italic">Wachten op host om te starten...</p>
                    )}
                </div>
            </div>
        );
    }

    // Game View
    if (gameState) {
        return (
            <div className="bg-white-blue min-h-screen">
                <main className="py-15 px-25">
                    <h1 className="text-black-blue font-bold text-center font-primary text-3xl -mt-10 mb-5">Galgje Multiplayer</h1>
                    
                    <div className="flex justify-between gap-4 text-sm mt-5 font-medium">
                        {/* Left Panel: Hangman Image & Wrong Letters */}
                        <div className="flex-1 text-center bg-white rounded-xl p-7 shadow-sm">
                            <div className="text-2xl font-bold mb-4">
                                Fouten: {gameState.wrongCount} / {gameState.maxWrong}
                            </div>
                            <div className="relative w-64 h-64 mx-auto mb-6 border border-gray-100 rounded-lg overflow-hidden">
                                <img src='/HangmanGround.png' alt="Galgje vloer" className="absolute inset-0 w-full h-full"/>
                                {/* Simply using the count to show overlay images as in the original component */}
                                {[...Array(10)].map((_, i) => (
                                    gameState.wrongCount >= i + 1 && (
                                        <img key={i} src={`/${i + 1}.png`} className="absolute inset-0 w-full h-full" alt={`Fout ${i + 1}`} />
                                    )
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {gameState.wrongLetters.map((l, idx) => (
                                    <span key={idx} className="bg-red-100 text-red-600 px-3 py-1 rounded-md font-bold uppercase shadow-sm">
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Panel: Word & Input */}
                        <div className="flex-2 text-center bg-white border-l-2 border-gray-200 p-7 rounded-xl shadow-sm flex flex-col justify-center">
                            <div className="text-4xl mb-10 tracking-widest">
                                {gameState.maskedWord}
                            </div>

                            {gameState.status === "active" ? (
                                <form onSubmit={handleGuess} className="flex flex-col items-center">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="border-b-2 border-black-blue outline-none text-center text-2xl w-full max-w-xs mb-4"
                                        placeholder="..."
                                        autoFocus
                                    />
                                    <button type="submit" className="bg-primary text-black-blue px-8 py-2 rounded-full font-bold hover:scale-105 transition">
                                        Raad
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center p-5 bg-blue text-white rounded-xl shadow-lg">
                                    <h2 className="text-3xl font-bold mb-2">
                                        {gameState.status === "won" ? "🎉 Gewonnen!" : "💀 Verloren..."}
                                    </h2>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-4 bg-blue-light text-white-blue px-6 py-2 rounded-full font-bold"
                                    >
                                        Terug naar Menu
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Players List in Game */}
                    <div className="mt-8 bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="font-bold mb-2">Spelers in deze match:</h3>
                        <div className="flex gap-4">
                            {players.map(p => (
                                <div key={p.id} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    {p.username || `Speler ${p.user_id}`}
                                </div>
                            ))}
                        </div>
                    </div>

                </main>
            </div>
        );
    }

    // Initial View: Join or Create
    return (
        <div className="bg-white-blue min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-10 text-black-blue">Galgje Multiplayer</h1>
            
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                {/* Create Match */}
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4">Nieuwe Match</h2>
                    <p className="text-gray-600 mb-8">Start een nieuwe sessie en nodig vrienden uit met een code.</p>
                    <button 
                        onClick={handleCreateMatch}
                        className="mt-auto bg-blue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-dark"
                    >
                        Aanmaken
                    </button>
                </div>

                {/* Join Match */}
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4">Match Joinen</h2>
                    <p className="text-gray-600 mb-6">Heb je een code? Vul hem hier in om mee te doen.</p>
                    <input 
                        type="text" 
                        placeholder="CODE" 
                        className="border-2 border-gray-300 rounded-lg p-3 text-center text-2xl tracking-widest uppercase mb-4 w-full"
                        maxLength={6}
                        value={joinCodeInput}
                        onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
                    />
                    <button 
                        onClick={handleJoinMatch}
                        disabled={joinCodeInput.length < 4}
                        className="mt-auto bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 disabled:opacity-50"
                    >
                        Joinen
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HangmanMultiplayerPage;