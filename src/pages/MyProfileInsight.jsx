import React from 'react';
import {AssumptionCard} from '../components/insights/AssumptionCard';
import {AiTimeline} from '../components/insights/AiTimeline';
import {StereotypeCheck} from '../components/insights/StereotypeCheck';
import {TransparencyCard} from '../components/insights/TransparencyCard';
import AppLayout from "../components/layout/AppLayout.jsx";


const MyProfileInzicht = () => {

    const dummyAannames = [
        {id: 1, label: "Gamer", explanation: "Je kijkt vaak video's over Minecraft.", confidence: 85},
        {id: 2, label: "Nachtuil", explanation: "Je gebruikt de app vaak na 22:00 uur.", confidence: 60}
    ];

    const dummyTimeline = [
        {timeLabel: "Gisteren 14:05", assumption: "Interesse in Mode", trigger: "Je klikte op een link over kleding."},
        {timeLabel: "Maandag 09:15", assumption: "Vroege vogel", trigger: "Je opende de module over Privacy om 07:00."}
    ];

    return (

        <AppLayout>
            <div className="max-w-7xl mx-auto py-15 px-25 space-y-12">
                {/* Introductie */}
                <section>
                    <h1 className="text-3xl font-secondary font-bold text-blue-dark">Wat denkt de AI over mij?</h1>
                    <p className="text-blue-dark/70">Hier zie je welke hokjes de computer voor jou heeft gemaakt.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">Eerlijk over AI</h2>
                    <p className="text-sm text-gray-600 mb-4 italic text-balance">
                        Het is belangrijk om te weten dat een computer alleen maar kijkt naar klikjes, niet naar wie jij
                        bent als mens.
                    </p>
                    <TransparencyCard/>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>🔍</span> Mijn Kenmerken
                    </h2>
                    {dummyAannames.map(item => (
                        <AssumptionCard
                            key={item.id}
                            label={item.label}
                            explanation={item.explanation}
                            confidence={item.confidence}
                        />
                    ))}
                </section>

                <section className="bg-white p-6 rounded-3xl shadow-sm">
                    <h2 className="text-xl font-bold mb-6">Hoe ben ik hier gekomen?</h2>
                    <AiTimeline events={dummyTimeline}/>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">Het "Hokjes" Experiment</h2>
                    <StereotypeCheck/>
                </section>

                <section className="bg-primary/20 p-6 rounded-3xl border-2 border-primary">
                    <h2 className="text-xl font-bold text-blue-dark mb-4">Beveilig je profiel</h2>
                    <ul className="space-y-3">
                        <li className="flex gap-3 items-start">
                            <span className="bg-white p-1 rounded">✅</span>
                            <p className="text-sm"><strong>Tip 1:</strong> Zet 'gepersonaliseerde advertenties' uit in
                                TikTok-instellingen.</p>
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="bg-white p-1 rounded">✅</span>
                            <p className="text-sm"><strong>Tip 2:</strong> Gebruik een bijnaam in plaats van je echte
                                naam.</p>
                        </li>
                    </ul>
                </section>
            </div>
        </AppLayout>
    );
};

export default MyProfileInzicht;