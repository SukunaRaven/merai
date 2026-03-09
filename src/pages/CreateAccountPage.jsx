import Nav from "../components/layout/Nav.jsx";
import {Link} from "react-router";
import {useState} from "react";

function CreateAccountPage() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the data submission
        setShowModal(true);
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <Nav/>
            <main className="py-15 px-25">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4 p-4">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-black-blue font-semibold">Username:</label>
                        <input type="text"
                               id="username"
                               name="username"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-black-blue font-semibold">Email:</label>
                        <input type="text"
                               id="email"
                               name="email"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-black-blue font-semibold">Wachtwoord:</label>
                        <input type="text"
                               id="password"
                               name="password"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role" className="text-black-blue font-semibold">Rol:</label>
                        <input type="text"
                               id="role"
                               name="role"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="language" className="text-black-blue font-semibold">Taal:</label>
                        <input type="text"
                               id="language"
                               name="language"
                               className="border p-1"/>
                    </div>

                    <button type="submit"
                            className="rounded bg-blue text-white-blue p-2 mt-4 cursor-pointer hover:bg-blue/90">Verzenden
                    </button>
                </form>
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
                        <h2 className="text-2xl font-bold mb-4 text-blue">Bedankt!</h2>
                        <p className="mb-6 text-gray-600">Je antwoorden zijn succesvol verzonden.</p>
                        <Link
                            to="/"
                            className="inline-block bg-blue-light text-black-blue px-6 py-2 rounded hover:bg-primary/90 transition-colors"
                        >
                            Terug naar Home
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateAccountPage;