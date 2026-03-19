import React from 'react';

export const AiAdminInsights = () => {
    // --- FALLBACK / DUMMY DATA ---
    // Dit bootst na wat je uit een database zou willen halen:
    // Hoeveel 'signalen' (interacties) zijn er verwerkt per categorie.
    const insights = [
        {
            topic: "Interesse Signalen",
            count: 124,
            status: "Stabiel",
            description: "Aantal herkende patronen in zoekgedrag.",
            color: "border-blue-500"
        },
        {
            topic: "YouTube Connectie",
            count: 450,
            status: "Actief",
            description: "Video-tags geanalyseerd in de laatste 30 dagen.",
            color: "border-red-500"
        },
        {
            topic: "Profiel Verrijking",
            count: 18,
            status: "Groeiend",
            description: "Veldjes in de database automatisch ingevuld door Merai.",
            color: "border-green-500"
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-black-blue">
            {insights.map((item) => (
                <div
                    key={item.topic}
                    className={`p-6 bg-white border-l-4 ${item.color} rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
                >
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400">
                            {item.topic}
                        </h4>
                        <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 uppercase">
                            {item.status}
                        </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-black-blue">
                            {item.count}
                        </span>
                        <span className="text-xs font-bold text-gray-400">Items</span>
                    </div>

                    <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                        {item.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-50">
                        <span className="text-[10px] font-bold text-blue-600 cursor-pointer hover:underline">
                            Bekijk ruwe logs →
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};