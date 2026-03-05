export default function AppLayout({ children }) {
    return (
        <div className="flex h-screen bg-white-blue">

            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>

        </div>
    )
}