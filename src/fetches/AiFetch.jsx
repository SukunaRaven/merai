const API_URL = 'http://145.24.237.168:8000/ai';

const getHeaders = () => ({
    'Content-Type': 'application/json'
});

export const aiService = {
    // We geven de userId nu direct mee als argument
    getThemesByUserId: async (userId) => {
        try {
            const res = await fetch(`${API_URL}/user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) throw new Error("Kon geen data vinden voor deze ID.");

            return await res.json();
        } catch (error) {
            console.error("Fetch fout:", error);
            throw error;
        }
    }
};