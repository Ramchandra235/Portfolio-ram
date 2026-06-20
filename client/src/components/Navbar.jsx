import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/rbyon-logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="RBYON"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl text-cyan-400">
              RBYON
            </h1>

            <p className="text-[10px] text-gray-500 tracking-widest">
              FUTURE WEB
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
            px-5
            py-2
            rounded-lg
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-cyan-400"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-cyan-500/20">

          <div className="flex flex-col items-center gap-6 py-6">

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-5
              py-2
              rounded-lg
              bg-cyan-500
              text-black
              font-semibold
              "
            >
              Resume
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;