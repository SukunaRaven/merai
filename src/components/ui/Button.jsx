export default function Button({ children, variant="primary" }) {

    const styles = {
        primary:
            "bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-dark)]",
        secondary:
            "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }

    return (
        <button
            className={`px-6 py-3 rounded-lg font-medium transition ${styles[variant]}`}
        >
            {children}
        </button>
    )
}