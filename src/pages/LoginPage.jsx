import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../fetches/UserFetch.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();
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
            const data = await loginUser(credentials);
            login(data.token, data.user.username);

            console.log("Login succesvol!", data);
            alert("Welkom terug, " + data.user.username + "!");
            navigate("/");
        } catch (error) {
            console.error("Login mislukt:", error);
            alert("Login mislukt: " + error.message);
        }
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <main className="py-15 px-50 flex justify-center items-center">
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
        </div>
    );
}

export default LoginPage;