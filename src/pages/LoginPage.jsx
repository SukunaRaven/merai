import Nav from "../components/layout/Nav.jsx";
import {useNavigate} from "react-router";
import {useState} from "react";

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
        e.preventDefault()

        try {
            const result = await fetch('http://145.24.237.168:8000/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            const data = await result.json();
            if (result.ok) {
                console.log("Login succesvol!", data);
                alert("Welkom terug!");
                navigate("/");
            } else {
                alert("Login mislukt: " + (data.message || "Onbekende fout"));
            }
        } catch (e) {
            console.log("Netwerkfout:", e);
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
                               className="border p-1"
                               required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-black-blue font-semibold">Wachtwoord:</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={credentials.password}
                               onChange={handleChange}
                               className="border p-1"
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