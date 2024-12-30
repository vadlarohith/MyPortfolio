import './Home.css'
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className="Navbar1 text-white top-0 left-0 w-full shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-xl font-bold">RohithVadla</div>

                {/* Nav Links */}
                <div className="space-x-6">
                    <Link
                        to="Home"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="About"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300"
                    >
                        About
                    </Link>
                    <Link
                        to="Projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300"
                    >
                        Projects
                    </Link>
                    <Link
                        to="Contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300"
                    >
                        Contacts
                    </Link>
                </div>
            </div>
        </nav>
        
    );
};

export default Nav;
