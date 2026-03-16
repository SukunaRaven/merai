const API_URL = 'http://145.24.237.168:8000';

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Login failed and server response is not valid JSON.'}));
        throw new Error(errorData.message || 'Unknown login error');
    }

    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Account creation failed and server response is not valid JSON.'}));
        throw new Error(errorData.message || 'Unknown account creation error');
    }

    return response.json();
};

export const fetchUserProfile = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        throw new Error('No auth token found');
    }

    // Pas dit endpoint aan als je backend een andere URL gebruikt voor het ophalen van de eigen profielgegevens
    // Veel API's gebruiken /users/me of /me. Als je backend dit niet ondersteunt, moet je wellicht eerst de ID decoderen of opslaan.
    const response = await fetch(`${API_URL}/users/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` // Stuur de token mee in de header
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({message: 'Failed to fetch user profile.'}));
        throw new Error(errorData.message || 'Unknown error fetching profile');
    }

    return response.json();
};
