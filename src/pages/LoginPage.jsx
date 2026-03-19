import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {loginUser} from "../fetches/UserFetch.jsx";
import {useAuth} from "../context/AuthContext.jsx";

function LoginPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const [showModal, setShowModal] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(credentials);
            
            if (!data.token) {
                throw new Error("Geen token ontvangen van server.");
            }

            const userRole = data.user?.role || data.role || 0;
            const userId = data.user?.id || data.id;

            login(data.token, data.user.username, userRole, userId);

            console.log("Login succesvol!", data);
            setShowModal(true);
        } catch (error) {
            console.error("Login mislukt:", error);
            alert("Login mislukt: " + error.message);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate("/");
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <main className="py-15 px-100 flex justify-center items-center">
                <form onSubmit={handleLogin}
                      className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100 w-full max-w-md">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Login</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-black-blue font-semibold">Email:</label>
                        <input type="text"
                               id="email"
                               name="email"
                               value={credentials.email}
                               onChange={handleChange}
                               className="border p-1 border-gray-400 rounded"
                               required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-black-blue font-semibold">Wachtwoord:</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={credentials.password}
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
                        <h2 className="text-2xl font-bold mb-4 text-blue">Login succesvol!</h2>
                        <p className="mb-6 text-gray-600">Welkom terug.</p>
                        <button
                            onClick={handleModalClose}
                            className="inline-block bg-blue-light text-black-blue px-6 py-2 rounded hover:bg-primary/90 transition-colors"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;