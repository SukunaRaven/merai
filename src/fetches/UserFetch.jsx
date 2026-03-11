const API_URL = 'http://145.24.237.168:8000';

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, { // Make sure this endpoint is correct
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
    const response = await fetch(`${API_URL}/users`, { // Make sure this endpoint is correct
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
