import React, { useState, useEffect } from 'react';
import { aiService } from '../../fetches/AiFetch'; // Zorg dat dit pad klopt

// --- FALLBACK DATA ---
const FALLBACK_USERS = [
    { id: "USR-BETA-001", role: "Tiener", interests: ["Gaming", "Lo-fi", "Skating"], confidence: 89 },
    { id: "USR-BETA-002", role: "Ouder", interests: ["Privacy", "Educatie"], confidence: 94 },
    { id: "USR-BETA-003", role: "Tiener", interests: ["Anime", "Tekenen"], confidence: 35 },
    { id: "USR-BETA-004", role: "Tiener", interests: ["Voetbal", "Muziek"], confidence: 72 }
];

export const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFallback, setIsFallback] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await aiService.getUsers();

                if (response && response.length > 0) {
                    setUsers(response);
                    setIsFallback(false);
                } else {
                    throw new Error("Geen data ontvangen");
                }
            } catch (err) {
                console.warn("Database fetch mislukt, fallback data geladen.", err);
                setUsers(FALLBACK_USERS);
                setIsFallback(true);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-40 bg-white rounded-2xl border border-dashed border-gray-200">
                <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-sm text-gray-400 font-medium">Gebruikerslijst synchroniseren...</p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {/* Kleine indicator als we fallback data zien */}
            {isFallback && (
                <div className="text-[10px] bg-amber-50 text-amber-600 px-3 py-1 rounded-md border border-amber-100 font-bold uppercase tracking-wider inline-block">
                    Offline Modus: Demo Data
                </div>
            )}

            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50 text-black-blue font-secondary">
                    <tr>
                        <th className="p-4 border-b text-[11px] uppercase tracking-widest font-black opacity-50">ID (Anoniem)</th>
                        <th className="p-4 border-b text-[11px] uppercase tracking-widest font-black opacity-50">Rol</th>
                        <th className="p-4 border-b text-[11px] uppercase tracking-widest font-black opacity-50">Top Interesses</th>
                        <th className="p-4 border-b text-[11px] uppercase tracking-widest font-black opacity-50 text-center">AI Zekerheid</th>
                        <th className="p-4 border-b text-[11px] uppercase tracking-widest font-black opacity-50 text-right">Acties</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                            <td className="p-4 border-b font-mono text-[11px] text-gray-500">{user.id}</td>
                            <td className="p-4 border-b">
                                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-tighter ${
                                        user.role === 'Ouder'
                                            ? 'bg-purple-50 text-purple-600 border border-purple-100'
                                            : 'bg-blue-50 text-blue-600 border border-blue-100'
                                    }`}>
                                        {user.role}
                                    </span>
                            </td>
                            <td className="p-4 border-b font-medium text-gray-700">
                                {Array.isArray(user.interests) ? user.interests.join(', ') : 'Geen data'}
                            </td>
                            <td className="p-4 border-b">
                                <div className="flex items-center gap-3 justify-center max-w-[120px] mx-auto">
                                    <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-1000 ${
                                                user.confidence > 80 ? 'bg-green-500' :
                                                    user.confidence > 50 ? 'bg-blue-500' : 'bg-orange-500'
                                            }`}
                                            style={{ width: `${user.confidence}%` }}
                                        />
                                    </div>
                                    <span className="font-bold text-[11px] w-8 text-gray-600">{user.confidence}%</span>
                                </div>
                            </td>
                            <td className="p-4 border-b text-right">
                                <button className="text-[11px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors">
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};