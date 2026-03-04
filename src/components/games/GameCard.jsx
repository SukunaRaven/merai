import Button from "../ui/Button"

export default function GameCard({title, description}) {
    return (
        <div className="bg-white rounded-xl border p-5 flex flex-col gap-4">

            <div className="h-28 bg-gray-100 rounded-md"/>

            <h3 className="font-semibold">{title}</h3>

            <p className="text-sm font-secondary text-gray-500">
                {description}
            </p>

            <div className="flex gap-2 mt-auto">
                <Button variant="secondary">Solo</Button>
                <Button>Multi</Button>
            </div>

        </div>
    )
}