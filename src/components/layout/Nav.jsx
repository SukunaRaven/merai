import {useState} from "react"; // 1. Added useState
import {Link, useNavigate} from "react-router-dom";
import meraiLogo from '../../assets/TLE3-Mera-LogoIcon.png';
import {useAuth} from "../../context/AuthContext.jsx";

function Nav() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // 2. State for mobile menu

    const handleLogout = () => {
        logout();
        navigate("/login");
        setIsOpen(false); // Close menu on logout
    };

    return (
        <header className="bg-primary text-white-blue relative">
            <div className="px-6">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img src={meraiLogo} alt="Merai Logo" className="h-20"/>
                        </Link>
                    </div>

                    {/* Desktop Menu (Visible on md and up) */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavLinks user={user} handleLogout={handleLogout}/>
                    </div>

                    {/* Mobile Menu Button (Visible only on small screens) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white-blue focus:outline-none"
                        >
                            {/* Simple Hamburger Icon */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div
                        className="md:hidden pb-6 flex flex-col gap-4 border-t border-black-blue/10 pt-4 hover:text-white-blue transition-colors">
                        <NavLinks user={user} handleLogout={handleLogout} setIsOpen={setIsOpen}/>
                    </div>
                )}
            </div>
        </header>
    );
}

// Extracted links into a sub-component to keep it DRY (Don't Repeat Yourself)
function NavLinks({user, handleLogout, setIsOpen}) {
    const closeMenu = () => setIsOpen && setIsOpen(false);

    return (
        <>
            {user ? (
                <>
                    <Link to="/profile" onClick={closeMenu}
                          className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Profiel</Link>
                    {user.role === 1 && (
                        <Link to="/admin" onClick={closeMenu}
                              className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Admin</Link>
                    )}
                    <Link to="/profileinsight" onClick={closeMenu}
                          className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Profiel
                        Inzicht</Link>
                    <Link to="/settings" onClick={closeMenu}
                          className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Instellingen</Link>
                    <button onClick={handleLogout}
                            className="text-left text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Log
                        uit
                    </button>
                </>
            ) : (
                <>
                    <Link to="/create" onClick={closeMenu}
                          className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Registreer</Link>
                    <Link to="/login" onClick={closeMenu}
                          className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Login</Link>
                </>
            )}
        </>
    );
}

export default Nav;