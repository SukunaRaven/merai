export const AccuracyStats = () => {
    const stats = [
        { category: "Interesses", errorMargin: 12, corrections: 45 },
        { category: "Gedrag (Nachtuil)", errorMargin: 28, corrections: 112 },
        { category: "Stereotypes", errorMargin: 45, corrections: 89 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-blue-dark">
            {stats.map(stat => (
                <div key={stat.category} className="p-6 bg-white border-b-4 border-primary rounded-2xl shadow-sm">
                    <h4 className="font-bold text-sm uppercase opacity-60 mb-2">{stat.category}</h4>
                    <div className="flex items-end justify-between">
                        <span className="text-3xl font-secondary font-bold text-blue">{stat.errorMargin}%</span>
                        <span className="text-xs font-bold text-red-500">Gem. Foutmarge</span>
                    </div>
                    <p className="mt-4 text-xs italic">Aantal keer gecorrigeerd door gebruikers: <strong>{stat.corrections}</strong></p>
                </div>
            ))}
        </div>
    );
};