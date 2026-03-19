import React, { useEffect, useState } from 'react';
import { aiService } from '../../fetches/AiFetch';

// --- FALLBACK DATA ---
const DUMMY_FAVORITES = {
    food: "Italiaanse Pasta Carbonara",
    artist: "Daft Punk",
    music_genre: "Lo-fi Hip Hop",
    holiday_country: "Japan",
    movie: "Interstellar",
    color: "Emerald Green",
    animal: "Grijze Wolf",
    place: "Een rustig berghuisje"
};

export default function FavoriteDetail({ type }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Probeer de echte data op te halen
                const result = await aiService.getThemesByProfileId(1);
                setData(result);
            } catch (err) {
                console.warn(`Fout bij ophalen ${type}, fallback naar dummy data:`, err);
                // Bij een error zetten we de dummy data als state
                setData(DUMMY_FAVORITES);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [type]);

    if (loading) return <div className="p-10 text-center text-blue animate-pulse font-medium">Merai graaft in de database...</div>;

    // Pak de specifieke waarde uit de data, of gebruik de specifieke dummy-waarde als data nog null is
    const value = data ? data[type] : DUMMY_FAVORITES[type] || "Nog geen data beschikbaar";

    return (
        <div className="p-6">
            <h3 className="text-xl font-bold text-black-blue mb-4 capitalize">
                Jouw favoriete {type.replace('_', ' ')}
            </h3>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-dashed border-blue/30 text-center shadow-sm">
                <p className="text-[10px] text-blue uppercase tracking-[0.2em] mb-2 font-black">
                    Merai's Analyse
                </p>
                <p className="text-3xl font-extrabold text-black-blue tracking-tight">
                    {value}
                </p>
            </div>

            <div className="mt-8 p-4 bg-blue/5 rounded-lg border border-blue/10">
                <p className="text-xs font-bold text-blue mb-1 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full" />
                    Waarom denkt Merai dit?
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Op basis van je recente interacties, YouTube-geschiedenis en de patronen die onze AI herkent in je profielkenmerken.
                </p>
            </div>
        </div>
    );
}