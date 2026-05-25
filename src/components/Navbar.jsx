import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Vikrant
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] px-6 py-6">

          <ul className="flex flex-col gap-6 text-lg">

            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-cyan-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-cyan-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-cyan-400"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-cyan-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-cyan-400"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;