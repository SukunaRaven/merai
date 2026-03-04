export default function AppLayout({ sidebar, children }) {
    return (
        <div className="flex h-screen bg-white-blue">

            <aside className="w-72 border-r border-gray-200 bg-white">
                {sidebar}
            </aside>

            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>

        </div>
    )
}