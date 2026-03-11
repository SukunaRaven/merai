import SettingsItem from "../components/ui/SettingsItem.jsx";
import AppLayout from "../components/layout/AppLayout.jsx";

function SettingsPage() {
    return (
        <>
            <AppLayout>
                <article
                    className="p-6 rounded-3xl border max-w-7xl mx-auto mt-10 flex flex-row gap-16">
                    <section className="flex flex-col w-full">
                        <h2 className="text-3xl font-bold mb-4">Instellingen</h2>
                        <SettingsItem label="Profiel bewerken" to="/settings/profileadjust"/>
                        <SettingsItem label="Gezinsleden beheren" to="/settings/family"/>
                        <SettingsItem label="Privacyvoorkeuren" to="/settings/privacy"/>
                        <SettingsItem label="Toegankelijkheid" to="/settings/accessibility"/>
                        <SettingsItem label="Data beheren" to="/settings/DataManagement"/>
                    </section>
                </article>
            </AppLayout>
        </>
    )
}

export default SettingsPage;