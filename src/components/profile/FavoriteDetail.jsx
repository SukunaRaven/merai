// src/components/profile/FavoriteDetail.jsx
import React, { useEffect, useState } from 'react';
import { aiService } from '../../fetches/AiFetch';

export default function FavoriteDetail({ type }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // We halen de themes op voor profile 1 (of user.id)
                const result = await aiService.getThemesByProfileId(1);
                setData(result);
            } catch (err) {
                console.error("Fout bij ophalen:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [type]); // Herlaad als je op een andere categorie klikt

    if (loading) return <div className="p-10 text-center">AI graaft in de database...</div>;

    // Pak de specifieke waarde uit de database (bijv. data['food'])
    const value = data ? data[type] : "Nog geen data";

    return (
        <div className="p-6">
            <h3 className="text-xl font-bold text-blue mb-4 capitalize">
                Jouw favoriete {type.replace('_', ' ')}
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-blue/30 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1 font-bold">Merai denkt:</p>
                <p className="text-3xl font-bold text-black-blue">{value}</p>
            </div>
            <div className="mt-6 text-sm text-gray-600">
                <p className="font-bold mb-1 italic">Waarom denkt Merai dit?</p>
                <p>Op basis van je YouTube-interesses en opgeslagen profielkenmerken in onze database.</p>
            </div>
        </div>
    );
}