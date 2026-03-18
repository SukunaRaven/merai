import AppLayout from "../components/layout/AppLayout.jsx";
import FamilyCard from "../components/profile/FamilyCard"
import {Link} from "react-router-dom";

function FamilyPage() {
    return (
        <div>
            <AppLayout>
                <main className="max-w-7xl mx-auto py-15 px-25">

                    <Link to={`/settings`}
                          className="flex justify-between items-center py-4 text-black-blue">Terug
                    </Link>

                    <div
                        className="flex flex-col gap-2 py-10 p-10 bg-white rounded-xl shadow-sm border border-gray-100">
                        <h1 className="text-3xl font-semibold font-primary text-black-blue mb-8">
                            Gezinsleden
                        </h1>

                        <div className="grid grid-cols-2 gap-6">

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