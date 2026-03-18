import AppLayout from "../components/layout/AppLayout.jsx";
import {Link} from "react-router-dom";
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

        // Remove all possible colorblind classes before adding the new one
        root.classList.remove('mode-protanopia', 'mode-deuteranopia', 'mode-tritanopia', 'mode-achromatopsia');

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
    };

    const handleColorChange = (event) => {
        const newMode = event.target.value;
        setColorMode(newMode);
        localStorage.setItem('user-color-mode', newMode);
    };

    return (
        <>
            <AppLayout>
                <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
                    <main className="py-15 px-100">
                        <Link to={`/settings`}
                              className="flex justify-between items-center py-4 text-black-blue">Terug
                        </Link>
                        <div
                            className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                            <label htmlFor="font-size-select" className="mb-2 mt-2 text-black-blue">
                                Lettergrootte aanpassen:
                            </label>
                            <select id="font-size-select"
                                    value={size}
                                    onChange={handleSizeChange}
                                    className="p-2 border border-gray-300 rounded-lg text-blue-dark">
                                <option value="12">Kleiner (12px)</option>
                                <option value="16">Standaard (16px)</option>
                                <option value="20">Groter (20px)</option>
                                <option value="24">Extra groot (24px)</option>
                            </select>
                            <label htmlFor="color-mode-select" className="mb-2 mt-2 text-black-blue">Kleurenblind
                                modus:</label>
                            <select
                                id="color-mode-select"
                                value={colorMode}
                                onChange={handleColorChange}
                                className="p-2 border border-gray-300 rounded-lg text-blue-dark">
                                <option value="none">Geen (Standaard)</option>
                                <option value="grayscale">Hoog contrast (Zwart/Wit)</option>
                                <option value="protanopia">Protanopie (Rood-zwak)</option>
                                <option value="deuteranopia">Deuteranopie (Groen-zwak)</option>
                            </select>
                        </div>
                    </main>
                </div>
            </AppLayout>
        </>
    )
}

export default AccessibilityPage;