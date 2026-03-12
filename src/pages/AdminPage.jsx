import React, { useState } from 'react';
import { ModuleListItem } from '../components/admin/ModuleListItem';
import { AnalyticsSummary } from '../components/admin/AnalyticsSummary';
import AppLayout from "../components/layout/AppLayout.jsx";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('stats'); // 'stats' of 'modules'

    return (
        <AppLayout>
            <div className="min-h-screen bg-white-blue p-6 md:p-12 font-primary">

                <header className="mb-10 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-secondary font-bold text-blue-dark">Beheerderspaneel</h1>
                        <p className="text-blue">Optimaliseer de leerervaring voor Merai-gebruikers.</p>
                    </div>
                    <nav className="flex gap-2 bg-blue-light/10 p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab('stats')}
                            className={`px-6 py-2 rounded-lg font-bold transition ${activeTab === 'stats' ? 'bg-blue text-white' : 'text-blue-dark'}`}
                        >
                            Statistieken
                        </button>
                        <button
                            onClick={() => setActiveTab('modules')}
                            className={`px-6 py-2 rounded-lg font-bold transition ${activeTab === 'modules' ? 'bg-blue text-white' : 'text-blue-dark'}`}
                        >
                            Modules
                        </button>
                    </nav>
                </header>

                {activeTab === 'stats' ? (
                    <section className="animate-in fade-in duration-500">
                        <div className="flex gap-4 mb-6">
                            <select className="p-2 rounded-lg border-2 border-blue-light bg-white outline-none focus:border-blue">
                                <option>Leeftijd: Alle</option>
                                <option>16-18 jaar</option>
                                <option>52-56 jaar</option>
                            </select>
                        </div>

                        <AnalyticsSummary />

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-light/30">
                            <h2 className="text-xl font-secondary font-bold mb-4">Foutieve Aannames per Vraag</h2>
                            {/* Hier zou een tabel of chart komen */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="w-32 text-sm font-bold">Vraag 1.2</span>
                                    <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                                        <div className="bg-blue h-full" style={{ width: '65%' }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-blue">65% Fout</span>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-secondary font-bold text-blue-dark">Leermodules</h2>
                            <button className="bg-primary text-blue-dark px-6 py-2 rounded-full font-bold hover:brightness-95 transition">
                                + Nieuwe Module
                            </button>
                        </div>
                        <div className="grid gap-2">
                            {/* Map hier over je modules vanuit de backend */}
                            <ModuleListItem
                                module={{id: 1, title: "AI Ethiek Basis", category: "Ethiek", isVisible: true}}
                                onToggleVisibility={(id) => console.log(id)}
                            />
                        </div>
                    </section>
                )}
            </div>
        </AppLayout>
    );
};

export default AdminDashboard;