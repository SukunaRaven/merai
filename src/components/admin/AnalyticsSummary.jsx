export const AnalyticsSummary = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-blue-light/20 rounded-2xl border-2 border-blue-light">
                <p className="text-blue-dark font-bold uppercase text-xs tracking-widest">Meeste Uitval</p>
                <h2 className="text-3xl font-secondary font-bold text-blue">Module 4</h2>
                <p className="text-sm">24% van de tieners stopt hier.</p>
            </div>

        </div>
    );
};