import Nav from "../components/layout/Nav.jsx";
import {useNavigate} from "react-router";
import {useState} from "react";
import {loginUser} from "../fetches/UserFetch.jsx"; // Import the loginUser function

function LoginPage() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(credentials); // Use the centralized loginUser function

            // Assuming loginUser throws an error if response.ok is false
            localStorage.setItem('authToken', data.token);

            console.log("Login succesvol!", data);
            alert("Welkom terug!");
            navigate("/");
        } catch (error) {
            console.error("Login mislukt:", error);
            alert("Login mislukt: " + error.message);
        }
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <Nav/>
            <main className="py-15 px-25">
                <form onSubmit={handleLogin}
                      className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Login</h1>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-black-blue font-semibold">Gebruikersnaam:</label>
                        <input type="text"
                               id="username"
                               name="username"
                               value={credentials.username}
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
        </div>
    );
}

export default LoginPage;