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
        const errorData = await response.json().catch(() => ({message: 'Failed to fetch minigame sessions and server response is not valid JSON.'}));
        throw new Error(errorData.message || 'Unknown error fetching minigame sessions');
    }

    return response.json();
};
