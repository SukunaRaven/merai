export const AiTimeline = ({ events }) => {
    return (
        <div className="relative border-l-4 border-primary ml-4 py-8 space-y-8">
            {events.map((event, index) => (
                <div key={index} className="relative pl-8 group">

                    <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-blue rounded-full group-hover:scale-125 transition" />

                    <div className="bg-white p-4 rounded-xl border border-blue-light/30 shadow-sm hover:shadow-md transition">
                        <span className="text-xs font-bold text-blue uppercase tracking-tighter">{event.timeLabel}</span>
                        <h5 className="font-secondary font-bold text-blue-dark">"{event.assumption}"</h5>
                        <p className="text-sm text-gray-600">Omdat je zei: {event.trigger}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};