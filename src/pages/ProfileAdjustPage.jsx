import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
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
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <main className="py-15 px-50">
                <form onSubmit={handleUpdate}
                      className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-black-blue font-bold font-primary text-2xl">Bewerk profiel</h1>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-black-blue font-semibold">Gebruikersnaam:</label>
                        <input type="text"
                               id="username"
                               name="username"
                               value={formData.username || ''}
                               onChange={handleChange}
                               className="border p-1 border-gray-400 rounded"
                               required/>
                    </div>
                    <button type="submit"
                            className="rounded bg-blue text-white-blue p-2 mt-4 cursor-pointer hover:bg-blue/90">Wijzigingen
                        Opslaan
                    </button>
                </form>
                <div className="p-4 flex gap-3 mt-auto">
                    <button onClick={handleDelete}
                            className="flex-1 bg-blue text-white-blue cursor-pointer text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">
                        Verwijder Profiel
                    </button>
                    {/*<button onClick={handleDelete}*/}
                    {/*        className="flex-1 bg-blue text-white-blue cursor-pointer text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">*/}
                    {/*    Reset Profiel*/}
                    {/*</button>*/}
                </div>
            </main>
        </div>
    );
}

export default ProfileAdjustPage;
