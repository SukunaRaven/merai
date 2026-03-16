import { useAuth } from "../../context/AuthContext.jsx";

export default function ProfileSidebar({ onSelect }) {
    const { user } = useAuth();

    const items = [
        "Favoriete Eten",
        "Favoriete Artiest",
        "Favoriete Muziek Genre",
        "Favoriete Plek",
        "Favoriete Land",
        "Favoriete Spel",
        "Favoriete Spel Genre"
    ];

    return (
        <aside className="w-72 bg-white rounded-xl border p-6">
            <div className="flex flex-col items-center mb-6">
                <img
                    src="/placeholder-avatar.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                />
                <p className="text-sm text-gray-500">
                    @{user ? user.username : "Gebruikersnaam"}
                </p>
            </div>
            <nav className="space-y-2">
                {items.map(item => (
                    <button
                        key={item}
                        onClick={() => onSelect(item)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-light"
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </aside>
    );
}