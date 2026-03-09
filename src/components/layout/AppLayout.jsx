import Nav from "./Nav.jsx";

export default function AppLayout({ children }) {
    return (

        <div>

            <Nav />

            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>

        </div>
    )
}