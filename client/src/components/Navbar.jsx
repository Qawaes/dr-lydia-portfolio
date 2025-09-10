import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="font-bold text-xl text-blue-600">
          Dr. Lydia Mwai
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.name} to={link.path} className="text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
