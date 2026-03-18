import {useState} from "react";
import AIBrainDashboard from "../components/profile/AIBrainDashboard";
import AppLayout from "../components/layout/AppLayout";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import FavoriteDetail from "../components/profile/FavoriteDetail";
import Card from "../components/ui/Card";

export default function ProfilePage() {
    const [selectedFavorite, setSelectedFavorite] = useState(null);

    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div
                    className="w-full max-w-sm md:max-w-none flex flex-col items-center md:items-start mx-auto md:mx-0 md:w-64 lg:w-72 shrink-0">
                    <ProfileSidebar onSelect={setSelectedFavorite}/>
                </div>

                <div className="flex-1 w-full space-y-6 md:space-y-8 min-w-0">

                    <AIBrainDashboard/>

                    {selectedFavorite ? (
                        <Card>
                            <FavoriteDetail type={selectedFavorite}/>
                        </Card>
                    ) : (
                        <Card>
                            <div className="flex items-center justify-center h-40 text-gray-400 text-center px-6">
                                Klik op een categorie {window.innerWidth < 768 ? 'hierboven' : 'links'} om te zien wat
                                Merai denkt dat jouw favoriet is.
                            </div>
                        </Card>
                    )}
                </div>

            </div>
        </AppLayout>
    );
}