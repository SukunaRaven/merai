function AiTipsAndTricksPage() {
    return (
        <div className="bg-white-blue min-h-screen">
            <h1 className="text-black-blue font-bold text-center font-primary text-3xl pt-10 px-4 md:mb-0">
                AI Tips en Tricks
            </h1>

            <main className="max-w-7xl mx-auto py-10 md:py-15 px-6 lg:px-20">

                <div
                    className="flex flex-col md:flex-row items-center justify-center font-secondary gap-6 md:gap-12 mb-16">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                            <img src='/gemini-logo.png' alt="Gemini Logo" className="object-contain"/>
                        </div>
                        <p className="italic text-sm text-center mt-2 opacity-70">Gemini</p>
                    </div>

                    <p className="text-base md:text-lg text-center md:text-left max-w-2xl leading-relaxed">
                        Blijf bij de bekende namen (zoals de officiële apps van Google Gemini, ChatGPT of Microsoft
                        Copilot).
                        Check altijd de reviews en kijk wie de maker is voordat je een app downloadt.
                        Sommige apps zijn alleen gemaakt om je data te stelen of je vast te laten zitten aan een
                        peperduur abonnement.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row shadow-sm rounded-2xl overflow-hidden border border-gray-100">

                    <div
                        className="flex-1 text-center bg-white p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-gray-100">
                        <h2 className="text-black-blue font-bold font-primary text-2xl mb-6">AI tips voor tieners:</h2>
                        <div className="space-y-6 text-sm md:text-base leading-relaxed">
                            <p className="text-black-blue">
                                <strong>Schoolhulp:</strong> Worstel je met een lastig onderwerp? Plak de tekst in een
                                AI en vraag:
                                <span className="italic block mt-1">"Leg dit concept uit in simpele taal voor een 5-jarige met een metafoor over gaming."</span>
                            </p>
                            <p className="text-black-blue">
                                <strong>Style Check:</strong> Upload een foto van een kledingstuk dat je al hebt en
                                vraag de AI om 5 verschillende outfits te bedenken met items die nu on-trend zijn.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 text-center bg-white p-8 md:p-10">
                        <h2 className="text-black-blue font-bold font-primary text-2xl mb-6">AI tips voor ouders:</h2>
                        <div className="space-y-6 text-sm md:text-base leading-relaxed text-left md:text-center">
                            <p className="text-black-blue">
                                <strong>Keukenhulp:</strong> Maak een foto van je koelkast en vraag: "Welke gezonde
                                maaltijd kan ik maken met deze ingrediënten die binnen 20 minuten op tafel staat?"
                            </p>
                            <p className="text-black-blue">
                                <strong>E-mail Filter:</strong> Heb je een boze e-mail getypt? Laat AI de tekst scannen:
                                "Maak deze e-mail vriendelijker en professioneler, maar behoud de kernboodschap."
                            </p>
                            <p className="text-black-blue">
                                <strong>Reisplanner:</strong> Plan een 3-daagse stedentrip naar Lissabon voor een gezin,
                                inclusief wandelingen en vegetarische opties.
                            </p>
                            <p className="text-black-blue">
                                <strong>Herinneringen:</strong> Gebruik AI-tools om oude, korrelige foto's van vroeger
                                te verscherpen of in te kleuren.
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default AiTipsAndTricksPage;