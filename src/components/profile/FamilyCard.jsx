import Button from "../ui/Button"

export default function FamilyCard({name, role, privacy, knowledge, finished}) {
    return (
        <div
            className="py-10 p-10 bg-white rounded-xl shadow-sm border border-primary flex flex-col gap-4">

            <div className="h-28 bg-gray-100 rounded-md"/>

            <h3 className="font-semibold">{name}</h3>

            <p className="text-sm font-secondary text-gray-500">
                Rol: {role}
            </p>
            <p className="text-sm font-secondary text-gray-500">
                Privacybewust: {privacy}
            </p>
            <p className="text-sm font-secondary text-gray-500">
                AI-kennis: {knowledge}
            </p>
            <p className="text-sm font-secondary text-gray-500">
                Modules voltooid: {finished}
            </p>

            <div className="flex gap-2 mt-auto">
                <Button variant="secondary">Verwijder</Button>
                <Button>Meer Info</Button>
            </div>

        </div>
    )
}