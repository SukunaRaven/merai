// src/fetches/AiFetch.jsx
const API_URL = 'http://145.24.237.168:8000/ai';

export const aiService = {
    getThemesByProfileId: async (profileId) => {
        try {
            const res = await fetch(`${API_URL}/profile/${profileId}`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });

            // Als de data NIET gevonden is (404), sturen we nep-data terug voor de test
            if (res.status === 404) {
                console.warn("Server gaf 404, we gebruiken nu test-data uit de frontend.");
                return {
                    movie: "Interstellar (Test)",
                    movie_genre: "Sci-Fi",
                    artist: "Hans Zimmer",
                    food: "Sushi",
                    color: "Blauw",
                    music_genre: "Ambient",
                    holiday_country: "IJsland",
                    clothing_style: "Casual",
                    animal: "Wolf",
                    place: "Ruimte"
                };
            }

            if (!res.ok) throw new Error("Server fout");
            return await res.json();
        } catch (error) {
            console.error("Fetch fout:", error);
            throw error;
        }
    }
};