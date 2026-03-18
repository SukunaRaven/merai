import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserTable} from '../components/admin/UserTable';
import {AccuracyStats} from '../components/admin/AccuracyStats';
import AppLayout from "../components/layout/AppLayout.jsx";
import {useAuth} from '../context/AuthContext';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('stats');
    const {user, loading} = useAuth();
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

    // Dummy data voor frontend weergave
    const dummyUsers = [
        {id: "USR-9283", role: "Tiener", interests: ["Gaming", "AI"], confidence: 85},
        {id: "USR-1102", role: "Ouder", interests: ["Privacy", "Beheer"], confidence: 92},
        {id: "USR-4432", role: "Tiener", interests: ["Mode", "TikTok"], confidence: 45},
    ];

    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto py-15 px-25 bg-white-blue p-8 font-primary">
                <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h1 className="text-4xl font-secondary font-bold text-blue-dark">Admin Control</h1>
                        <p className="text-blue font-bold">Monitor de AI-nauwkeurigheid en gebruikersprofielen.</p>
                    </div>

                    <nav className="inline-flex bg-white p-1 rounded-2xl shadow-inner border border-blue-light/20">
                        <button
                            onClick={() => setActiveTab('stats')}
                            className={`px-6 py-2 rounded-xl font-bold transition ${activeTab === 'stats' ? 'bg-blue text-white' : 'text-blue-dark hover:bg-blue-light/10'}`}
                        >
                            Foutmarges
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`px-6 py-2 rounded-xl font-bold transition ${activeTab === 'users' ? 'bg-blue text-white' : 'text-blue-dark hover:bg-blue-light/10'}`}
                        >
                            Gebruikers
                        </button>
                    </nav>
                </header>

                {activeTab === 'stats' ? (
                    <div className="animate-in fade-in duration-500">
                        <h2 className="text-xl font-bold mb-6 text-blue-dark">AI Voorspellingsfouten</h2>
                        <AccuracyStats/>
                        <div className="bg-blue-dark p-8 rounded-3xl text-white">
                            <h3 className="font-secondary font-bold mb-2">Waarom deze data?</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Deze statistieken komen direct voort uit de "Duimpje omlaag" feedback van tieners.
                                Een hoge foutmarge in een categorie betekent dat het AI-model daar te bevooroordeeld is
                                (stereotypes).
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-blue-dark">Geanonimiseerde Gebruikers</h2>
                            <input
                                type="text"
                                placeholder="Zoek op ID of interesse..."
                                className="px-4 py-2 rounded-full border border-blue-light/40 text-sm outline-none focus:border-blue"
                            />
                        </div>
                        <UserTable users={dummyUsers}/>
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default AdminDashboard;