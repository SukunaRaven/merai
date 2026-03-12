import React, { useState } from 'react';

export const AssumptionCard = ({ label, explanation, confidence, icon: Icon }) => {
    const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect'

    const marginExplanation = `Ik ben voor ${confidence}% zeker. De overige ${100 - confidence}% betekent dat ik ook naar andere signalen moet kijken of dat ik het mis kan hebben.`;

    return (
        <div className="bg-white border-2 border-blue-light/20 rounded-2xl p-5 mb-4 shadow-sm hover:border-blue transition-all">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg text-blue-dark text-2xl">
                        {Icon}
                    </div>
                    <div>
                        <h4 className="font-secondary font-bold text-blue-dark text-lg">{label}</h4>
                        <p className="text-sm text-gray-600 italic">{explanation}</p>
                    </div>
                </div>
                <div className="group relative">
                    <div className={`text-sm font-bold px-2 py-1 rounded ${confidence > 70 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {confidence}% zeker
                    </div>
                    {/* Tooltip voor de foutmarge-meter */}
                    <div className="absolute hidden group-hover:block bg-blue-dark text-white text-xs p-3 rounded-lg w-48 -left-24 top-8 z-10 shadow-xl">
                        {marginExplanation}
                    </div>
                </div>
            </div>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={() => setFeedback('correct')}
                    className={`flex-1 py-2 rounded-xl border-2 transition font-bold ${feedback === 'correct' ? 'bg-green-500 border-green-500 text-white' : 'border-gray-200 text-gray-400 hover:border-green-500 hover:text-green-500'}`}
                >
                    👍 Klopt
                </button>
                <button
                    onClick={() => setFeedback('incorrect')}
                    className={`flex-1 py-2 rounded-xl border-2 transition font-bold ${feedback === 'incorrect' ? 'bg-red-500 border-red-500 text-white' : 'border-gray-200 text-gray-400 hover:border-red-500 hover:text-red-500'}`}
                >
                    👎 Klopt niet
                </button>
            </div>

            {feedback === 'incorrect' && (
                <div className="mt-4 p-3 bg-blue-light/10 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm font-bold text-blue-dark mb-2 border-none">Waarom zit ik er naast?</p>
                    <select className="w-full p-2 text-sm rounded bg-white border border-blue-light outline-none">
                        <option>Ik deed dit maar één keer</option>
                        <option>Ik vind dit eigenlijk stom</option>
                        <option>Ik deelde mijn account met iemand anders</option>
                        <option>Anders...</option>
                    </select>
                </div>
            )}
        </div>
    );
};