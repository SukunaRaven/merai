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
        console.log("AuthProvider mounted");
        // Check for token on mount
        const token = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');
        const role = localStorage.getItem('role');
        
        if (token) {
            // Parse role to integer if it exists, otherwise default to 0
            const parsedRole = role ? parseInt(role, 10) : 0;
            setUser({ username, role: parsedRole });
        }
        setLoading(false);
    }, []);

    const login = (token, username, role) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        setUser({ username, role: parseInt(role, 10) });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
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