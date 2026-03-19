import AppLayout from "../components/layout/AppLayout.jsx";
import FamilyCard from "../components/profile/FamilyCard"
import {Link} from "react-router-dom";

function FamilyPage() {
    return (
        <div className="bg-white-blue min-h-screen">
            <AppLayout>
                <main className="max-w-7xl mx-auto py-10 md:py-15 px-4 sm:px-10 md:px-20 lg:px-25">

                    <Link to={`/settings`}
                          className="inline-flex items-center py-4 text-black-blue hover:underline transition-all">
                        ← Terug naar instellingen
                    </Link>

                    <div className="py-8 px-6 md:p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h1 className="text-2xl md:text-3xl font-semibold font-primary text-black-blue mb-6 md:mb-8">
                            Gezinsleden
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <FamilyCard
                                name="Mama"
                                role="Ouder"
                                privacy="Gemiddeld"
                                knowledge="Basis"
                                finished="3"
                            />
                            <FamilyCard
                                name="Papa"
                                role="Ouder"
                                privacy="Hoog"
                                knowledge="Laag"
                                finished="2"
                            />
                            <FamilyCard
                                name="Bas"
                                role="Tiener"
                                privacy="Gemiddeld"
                                knowledge="Laag"
                                finished="2"
                            />
                            <FamilyCard
                                name="Peter"
                                role="Tiener"
                                privacy="Laag"
                                knowledge="Gemiddeld"
                                finished="1"
                            />
                        </div>
                    </div>
                </main>
            </AppLayout>
        </div>
    )
}

export default FamilyPage;