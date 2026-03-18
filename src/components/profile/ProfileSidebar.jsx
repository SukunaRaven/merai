import {useAuth} from "../../context/AuthContext.jsx";

export default function ProfileSidebar({onSelect}) {
    const {user} = useAuth();

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
        <aside className="w-full bg-white rounded-xl shadow-sm border-2 border-blue-light p-6">
            <div className="flex flex-col items-center mb-6">
                <img
                    src="/placeholder-avatar.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <p className="text-sm text-gray-500 font-medium">
                    @{user ? user.username : "Gebruikersnaam"}
                </p>
            </div>

            <nav className="space-y-2 flex flex-col">
                {items.map(item => (
                    <button
                        key={item}
                        onClick={() => onSelect(item)}
                        className="w-full text-center md:text-left px-3 py-2 rounded-lg hover:bg-blue-light transition-colors text-sm font-medium"
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </aside>
    );
}