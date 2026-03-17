const API_URL = 'http://145.24.237.168:8000';

export const fetchThemes = async () => {
    const response = await fetch(`${API_URL}/themes`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Failed to fetch themes and server response is not valid JSON.'}));
        throw new Error(errorData.message || 'Unknown error fetching themes');
    }

    return response.json();
};
