const API_URL = 'http://145.24.237.168:8000';

export const createMatch = async (minigame_id, created_by_user_id) => {
    const response = await fetch(`${API_URL}/minigame-matches`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({minigame_id, created_by_user_id})
    });

    if (!response.ok) {
        throw new Error('Failed to create match');
    }

    return response.json();
};

export const joinMatch = async (join_code, user_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/join`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({join_code, user_id})
    });

    if (!response.ok) {
        throw new Error('Failed to join match');
    }

    return response.json();
};

export const fetchMatchPlayers = async (match_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/players`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch players');
    }

    return response.json();
};

export const startMatch = async (match_id, user_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/start`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id})
    });

    if (!response.ok) {
        throw new Error('Failed to start match');
    }

    return response.json();
};

export const fetchMatchState = async (match_id) => {
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/state`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch match state');
    }

    return response.json();
};

export const submitMatchGuess = async (match_id, user_id, guess) => {
    // guess can be { letter: "a" } or { word: "pasta" }
    const response = await fetch(`${API_URL}/minigame-matches/${match_id}/guess`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id, ...guess})
    });

    if (!response.ok) {
        throw new Error('Failed to submit guess');
    }

    return response.json();
};
