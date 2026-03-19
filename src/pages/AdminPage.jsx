import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserTable } from '../components/admin/UserTable';
import { AiAdminInsights } from '../components/admin/AdminInsights.jsx'; // Naam aangepast
import AppLayout from "../components/layout/AppLayout.jsx";
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('insights'); // Default nu 'insights'
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                navigate('/login');
            } else if (user.role !== 1) {
                navigate('/');
            }
        }
    }, [user, loading, navigate]);

    if (loading || !user || user.role !== 1) {
        return null;
    }

    // Dummy data voor de gebruikerstabel
    const dummyUsers = [
        { id: "USR-9283", role: "Tiener", interests: ["Gaming", "AI"], confidence: 85 },
        { id: "USR-1102", role: "Ouder", interests: ["Privacy", "Beheer"], confidence: 92 },
        { id: "USR-4432", role: "Tiener", interests: ["Mode", "TikTok"], confidence: 45 },
    ];

    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto py-10 md:py-15 px-6 md:px-15 lg:px-25 bg-white-blue font-primary">
                <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h1 className="text-4xl font-secondary font-bold text-black-blue tracking-tight">Admin Control</h1>
                        <p className="text-blue-600 font-bold">Beheer systeem-intelligentie en gebruikersactiviteit.</p>
                    </div>

                    <nav className="inline-flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
                        <button
                            onClick={() => setActiveTab('insights')}
                            className={`px-6 py-2 rounded-xl font-bold transition text-sm ${activeTab === 'insights' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            AI Inzichten
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`px-6 py-2 rounded-xl font-bold transition text-sm ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            Gebruikers
                        </button>
                    </nav>
                </header>

                {activeTab === 'insights' ? (
                    <div className="animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-black-blue">Systeem-activiteit</h2>
                            <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 uppercase tracking-widest">
                                Live Database Status
                            </span>
                        </div>

                        {/* De nieuwe component met fallback data */}
                        <AiAdminInsights />

                        <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-secondary font-bold mb-3 text-blue-400">Wat betekenen deze inzichten?</h3>
                                <p className="text-sm opacity-80 leading-relaxed max-w-2xl">
                                    Deze data toont de "verwerkingskracht" van Merai. We kijken hier niet naar fouten,
                                    maar naar de hoeveelheid informatie die de AI succesvol heeft omgezet in
                                    gebruikerskenmerken. Dit helpt ons begrijpen hoe actief het algoritme leert van
                                    interacties zoals YouTube-geschiedenis en zoekopdrachten.
                                </p>
                            </div>
                            {/* Subtiel achtergrond detail */}
                            <div className="absolute right-[-20px] bottom-[-20px] text-9xl opacity-10 select-none">📊</div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-black-blue">Geanonimiseerde Gebruikers</h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Zoek op ID of interesse..."
                                    className="pl-4 pr-10 py-2 rounded-full border border-gray-200 text-sm outline-none focus:border-blue-600 w-64 transition-all"
                                />
                                <span className="absolute right-3 top-2.5 opacity-30 text-xs">🔍</span>
                            </div>
                        </div>
                        <UserTable users={dummyUsers} />
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default AdminDashboard;