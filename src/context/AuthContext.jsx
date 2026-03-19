import { createContext, useContext, useState, useEffect } from 'react';

// Define a default context value to prevent crashes if provider is missing
const defaultContextValue = {
    user: null,
    loading: true,
    login: () => console.warn("AuthContext: login called without provider"),
    logout: () => console.warn("AuthContext: logout called without provider")
};

const AuthContext = createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for token on mount
        const token = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');
        const role = localStorage.getItem('role');
        const userId = localStorage.getItem('userId');
        
        if (token) {
            // Parse role to integer if it exists, otherwise default to 0
            const parsedRole = role ? parseInt(role, 10) : 0;
            const parsedId = userId ? parseInt(userId, 10) : null;
            setUser({ username, role: parsedRole, id: parsedId });
        }
        setLoading(false);
    }, []);

    const login = (token, username, role, userId) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        localStorage.setItem('userId', userId);
        setUser({ username, role: parseInt(role, 10), id: parseInt(userId, 10) });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        setUser(null);
    };

    const value = { user, login, logout, loading };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};