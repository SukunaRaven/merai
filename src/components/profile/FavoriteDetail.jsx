import Button from "../ui/Button"

export default function FavoriteDetail({ type }) {

    const mockData = {
        "Favoriete Eten": {
            result: "Friet", // DB: user_preferences.favorite_food
            confidence: 82, // DB: ai_predictions.food_confidence
            sources: [
                {
                    game: "Galgje",
                    impact: 72 // DB: game_results.galgje_score
                },
                {
                    game: "Memory",
                    impact: 83 // DB: game_results.memory_score
                },
                {
                    game: "Zeg Wat Je Ziet",
                    impact: 94 // DB: game_results.swys_score
                }
            ]
        }
    }

    const data = mockData[type]

    if (!data) {
        return <p>Geen data beschikbaar</p>
    }

    return (
        <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
                {type}
            </h2>

            <div className="text-lg">
                Ik denk dat jouw favoriet is:
            </div>

            <div className="text-3xl font-bold text-blue">
                {data.result}
            </div>

            <div className="text-sm text-gray-500">
                Zekerheid: {data.confidence}%
            </div>

            <div className="space-y-4 pt-4">

                <h3 className="font-medium">
                    Hoe heb ik dit geleerd?
                </h3>

                {data.sources.map((source) => (

                    <div key={source.game}>

                        <div className="flex justify-between text-sm">
                            <span>{source.game}</span>
                            <span>{source.impact}%</span>
                        </div>

                        <div className="w-full h-2 bg-gray-200 rounded-full">

                            <div
                                className="h-full bg-blue rounded-full"
                                style={{ width: `${source.impact}%` }}
                            />

                        </div>

                    </div>

                ))}

            </div>

            <div className="pt-6 flex gap-3">

                <Button variant="secondary">
                    Dit klopt niet
                </Button>

                <Button>
                    Klopt!
                </Button>

            </div>

        </div>
    )
}