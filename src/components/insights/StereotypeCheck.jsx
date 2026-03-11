import {useState} from "react";

export const StereotypeCheck = () => {
    const [selected, setSelected] = useState(null);

    const options = [
        { id: 'voetbal', label: 'Ik hou van voetbal', stereotype: 'De AI denkt nu dat je ook houdt van: Fastfood, FIFA spelen, en sportkleding kopen.' },
        { id: 'make-up', label: 'Ik hou van make-up', stereotype: 'De AI denkt nu dat je ook houdt van: Fashion influencers, shoppen, en roze producten.' }
    ];

    return (
        <div className="p-6 bg-white-blue rounded-3xl border-2 border-dashed border-blue-light">
            <h3 className="text-xl font-bold text-blue-dark mb-4 border-none">Kies één interesse:</h3>
            <div className="flex gap-4 mb-6">
                {options.map(opt => (
                    <button
                        key={opt.id}
                        onClick={() => setSelected(opt)}
                        className="bg-white px-4 py-2 rounded-full border-2 border-blue-light hover:border-blue transition font-bold"
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            {selected && (
                <div className="bg-white p-6 rounded-2xl border-2 border-blue animate-in zoom-in duration-300">
                    <p className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest border-none">Hokjes-alarm! 🚨</p>
                    <p className="text-blue-dark mb-4 border-none font-bold text-lg">{selected.stereotype}</p>
                    <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 italic border-l-4 border-blue">
                        <p className="border-none"><strong>Waarom is dit schadelijk?</strong> Als AI je in een hokje plaatst, krijg je alleen nog maar meer van hetzelfde te zien. Je ontdekt geen nieuwe dingen meer en krijgt vooroordelen voorgeschoteld.</p>
                    </div>
                </div>
            )}
        </div>
    );
};