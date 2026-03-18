import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {deleteProfile, fetchUserProfile, updateUsername} from "../fetches/UserFetch.jsx";

function ProfileAdjustPage() {

    const [formData, setFormData] = useState({
        id: '',
        username: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const data = await fetchUserProfile();
                const currentUserId = localStorage.getItem('userId');

                const user = Array.isArray(data)
                    ? data.find(u => String(u.id) === String(currentUserId))
                    : data;
                if (user) {
                    setFormData({
                        id: user.id,
                        username: user.username
                    });
                }
            } catch (error) {
                console.error("Fout:", error);
            }
        };
        loadUserData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUsername(formData.id, {username: formData.username});
            alert("Gebruikersnaam succesvol gewijzigd!");
            navigate("/profile");
        } catch (error) {
            alert("Fout bij het bijwerken: " + error.message);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!window.confirm("Weet je zeker dat je je profiel wilt verwijderen?")) return;

        try {
            await deleteProfile(formData.id);

            localStorage.removeItem('authToken');
            localStorage.removeItem('userId');
            alert("Profiel succesvol verwijderd!");
            navigate("/create");
        } catch (error) {
            alert("Fout bij het verwijderen: " + error.message);
        }
    };
    return (
        <div className="bg-white-blue min-h-screen">
            <main className="max-w-4xl mx-auto py-10 md:py-15 px-4 sm:px-10 md:px-20 lg:px-40">

                <Link to={`/settings`}
                      className="inline-flex items-center py-4 text-black-blue hover:underline transition-all">
                    ← Terug naar instellingen
                </Link>

                <form onSubmit={handleUpdate}
                      className="flex flex-col gap-4 p-6 md:p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Bewerk profiel</h1>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-black-blue font-semibold">
                            Gebruikersnaam:
                        </label>
                        <input type="text"
                               id="username"
                               name="username"
                               value={formData.username || ''}
                               onChange={handleChange}
                               className="border p-2 border-gray-300 rounded focus:ring-2 focus:ring-blue focus:outline-none transition-all"
                               required/>
                    </div>

                    <button type="submit"
                            className="w-full md:w-max px-8 py-2.5 bg-blue text-white rounded font-medium cursor-pointer hover:bg-blue-dark transition-colors mt-2">
                        Wijzigingen Opslaan
                    </button>
                </form>

                <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">Gevaarlijke acties</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button onClick={handleDelete}
                                className="flex-1 bg-red-500 text-white cursor-pointer text-center py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Verwijder Profiel
                        </button>
                        {/*<button onClick={handleDelete}*/}
                        {/*        className="flex-1 bg-blue text-white-blue cursor-pointer text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">*/}
                        {/*    Reset Profiel*/}
                        {/*</button>*/}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProfileAdjustPage;
