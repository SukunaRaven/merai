export default function Card({ children }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            {children}
        </div>
    )
}