import {Link} from "react-router";
import meraiLogo from '../../assets/TLE3-Mera-LogoIcon.png'

function Nav() {
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
                        <Link to="/profile"
                              className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Profiel</Link>
                        <Link to="/login"
                              className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Login</Link>
                        <Link to="/create"
                              className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Registreer</Link>
                        <Link to="/settings"
                              className="text-black-blue text-sm font-medium hover:text-white-blue transition-colors">Instellingen</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;