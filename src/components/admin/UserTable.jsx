export const UserTable = ({ users }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-blue-light/20">
            <table className="w-full text-left border-collapse">
                <thead className="bg-blue-light/10 text-blue-dark font-secondary">
                <tr>
                    <th className="p-4 border-b">ID (Anoniem)</th>
                    <th className="p-4 border-b">Rol</th>
                    <th className="p-4 border-b">Top Interesses</th>
                    <th className="p-4 border-b text-center">AI Zekerheid</th>
                    <th className="p-4 border-b">Acties</th>
                </tr>
                </thead>
                <tbody className="text-sm">
                {users.map((user) => (
                    <tr key={user.id} className="hover:bg-white-blue/50 transition-colors">
                        <td className="p-4 border-b font-mono text-xs">{user.id}</td>
                        <td className="p-4 border-b">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${user.role === 'Ouder' ? 'bg-purple-100 text-purple-700' : 'bg-primary/20 text-blue-dark'}`}>
                  {user.role}
                </span>
                        </td>
                        <td className="p-4 border-b">{user.interests.join(', ')}</td>
                        <td className="p-4 border-b">
                            <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className={`h-full ${user.confidence > 70 ? 'bg-green-400' : 'bg-orange-400'}`} style={{ width: `${user.confidence}%` }}></div>
                                </div>
                                <span className="font-bold w-8">{user.confidence}%</span>
                            </div>
                        </td>
                        <td className="p-4 border-b">
                            <button className="text-blue hover:underline font-bold">Bekijk Profiel</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};