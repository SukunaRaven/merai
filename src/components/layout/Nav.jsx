import {Link, useNavigate} from "react-router-dom";
import meraiLogo from '../../assets/TLE3-Mera-LogoIcon.png';
import {useAuth} from "../../context/AuthContext.jsx";

function Nav() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="bg-primary text-white-blue">
            <div className="px-6">
                <nav className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={meraiLogo} alt="Merai Logo" className="h-20"/>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        {user ? (
                            <>
                                <Link to="/profile"
                                      className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Profiel</Link>

                                {/* Only show Admin link if user role is admin */}
                                {user.role === 1 && (
                                    <Link to="/admin"
                                          className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Admin</Link>
                                )}

                                <Link to="/profileinsight"
                                      className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Profiel
                                    Inzicht</Link>
                                <Link to="/settings"
                                      className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Instellingen</Link>
                                <button onClick={handleLogout}
                                        className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Log
                                    uit
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/create"
                                      className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Registreer</Link>
                                <Link to="/login"
                                      className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Login</Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;