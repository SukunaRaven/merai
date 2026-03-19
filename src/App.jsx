import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import AccessibilityPage from "./pages/AccessibilityPage.jsx"
import AiTipsAndTricksPage from "./pages/AiTipsAndTricksPage.jsx"
import AttitudeTestPage from "./pages/AttitudeTestPage.jsx"
import DataManagement from "./pages/DataManagementPage.jsx"
import FamilyPage from "./pages/FamilyPage.jsx"
import MinigamesPage from "./pages/MinigamesPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx"
import AdminPage from "./pages/AdminPage.jsx"
import MyProfileInsight from "./pages/MyProfileInsight.jsx"
import ProfileAdjustPage from "./pages/ProfileAdjustPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HangmanGamePage from "./pages/HangmanGamePage.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";

const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/profileinsight',
                element: <MyProfileInsight/>
            },
            {
                path: '/admin',
                element: <AdminPage/>
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
                path: '/settings/profileadjust',
                element: <ProfileAdjustPage/>
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
            {
                path: '/minigames/hangman',
                element: <HangmanGamePage/>
            },
            {
                path: '/minigames/not-available',
                element: <div className="p-20 text-center">
                    <h1 className="text-2xl font-bold">Deze game is nog in ontwikkeling!</h1>
                    <p className="mb-4">Probeer ons andere spel.</p>
                    <a href="/minigames/hangman"
                       className="flex-1 bg-blue text-white-blue text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-dark hover:text-white-blue transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark">Speel
                        Galgje</a>
                </div>
            },
            {
                path: '/create',
                element: <CreateAccountPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App