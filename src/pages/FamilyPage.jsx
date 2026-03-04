import Nav from "../components/layout/Nav.jsx";
import AppLayout from "../components/layout/AppLayout.jsx";
import FamilyCard from "../components/profile/FamilyCard"

function FamilyPage() {
    return (
        <div>
            <Nav/>
            <AppLayout>
                <main className="py-15 px-25">
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
                </main>
            </AppLayout>
        </div>
    )
}

export default FamilyPage;