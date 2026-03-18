import React, { useEffect, useState } from 'react';
import { aiService } from '../../fetches/AiFetch';

const AiProfileView = ({ userId = 1 }) => { // Default op ID 1 om te testen
    const [themes, setThemes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                // We roepen de service aan met de ID
                const data = await aiService.getThemesByUserId(userId);
                setThemes(data);
            } catch (err) {
                setError("Geen data gevonden in de database voor ID: " + userId);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            loadData();
        }
    }, [userId]);

    if (loading) return <div className="p-10 text-center">Data ophalen voor User {userId}...</div>;
    if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 font-primary">
            <h2 className="text-2xl font-bold mb-6 text-black-blue border-b pb-4">
                Database Profiel (User ID: {userId})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ThemeItem label="Film" value={themes?.movie} icon="🎬" />
                <ThemeItem label="Genre" value={themes?.movie_genre} icon="🎞️" />
                <ThemeItem label="Artiest" value={themes?.artist} icon="🎤" />
                <ThemeItem label="Muziek" value={themes?.music_genre} icon="🎵" />
                <ThemeItem label="Eten" value={themes?.food} icon="🍕" />
                <ThemeItem label="Kleur" value={themes?.color} icon="🎨" />
                <ThemeItem label="Land" value={themes?.holiday_country} icon="🌍" />
                <ThemeItem label="Stijl" value={themes?.clothing_style} icon="👔" />
            </div>
        </div>
    );
};

const ThemeItem = ({ label, value, icon }) => (
    <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
        <p className="text-[10px] uppercase font-bold text-blue tracking-widest mb-1">{label}</p>
        <p className="text-gray-800">{icon} {value || "Onbekend"}</p>
    </div>
);

export default AiProfileView;