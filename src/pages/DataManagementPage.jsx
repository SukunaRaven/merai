import AppLayout from "../components/layout/AppLayout.jsx";
import SettingsItem from "../components/ui/SettingsItem.jsx";

function DataManagementPage() {
    return (
        <div>
            <AppLayout>
                <main className="py-15 px-25">
                    <h1 className="text-3xl font-semibold font-primary text-black-blue mb-8">
                        Data beheren
                    </h1>
                    <article
                        className="p-6 rounded-3xl border max-w-7xl mx-auto mt-10 flex flex-row gap-16">
                        <section className="flex flex-col w-full">
                            <SettingsItem label="Profiel resetten" to=""/>
                            <SettingsItem label="Profiel verwijderen" to=""/>
                        </section>
                    </article>
                </main>
            </AppLayout>
        </div>
    );
}

export default DataManagementPage;