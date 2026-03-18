import AppLayout from "../components/layout/AppLayout.jsx";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

const getSavedPrivacy = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
};

function PrivacyPage() {
    // 1. Data Collection & Tracking States
    const [analytics, setAnalytics] = useState(() => getSavedPrivacy('priv-analytics', true));
    const [personalization, setPersonalization] = useState(() => getSavedPrivacy('priv-personal', false));

    // 2. Visibility & Social States
    const [visibility, setVisibility] = useState(() => localStorage.getItem('priv-visibility') || 'Public');
    const [showOnline, setShowOnline] = useState(() => getSavedPrivacy('priv-online', true));

    // Persist changes to localStorage
    useEffect(() => {
        localStorage.setItem('priv-analytics', JSON.stringify(analytics));
        localStorage.setItem('priv-personal', JSON.stringify(personalization));
        localStorage.setItem('priv-visibility', visibility);
        localStorage.setItem('priv-online', JSON.stringify(showOnline));
    }, [analytics, personalization, visibility, showOnline]);

    const ToggleItem = ({title, description, state, setState}) => (
        <div
            className="flex items-center justify-between p-4 border rounded-2xl bg-white-blue/20 mb-4 transition-all hover:border-blue">
            <div className="flex flex-col pr-4">
                <span className="font-semibold text-lg">{title}</span>
                <span className="text-sm opacity-70">{description}</span>
            </div>
            <button
                onClick={() => setState(!state)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${state ? 'bg-blue' : 'bg-gray-300'}`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${state ? 'translate-x-6' : 'translate-x-1'}`}/>
            </button>
        </div>
    );

    return (
        <AppLayout>
            <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
                <main className="py-15 px-100">
                    <Link to={`/settings`}
                          className="flex justify-between items-center py-4 text-black-blue">Terug
                    </Link>
                    <div
                        className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h1 className="text-2xl font-bold mb-6">Privacy Instellingen</h1>

                        {/* Section 1: Data & Tracking */}
                        <div className="mb-8">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-blue mb-4">1. Gegevens &
                                Tracking</h2>
                            <ToggleItem
                                title="Anonieme Analytics"
                                description="Deel gebruiksgegevens om ons te helpen de app te verbeteren."
                                state={analytics}
                                setState={setAnalytics}
                            />
                            <ToggleItem
                                title="Gepersonaliseerde Ervaring"
                                description="Sta ons toe inhoud aan te bevelen op basis van je surfgedrag."
                                state={personalization}
                                setState={setPersonalization}
                            />
                        </div>

                        {/* Section 2: Zichtbaarheid & Sociaal */}
                        <div className="mb-8">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-blue mb-4">2. Zichtbaarheid &
                                Sociaal</h2>

                            <div className="flex flex-col p-4 border rounded-2xl bg-white-blue/20 mb-4">
                                <label className="font-semibold text-lg mb-1">Profiel Zichtbaarheid</label>
                                <p className="text-sm opacity-70 mb-3">Wie kan jouw profiel en voortgang zien?</p>
                                <select
                                    value={visibility}
                                    onChange={(e) => setVisibility(e.target.value)}
                                    className="p-2 border rounded-lg bg-white outline-none focus:border-blue"
                                >
                                    <option value="Public">Familie</option>
                                    <option value="Private">Privé (Alleen ik)</option>
                                </select>
                            </div>

                            <ToggleItem
                                title="Online Status"
                                description="Laat anderen zien wanneer je momenteel actief bent."
                                state={showOnline}
                                setState={setShowOnline}
                            />
                        </div>

                        <button className="text-red-500 font-medium text-sm mt-4 hover:underline self-start">
                            Alle privacy-instellingen herstellen naar standaard
                        </button>
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}

export default PrivacyPage;