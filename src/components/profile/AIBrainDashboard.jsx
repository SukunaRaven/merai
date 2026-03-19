import React from 'react';
import Card from "../ui/Card";

// Simpele tekst-badges voor de bronnen (geen emoji's meer)
const SourceBadge = ({ label, active }) => (
    <div className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all flex-1 ${
        active ? "bg-white border-blue-200 shadow-sm" : "bg-gray-50 border-transparent opacity-40"
    }`}>
        <span className={`text-[10px] font-black uppercase tracking-widest ${active ? "text-blue-600" : "text-gray-400"}`}>
            {active ? "Actief" : "Uit"}
        </span>
        <span className="text-xs font-bold text-gray-700">{label}</span>
    </div>
);

export default function AIBrainDashboard() {
    // Statische data die laat zien waar de AI mee bezig is
    const observaties = [
        { titel: "Kijkpatroon", beschrijving: "Analyse van recente video-onderwerpen voltooid." },
        { titel: "Interesseveld", beschrijving: "Nieuwe voorkeuren ontdekt binnen de categorie muziek." },
        { titel: "Locatiecontext", beschrijving: "Omgevingsfactoren worden meegewogen in de aanbevelingen." },
        { titel: "Systeemstatus", beschrijving: "Alle database-koppelingen functioneren optimaal." }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-extrabold text-black-blue tracking-tight">Merai's Analyse-Centrum</h2>
                    <p className="text-sm text-gray-500 font-medium">Overzicht van jouw digitale profielopbouw</p>
                </div>
                <div className="hidden md:block">
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                        STATUS: SYNCING
                    </span>
                </div>
            </header>

            {/* Sectie 1: Data Koppelingen */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <SourceBadge label="Video's" active={true} />
                <SourceBadge label="Muziek" active={true} />
                <SourceBadge label="Zoekopdrachten" active={true} />
                <SourceBadge label="Locaties" active={false} />
            </div>

            {/* Sectie 2: Voortgangs-kaarten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-5 border-none bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Gevonden kenmerken</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black">1.248</span>
                        <span className="text-sm font-bold opacity-70">details</span>
                    </div>
                    <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-3/4" />
                    </div>
                </Card>

                <Card className="p-5 border-gray-100 bg-white">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Nauwkeurigheid</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-black-blue">88%</span>
                        <span className="text-sm font-bold text-green-500">Optimaal</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-medium italic leading-tight text-balance">
                        Merai heeft voldoende informatie om een accuraat profiel te vormen.
                    </p>
                </Card>
            </div>

            {/* Sectie 3: Het Gedachtenbulletin (Statisch) */}
            <Card className="p-6 border-none bg-slate-900 text-white">
                <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    Recente Systeemobservaties
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {observaties.map((obs, index) => (
                        <div key={index} className="border-l-2 border-slate-700 pl-4 py-1">
                            <p className="text-[10px] font-black uppercase text-blue-300 mb-0.5">{obs.titel}</p>
                            <p className="text-sm text-slate-300 leading-snug">{obs.beschrijving}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <footer className="text-center pt-2">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Veilig Verbonden met Merai Database.
                </p>
            </footer>
        </div>
    );
}