// import Sidebar from "../components/layout/Sidebar.jsx";
import AppLayout from "../components/layout/AppLayout.jsx";
import {Link} from "react-router";
import {useState} from "react";

const getSavedSize = () => {
    const saved = localStorage.getItem('user-font-size');
    return saved ? parseInt(saved) : 16;
};

function AccessibilityPage() {
    const [size, setSize] = useState(getSavedSize);
    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value);
        setSize(newSize);
        document.documentElement.style.setProperty('--main-font-size', `${newSize}px`);
        localStorage.setItem('user-font-size', newSize);
    };
    return (
        <>
            <AppLayout>
                {/*<Sidebar></Sidebar>*/}
                <article
                    className="p-6 rounded-3xl border max-w-7xl mx-auto mt-10 flex flex-row gap-16">
                    <Link to={`/settings`}
                          className="flex justify-between items-center py-4">Terug
                    </Link>
                    <section className="flex flex-col w-full">
                        <label htmlFor="language-select" className="mb-2 mt-2">
                            Taal aanpassen:
                        </label>
                        <select id="language-select"
                                value={size}
                            // onChange={}
                                className="p-2 border mb-2  rounded-lg">
                            <option value="dutch">Nederlands</option>
                            <option value="english">English</option>
                        </select>

                        <label htmlFor="font-size-select" className="mb-2 mt-2">
                            Lettergrootte aanpassen:
                        </label>
                        <select id="font-size-select"
                                value={size}
                                onChange={handleSizeChange}
                                className="p-2 border rounded-lg">
                            <option value="12">Kleiner (12px)</option>
                            <option value="16">Standaard (16px)</option>
                            <option value="20">Groter (20px)</option>
                            <option value="24">Extra groot (24px)</option>
                        </select>
                    </section>
                </article>
            </AppLayout>
        </>
    )
}


export default AccessibilityPage;