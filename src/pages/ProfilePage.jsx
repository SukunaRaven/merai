import { useState } from "react";
import AIBrainDashboard from "../components/profile/AIBrainDashboard";
import AppLayout from "../components/layout/AppLayout";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import FavoriteDetail from "../components/profile/FavoriteDetail";
import Card from "../components/ui/Card";

export default function ProfilePage() {
    const [selectedFavorite, setSelectedFavorite] = useState(null);
    const [showBrain, setShowBrain] = useState(false); // Staat voor de pop-up

    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center md:items-start gap-8">

                {/* Linkerkant: Sidebar */}
                <div className="w-full max-w-sm md:max-w-none flex flex-col items-center md:items-start mx-auto md:mx-0 md:w-64 lg:w-72 shrink-0">
                    <ProfileSidebar onSelect={setSelectedFavorite} />

                    {/* Knop om de AI Analyse te openen */}
                    <button
                        onClick={() => setShowBrain(true)}
                        className="mt-6 w-full py-3 px-4 bg-black-blue text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
                    >
                        <span>🧠</span> Bekijk Merai's Analyse
                    </button>
                </div>

                {/* Rechterkant: Content */}
                <div className="flex-1 w-full space-y-6 md:space-y-8 min-w-0">
                    {selectedFavorite ? (
                        <Card>
                            <FavoriteDetail type={selectedFavorite} />
                        </Card>
                    ) : (
                        <Card>
                            <div className="flex items-center justify-center h-40 text-gray-400 text-center px-6">
                                Klik op een categorie {window.innerWidth < 768 ? 'hierboven' : 'links'} om te zien wat Merai over je denkt.
                            </div>
                        </Card>
                    )}
                </div>
            </div>

            {/* --- DE MODAL (POP-UP) --- */}
            {showBrain && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Achtergrond overlay (klikt weg bij klik buiten modal) */}
                    <div
                        className="absolute inset-0 bg-black-blue/60 backdrop-blur-sm"
                        onClick={() => setShowBrain(false)}
                    />

                    {/* De Modal Content */}
                    <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
                        {/* Sluitknop bovenin */}
                        <button
                            onClick={() => setShowBrain(false)}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors z-10 font-bold"
                        >
                            ✕
                        </button>

                        <div className="p-6 md:p-10">
                            <AIBrainDashboard />
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}