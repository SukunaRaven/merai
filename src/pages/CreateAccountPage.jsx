import Nav from "../components/layout/Nav.jsx";
import {useState} from "react";
import {useNavigate} from "react-router";

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

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://145.24.237.168:8000/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Account succesvol aangemaakt!", data);
                alert("Account aangemaakt! Je kunt nu inloggen.");
                navigate("/login");
            } else {
                console.log("Registratie mislukt:", data.message);
            }
        } catch (e) {
            console.log("Netwerkfout:", e);
        }
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <Nav/>
            <main className="py-15 px-50">
                <form onSubmit={handleRegister}
                      className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Maak account aan</h1>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-black-blue font-semibold">Gebruikersnaam:</label>
                        <input type="text"
                               id="username"
                               name="username" // Moet exact matchen met de key in formData
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
                    {/*<div className="flex flex-col">*/}
                    {/*    <label htmlFor="role" className="text-black-blue font-semibold">Rol:</label>*/}
                    {/*    <input type="text"*/}
                    {/*           id="role"*/}
                    {/*           name="role"*/}
                    {/*           className="border p-1 border-gray-400 rounded"/>*/}
                    {/*</div>*/}
                    {/*<div className="flex flex-col">*/}
                    {/*    <label htmlFor="language" className="text-black-blue font-semibold">Taal:</label>*/}
                    {/*    <input type="text"*/}
                    {/*           id="language"*/}
                    {/*           name="language"*/}
                    {/*           className="border p-1 border-gray-400 rounded"/>*/}
                    {/*</div>*/}

                    <button type="submit"
                            className="rounded bg-blue text-white-blue p-2 mt-4 cursor-pointer hover:bg-blue/90">Verzenden
                    </button>
                </form>
            </main>
        </div>
    );
}

export default CreateAccountPage;