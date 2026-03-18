import React, { useEffect, useState } from 'react';
import Card from "../ui/Card";
import { aiService } from '../../fetches/AiFetch';

// Ultra-compacte item weergave voor een brede layout
function WideBrainItem({ label, value, confidence, color }) {
    return (
        <div className="flex items-center gap-4 p-3 bg-gray-50/50 rounded-lg border border-gray-100">
            {/* Progress indicator (Puntje met kleur) */}
            <div className={`w-2 h-2 rounded-full shrink-0 ${color.replace('text-', 'bg-')}`} />

            <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tight leading-none mb-1">
                    {label.replace('_', ' ')}
                </p>
                <p className="text-sm font-semibold text-black-blue truncate">
                    {value || "Onbekend"}
                </p>
            </div>

            <div className={`text-xs font-mono font-bold ${color}`}>
                {Math.round(confidence)}%
            </div>
        </div>
    );
}

export default function AIBrainDashboard() {
    const [brainData, setBrainData] = useState({ confirmed: [], predictions: [], uncertain: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAndSortAiData = async () => {
            try {
                const themes = await aiService.getThemesByProfileId(1);

                const allThemes = [
                    { label: "Eten", value: themes.food, confidence: 85 },
                    { label: "Artiest", value: themes.artist, confidence: 72 },
                    { label: "Muziek", value: themes.music_genre, confidence: 78 },
                    { label: "Land", value: themes.holiday_country, confidence: 45 },
                    { label: "Film", value: themes.movie, confidence: 92 },
                    { label: "Kleur", value: themes.color, confidence: 100 },
                    { label: "Dier", value: themes.animal, confidence: 35 },
                    { label: "Plek", value: themes.place, confidence: 60 }
                ];

                setBrainData({
                    confirmed: allThemes.filter(i => i.confidence >= 95 && i.value),
                    predictions: allThemes.filter(i => i.confidence >= 55 && i.confidence < 95 && i.value),
                    uncertain: allThemes.filter(i => i.confidence < 55 || !i.value)
                });
            } catch (err) {
                console.error("Dashboard error", err);
            } finally {
                setLoading(false);
            }
        };
        loadAndSortAiData();
    }, []);

    if (loading) return <div className="h-20 flex items-center justify-center italic text-gray-400 text-sm">Data inladen...</div>;

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-end">
                <h2 className="text-xl font-bold text-black-blue">Merai's Analyse</h2>
                <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded">LIVE DATABASE FEED</span>
            </header>

            <div className="space-y-4">
                {/* Sectie 1: Wat Merai Weet (Breed kaartje) */}
                <Card className="p-5">
                    <h3 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Geverifieerd
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {brainData.confirmed.map((item) => (
                            <WideBrainItem key={item.label} {...item} color="text-green-600" />
                        ))}
                    </div>
                </Card>

                {/* Sectie 2: Wat Merai Denkt (Breed kaartje) */}
                <Card className="p-5">
                    <h3 className="text-xs font-bold text-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue rounded-full" />
                        Waarschijnlijke Interesses
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {brainData.predictions.map((item) => (
                            <WideBrainItem key={item.label} {...item} color="text-blue" />
                        ))}
                    </div>
                </Card>

                {/* Sectie 3: Onzeker (Breed kaartje) */}
                <Card className="p-5">
                    <h3 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full" />
                        Nog te analyseren
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {brainData.uncertain.map((item) => (
                            <WideBrainItem key={item.label} {...item} color="text-orange-400" />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}