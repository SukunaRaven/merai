import { useState } from "react"

import AIBrainDashboard from "../components/profile/AIBrainDashboard"
import AppLayout from "../components/layout/AppLayout"
import ProfileSidebar from "../components/profile/ProfileSidebar"
import FavoriteDetail from "../components/profile/FavoriteDetail"
import Card from "../components/ui/Card"

export default function ProfilePage() {

    const [selectedFavorite, setSelectedFavorite] = useState(null)

    return (
        <AppLayout>

            <div className="flex gap-8">

                <ProfileSidebar onSelect={setSelectedFavorite} />

                <div className="flex-1 space-y-8">

                    {/* AI Brain Dashboard */}
                    <AIBrainDashboard />

                    {/* Favorite explanation */}
                    {selectedFavorite ? (

                        <Card>
                            <FavoriteDetail type={selectedFavorite} />
                        </Card>

                    ) : (

                        <Card>
                            <div className="flex items-center justify-center h-40 text-gray-500 text-center">
                                Klik op een categorie links om te zien wat Mera denkt dat jouw favoriet is.
                            </div>
                        </Card>

                    )}

                </div>

            </div>

        </AppLayout>
    )
}