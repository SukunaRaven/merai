import {useState} from 'react';
import {Link} from 'react-router';

function AttitudeTestPage() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the data submission
        setShowModal(true);
    };

    return (
        <div className="bg-white-blue flex flex-col gap-3 min-h-screen relative">
            <main className="py-15 px-25">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4 p-4">
                    <div className="flex flex-col">
                        <label htmlFor="question1" className="text-black-blue font-semibold">Ik geloof dat AI mijn leven
                            zal verbeteren.</label>
                        <input type="number"
                               id="question1"
                               name="question1"
                               defaultValue="0"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="question2" className="text-black-blue font-semibold">Ik geloof dat AI mijn werk
                            zal verbeteren.</label>
                        <input type="number"
                               id="question2"
                               name="question2"
                               defaultValue="0"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="question3" className="text-black-blue font-semibold">Ik denk dat ik in de
                            toekomst AI-technologie zal gebruiken.</label>
                        <input type="number"
                               id="question3"
                               name="question3"
                               defaultValue="0"
                               className="border p-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="question4" className="text-black-blue font-semibold">Ik denk dat AI-technologie
                            positief is voor de mensheid.</label>
                        <input type="number"
                               id="question4"
                               name="question4"
                               defaultValue="0"
                               className="border p-1"/>
                    </div>
                    <button type="submit"
                            className="rounded bg-blue text-white-blue p-2 mt-4 cursor-pointer hover:bg-blue/90">Verzenden
                    </button>
                </form>
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
                        <h2 className="text-2xl font-bold mb-4 text-blue">Bedankt!</h2>
                        <p className="mb-6 text-gray-600">Je antwoorden zijn succesvol verzonden.</p>
                        <Link
                            to="/"
                            className="inline-block bg-blue-light text-black-blue px-6 py-2 rounded hover:bg-primary/90 transition-colors"
                        >
                            Terug naar Home
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AttitudeTestPage;