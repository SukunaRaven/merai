const API_URL = 'http://145.24.237.168:8000';

const getHeaders = () => {
    const token = localStorage.getItem('authToken');
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

const handleResponse = async (response, defaultMessage) => {
    if (response.status === 401) {
        throw new Error("Sessie verlopen. Log opnieuw in.");
    }
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || defaultMessage);
    }
    return response.json();
};

export const createMatch = async (minigame_id, created_by_user_id) => {
    const response = await fetch(`${API_URL}/minigame-matches`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({minigame_id, created_by_user_id})
    });
    return handleResponse(response, 'Failed to create match');
};

export const joinMatch = async (join_code, user_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/join`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({join_code, user_id})
    });
    return handleResponse(response, 'Failed to join match');
};

export const fetchMatchPlayers = async (match_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/players`, {
        method: 'GET',
        headers: getHeaders()
    });
    return handleResponse(response, 'Failed to fetch players');
};

export const startMatch = async (match_id, user_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/start`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({user_id})
    });
    return handleResponse(response, 'Failed to start match');
};

export const fetchMatchState = async (match_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/state`, {
        method: 'GET',
        headers: getHeaders()
    });
    return handleResponse(response, 'Failed to fetch match state');
};

export const submitMatchGuess = async (match_id, user_id, guess) => {
    // guess can be { letter: "a" } or { word: "pasta" }
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/guess`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({user_id, ...guess})
    });
    return handleResponse(response, 'Failed to submit guess');
};
