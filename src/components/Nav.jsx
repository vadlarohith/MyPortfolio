// // import './Home.css'
// import { Link } from 'react-scroll';

// const Nav = () => {
//     return (
//         <nav className="Navbar1 text-white top-0 left-0 w-full shadow-lg">
//             <div className="container mx-auto flex justify-between items-center py-4 px-6">
//                 {/* Logo */}
//                 <div className="text-xl font-bold">RohithVadla</div>

//                 {/* Nav Links */}
//                 <div className="space-x-6">
//                     <Link
//                         to="Home"
//                         smooth={true}
//                         duration={500}
//                         className="cursor-pointer hover:text-gray-300"
//                     >
//                         Home
//                     </Link>
//                     <Link
//                         to="About"
//                         smooth={true}
//                         duration={500}
//                         className="cursor-pointer hover:text-gray-300"
//                     >
//                         About
//                     </Link>
//                     <Link
//                         to="Projects"
//                         smooth={true}
//                         duration={500}
//                         className="cursor-pointer hover:text-gray-300"
//                     >
//                         Projects
//                     </Link>
//                     <Link
//                         to="Contact"
//                         smooth={true}
//                         duration={500}
//                         className="cursor-pointer hover:text-gray-300"
//                     >
//                         Contacts
//                     </Link>
//                 </div>
//             </div>
//         </nav>
        
//     );
// };

// export default Nav;



import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger and close icons

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="Navbar1 bg-gray-800 text-white fixed top-0 left-0 w-full shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-xl font-bold">RohithVadla</div>

                {/* Hamburger Menu Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl sm:hidden focus:outline-none"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Nav Links */}
                <div className="hidden sm:flex space-x-6">
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

            {/* Mobile Nav Links */}
            <div
                className={`sm:hidden flex flex-col bg-gray-900 transition-transform duration-300 ${
                    menuOpen ? 'h-screen' : 'h-0 overflow-hidden'
                }`}
            >
                <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    className="block py-4 px-6 border-b border-gray-700 hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="About"
                    smooth={true}
                    duration={500}
                    className="block py-4 px-6 border-b border-gray-700 hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </Link>
                <Link
                    to="Projects"
                    smooth={true}
                    duration={500}
                    className="block py-4 px-6 border-b border-gray-700 hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </Link>
                <Link
                    to="Contact"
                    smooth={true}
                    duration={500}
                    className="block py-4 px-6 hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                >
                    Contacts
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
