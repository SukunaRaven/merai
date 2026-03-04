import Card from "../ui/Card"

function BrainItem({ label, value, confidence }) {
    return (
        <div className="space-y-2">

            <div className="flex justify-between text-sm font-medium">
                <span>{label}</span>
                <span>{confidence}%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full">

                <div
                    className="h-full bg-[var(--color-blue)] rounded-full"
                    style={{ width: `${confidence}%` }}
                />

            </div>

            <p className="text-sm text-gray-500">
                {value}
            </p>

        </div>
    )
}

export default function AIBrainDashboard() {

    const confirmed = [
        { label: "Favoriete Spel", value: "Memory", confidence: 100 },
        { label: "Speeltijd", value: "Avond", confidence: 100 }
    ]

    const predictions = [
        { label: "Favoriete Eten", value: "Friet", confidence: 82 },
        { label: "Favoriete Muziek Genre", value: "Pop", confidence: 71 }
    ]

    const uncertain = [
        { label: "Favoriete Land", value: "Japan?", confidence: 45 },
        { label: "Favoriete Artiest", value: "Onbekend", confidence: 30 }
    ]

    return (
        <div className="space-y-8">

            <h2 className="text-2xl font-semibold">
                Merai's AI brein
            </h2>

            <div className="grid grid-cols-3 gap-6">

                <Card>
                    <h3 className="font-semibold mb-4">
                        Wat Merai weet
                    </h3>

                    <div className="space-y-4">

                        {confirmed.map((item) => (
                            <BrainItem key={item.label} {...item} />
                        ))}

                    </div>

                </Card>

                <Card>
                    <h3 className="font-semibold mb-4">
                        Wat Merai denkt
                    </h3>

                    <div className="space-y-4">

                        {predictions.map((item) => (
                            <BrainItem key={item.label} {...item} />
                        ))}

                    </div>

                </Card>

                <Card>
                    <h3 className="font-semibold mb-4">
                        Waar Merai onzeker over is
                    </h3>

                    <div className="space-y-4">

                        {uncertain.map((item) => (
                            <BrainItem key={item.label} {...item} />
                        ))}

                    </div>

                </Card>

            </div>

        </div>
    )
}