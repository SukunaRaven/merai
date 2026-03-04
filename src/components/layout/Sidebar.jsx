export default function Sidebar() {
    return (
        <div className="p-6 space-y-6">

            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary" />
                <p className="mt-3 font-semibold">Naam</p>
                <p className="text-sm text-gray-500">@Gebruikersnaam</p>
            </div>

            <nav className="space-y-2">

                <SidebarItem label="Favoriete Eten" />
                <SidebarItem label="Favoriete Artiest" />
                <SidebarItem label="Favoriete Muziek Genre" />
                <SidebarItem label="Favoriete Plek" />
                <SidebarItem label="Favoriete Land" />
                <SidebarItem label="Favoriete Spel" />
                <SidebarItem label="Favoriete Spel Genre" />

            </nav>

            <div className="pt-6 border-t">
                <SidebarItem label="AI Tips & Tricks" />
                <SidebarItem label="Account Settings" />
            </div>

        </div>
    )
}

function SidebarItem({ label }) {
    return (
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[var(--color-white-blue)]">
            {label}
        </button>
    )
}