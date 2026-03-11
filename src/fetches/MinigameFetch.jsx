const API_URL = 'http://145.24.237.168:8000';

export const fetchMinigames = async () => {
    const response = await fetch(`${API_URL}/minigames`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Failed to fetch minigames and server response is not valid JSON.'}));
        throw new Error(errorData.message || 'Unknown error fetching minigames');
    }

    return response.json();
};
