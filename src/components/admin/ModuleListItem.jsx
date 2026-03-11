export const ModuleListItem = ({ module, onToggleVisibility, onEdit }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white border-l-4 border-primary shadow-sm rounded-r-lg mb-3">
            <div>
                <h3 className="font-secondary font-bold text-blue-dark">{module.title}</h3>
                <p className="text-sm text-gray-600 italic">{module.category} • {module.difficulty}</p>
            </div>
            <div className="flex gap-4 items-center">
                <button
                    onClick={() => onToggleVisibility(module.id)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                        module.isVisible ? 'bg-primary text-blue-dark' : 'bg-gray-200 text-gray-500'
                    }`}
                >
                    {module.isVisible ? 'Zichtbaar' : 'Verborgen'}
                </button>
                <button onClick={() => onEdit(module)} className="text-blue hover:underline font-bold">Aanpassen</button>
            </div>
        </div>
    );
};