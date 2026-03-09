//  import Sidebar from "../components/layout/Sidebar.jsx";
import AppLayout from "../components/layout/AppLayout.jsx";
import {Link} from "react-router";
import {useState, useEffect} from "react";

const getSavedSize = () => {
    const saved = localStorage.getItem('user-font-size');
    return saved ? parseInt(saved, 10) : 16;
};
const getSavedColorMode = () => {
    return localStorage.getItem('user-color-mode') || 'none';
};

function AccessibilityPage() {
    const [size, setSize] = useState(() => getSavedSize());
    const [colorMode, setColorMode] = useState(() => getSavedColorMode());

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove('mode-protanopia', 'mode-deuteranopia', 'mode-grayscale');
        if (colorMode !== 'none') {
            root.classList.add(`mode-${colorMode}`);

            if (colorMode === 'grayscale') {
                root.style.setProperty('--colorblind-filter', 'grayscale(100%)');
            } else {
                root.style.removeProperty('--colorblind-filter');
            }
        } else {
            root.style.setProperty('--colorblind-filter', 'none');
        }
    }, [colorMode]);

    useEffect(() => {
        document.documentElement.style.setProperty('--main-font-size', `${size}px`);
    }, [size]);

    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        setSize(newSize);
        localStorage.setItem('user-font-size', newSize);
    }
    const handleColorChange = (event) => {
        const newMode = event.target.value;
        setColorMode(newMode);
        localStorage.setItem('user-color-mode', newMode);
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
                        <label htmlFor="color-mode-select" className="mb-2 mt-2">Kleurenblind modus:</label>
                        <select
                            id="color-mode-select"
                            value={colorMode}
                            onChange={handleColorChange}
                            className="p-2 border rounded-lg">
                            <option value="none">Geen (Standaard)</option>
                            <option value="grayscale">Hoog contrast (Zwart/Wit)</option>
                            <option value="protanopia">Protanopie (Rood-zwak)</option>
                            <option value="deuteranopia">Deuteranopie (Groen-zwak)</option>
                        </select>
                    </section>
                </article>
            </AppLayout>
        </>
    )
}

export default AccessibilityPage;