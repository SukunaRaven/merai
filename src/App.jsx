import {createBrowserRouter, RouterProvider} from "react-router";
import Homepage from "./pages/Homepage.jsx";
import AccessibilityPage from "./pages/AccessibilityPage.jsx"
import AiTipsAndTricksPage from "./pages/AiTipsAndTricksPage.jsx"
import AttitudeTestPage from "./pages/AttitudeTestPage.jsx"
import DataManagement from "./pages/DataManagementPage.jsx"
import FamilyPage from "./pages/FamilyPage.jsx"
import MinigamesPage from "./pages/MinigamesPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx"
// import ProfileAdjustPage from "./pages/ProfileAdjustPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"

const router = createBrowserRouter([
    {
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/attitudetest',
                element: <AttitudeTestPage/>
            },
            {
                path: '/profile',
                element: <ProfilePage/>
            },
            {
                path: '/settings',
                element: <SettingsPage/>
            },
            {
                // path: '/settings/profileadjust',
                // element: <ProfileAdjustPage/>
            },
            {
                path: '/settings/accessibility',
                element: <AccessibilityPage/>
            },
            {
                path: '/settings/DataManagement',
                element: <DataManagement/>
            },
            {
                path: '/settings/privacy',
                element: <PrivacyPage/>
            },
            {
                path: '/settings/family',
                element: <FamilyPage/>
            },
            {
                path: '/tipsandtricks',
                element: <AiTipsAndTricksPage/>
            },
            {
                path: '/minigames',
                element: <MinigamesPage/>
            },
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App
