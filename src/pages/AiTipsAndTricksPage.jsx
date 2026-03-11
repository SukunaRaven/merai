import Nav from "../components/layout/Nav.jsx";

function AiTipsAndTricksPage() {
    return (
        <div className="bg-white-blue">
            <Nav/>
            <h1 className="text-black-blue font-bold text-center font-primary text-3xl mt-10 -mb-5">AI Tips And
                Tricks</h1>
            <main className="py-15 px-25">
                <div className="flex justify-between font-secondary gap-10 ">
                    <div className="bg-gray-400 py-10 px-20 mb-15 ml-26 rounded-xl ">LOGO van chatgpt, gemini, ofzo
                    </div>
                    <p className="text-lg text-center mt-10 mr-16">Blijf bij de bekende namen (zoals de officiële apps
                        van
                        Google
                        Gemini,
                        ChatGPT of Microsoft
                        Copilot).
                        Check altijd de reviews en kijk wie de maker is voordat je een app downloadt. Sommige deze apps
                        zijn alleen gemaakt om je data te stelen of je vast te laten zitten aan een peperduur
                        abonnement. </p>
                </div>
                <div className="flex justify-between text-sm font-medium">
                    <div className="text-center bg-white border-r-2 border-gray-200 rounded-l-xl p-7">
                        <h2 className="text-black-blue font-bold font-primary text-2xl mb-5">AI tips voor
                            tieners:</h2>
                        <p className="text-black-blue mb-4">Worstel je met een lastig onderwerp voor
                            school
                            (zoals een natuurkundeles of een geschiedenisles)? Plak de tekst in een AI en vraag:
                            "Leg
                            dit
                            concept uit in simpele taal voor een 5-jarige met een metafoor over gaming."</p>
                        <p className="text-black-blue"> Upload een foto van een kledingstuk dat
                            je
                            al
                            hebt en
                            vraag de AI om 5
                            verschillende outfits te bedenken met items die nu on-trend zijn.</p>
                    </div>
                    <div className="text-center bg-white p-7 rounded-r-xl">
                        <h2 className="text-black-blue font-bold font-primary text-2xl mb-5">AI tips voor
                            ouders:</h2>
                        <p className="text-black-blue mb-4"> Maak een foto
                            van de inhoud van je koelkast en vraag: "Welke gezonde maaltijd kan ik maken met deze
                            ingrediënten die binnen 20 minuten op tafel staat?" </p>
                        <p className="text-black-blue mb-4">
                            Heb je een boze e-mail getypt naar de gemeente of een klant? Laat AI de
                            tekst scannen: "Maak deze e-mail vriendelijker en professioneler, maar behoud de
                            kernboodschap."
                        </p>
                        <p className="text-black-blue mb-4">
                            Vergeet urenlang scrollen op Tripadvisor. Vraag: "Plan een 3-daagse
                            stedentrip naar Lissabon voor een gezin, inclusief wandelingen die niet te zwaar zijn en
                            restaurants met vegetarische opties." </p>
                        <p className="text-black-blue">
                            Gebruik AI-tools om oude, korrelige foto's van vroeger te verscherpen of in te
                            kleuren. Een geweldige manier om digitale familiealbums tot leven te wekken
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AiTipsAndTricksPage;