const API_URL = 'http://145.24.237.168:8000';

export const fetchMinigameSessions = async () => {
    const response = await fetch(`${API_URL}/minigame_sessions`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Failed to fetch minigame sessions.'}));
        throw new Error(errorData.message || 'Unknown error fetching sessions');
    }

    return response.json();
};

export const fetchMinigameSessionById = async (id) => {
    const response = await fetch(`${API_URL}/minigame_sessions/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: `Failed to fetch session ${id}.`}));
        throw new Error(errorData.message || 'Unknown error fetching session');
    }

    return response.json();
};

export const submitGuess = async (id, guessData) => {
    const response = await fetch(`${API_URL}/minigame_sessions/${id}/guess`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(guessData),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Failed to submit guess.'}));
        throw new Error(errorData.message || 'Unknown error submitting guess');
    }

    return response.json();
};
