import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUser} from "../fetches/UserFetch.jsx";

function CreateAccountPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [showModal, setShowModal] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const data = await createUser(formData);

            console.log("Account succesvol aangemaakt!", data);
            setShowModal(true);
        } catch (error) {
            console.error("Registratie mislukt:", error);
            alert("Registratie mislukt: " + error.message);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate("/login");
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <main className="py-15 px-100">
                <form onSubmit={handleRegister}
                      className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Maak account aan</h1>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-black-blue font-semibold">Gebruikersnaam:</label>
                        <input type="text"
                               id="username"
                               name="username"
                               value={formData.username}
                               onChange={handleChange}
                               className="border p-1 border-gray-400 rounded"
                               required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-black-blue font-semibold">Email:</label>
                        <input type="text"
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               className="border p-1 border-gray-400 rounded"
                               required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-black-blue font-semibold">Wachtwoord:</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={formData.password}
                               onChange={handleChange}
                               className="border p-1 border-gray-400 rounded"
                               required/>
                    </div>
                    <button type="submit"
                            className="rounded bg-blue text-white-blue p-2 mt-4 cursor-pointer hover:bg-blue/90">Verzenden
                    </button>
                </form>
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
                        <h2 className="text-2xl font-bold mb-4 text-blue">Account succesvol aangemaakt!</h2>
                        <p className="mb-6 text-gray-600">Account aangemaakt! Je kunt nu inloggen.</p>
                        <button
                            onClick={handleModalClose}
                            className="inline-block bg-blue-light text-black-blue px-6 py-2 rounded hover:bg-primary/90 transition-colors"
                        >
                            Inloggen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateAccountPage;