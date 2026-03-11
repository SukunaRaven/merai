import React from 'react';

export const TransparencyCard = () => {
    const sections = [
        {
            title: "Welke persoonsgegevens ken ik?",
            description: "Dit zijn gegevens die je zelf invult of die je apparaat deelt.",
            items: [
                { info: "Je IP-adres", detail: "Zo weet ik in welke stad je bent.", icon: "📍" },
                { info: "Je e-mail", detail: "Alleen als je dit zelf invult voor een account.", icon: "📧" },
                { info: "Je klikgedrag", detail: "Ik onthoud waar je lang naar kijkt.", icon: "🖱️" }
            ],
            bgColor: "bg-blue/5",
            borderColor: "border-blue"
        },
        {
            title: "Wat weet ik NIET van jou?",
            description: "AI kan niet in je hoofd kijken. Deze dingen blijven privé.",
            items: [
                { info: "Je echte gevoelens", detail: "Ik zie dat je lacht, maar niet of je echt blij bent.", icon: "🧠" },
                { info: "Je diepste geheimen", detail: "Ik weet alleen wat je typt, niet wat je denkt.", icon: "🤫" },
                { info: "Je intentie", detail: "Ik weet dat je klikt, maar niet waarom.", icon: "❓" }
            ],
            bgColor: "bg-primary/10",
            borderColor: "border-primary"
        }
    ];

    return (
        <div className="space-y-6 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((section, idx) => (
                    <div key={idx} className={`p-6 rounded-3xl border-2 ${section.borderColor} ${section.bgColor}`}>
                        <h3 className="font-secondary font-bold text-xl text-blue-dark mb-2">{section.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                        <div className="space-y-3">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                                    <span className="text-xl">{item.icon}</span>
                                    <div>
                                        <p className="font-bold text-sm text-blue-dark">{item.info}</p>
                                        <p className="text-xs text-gray-500 leading-tight">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            <div className="p-4 bg-black-blue text-white-blue rounded-2xl flex items-center gap-4">
                <span className="text-2xl">🛡️</span>
                <p className="text-xs italic">
                    <strong>Belangrijk:</strong> Wij slaan jouw naam of mail nooit op zonder dat jij op 'toestaan' klikt.
                    De AI maakt alleen anonieme voorspellingen om je te helpen leren.
                </p>
            </div>
        </div>
    );
};