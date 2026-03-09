function InsightBar({ title, percent, text }) {

    return (
        <div className="space-y-2">

            <div className="flex justify-between text-sm font-medium">
                <span>{title}</span>
                <span>{percent}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">

                <div
                    className="h-full bg-[var(--color-blue)] rounded-full"
                    style={{ width: `${percent}%` }}
                />

            </div>

            <p className="text-sm text-gray-500">
                {text}
            </p>

        </div>
    )
}

export default function AIInsightBars() {

    return (
        <div className="space-y-6">

            <InsightBar
                title="Galgje"
                percent={72}
                text="Op basis van je resultaten in dit spel heb ik vastgesteld dat je favoriete gerecht friet is."
            />

            <InsightBar
                title="Memory"
                percent={83}
                text="Op basis van je prestaties in dit spel heb ik vastgesteld dat je favoriete voedsel friet is."
            />

            <InsightBar
                title="Zeg Wat Je Ziet"
                percent={94}
                text="Op basis van je resultaten heb ik vastgesteld dat je favoriete gerecht friet is."
            />

            <div className="flex justify-center gap-4 pt-4">

                <button className="px-4 py-2 bg-gray-200 rounded-lg">
                    Ja
                </button>

                <button className="px-4 py-2 bg-gray-200 rounded-lg">
                    Nee
                </button>

            </div>

        </div>
    )
}