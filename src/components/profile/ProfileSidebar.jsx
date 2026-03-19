import { useAuth } from "../../context/AuthContext.jsx";

export default function ProfileSidebar({ onSelect, selectedItem }) {
    const { user } = useAuth();

    // De 'id' moet exact gelijk zijn aan de kolomnaam in je SQL tabel 'themes'
    const menuItems = [
        { id: "food", label: "Favoriete Eten" },
        { id: "artist", label: "Favoriete Artiest" },
        { id: "music_genre", label: "Muziek Genre" },
        { id: "place", label: "Favoriete Plek" },
        { id: "holiday_country", label: "Favoriete Land" },
        { id: "movie", label: "Favoriete Film" },
        { id: "movie_genre", label: "Film Genre" }
    ];

    return (
        <aside className="w-72 bg-white rounded-xl border p-6 shadow-sm h-fit">
            <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-blue-light rounded-full flex items-center justify-center text-blue text-3xl font-bold mb-2">
                    {user?.username?.charAt(0).toUpperCase() || "U"}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                    @{user ? user.username : "Gebruiker"}
                </p>
            </div>

            <nav className="space-y-1">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            selectedItem === item.id
                                ? 'bg-blue text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}