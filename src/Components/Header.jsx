import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Load from '../assets/load2.gif';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const pageTitles = {
    '/': 'Home',
    '/resume': 'Resume',
    '/project': 'Projects',
    '/certifications': 'Certifications',
    '/internships': 'Internships',
  };

  const currentPageTitle = pageTitles[location.pathname] || 'Portfolio';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/project', label: 'Projects' },
    { to: '/certifications', label: 'Certification' },
    { to: '/internships', label: 'Internships' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={Load} alt="Load" className="w-10 h-10 rounded-full" />
          <h4 className="text-lg font-semibold">
            Sarankiruthik S S | {currentPageTitle}
          </h4>
        </div>

        {/* Desktop + Mobile Toggle */}
        <nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition ${
                      isActive
                        ? 'text-cyan-300 bg-gray-800 shadow-md'
                        : 'text-white hover:text-cyan-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-70 p-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.to} onClick={() => setOpen(false)}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition ${
                    isActive
                      ? 'text-cyan-300 bg-gray-700'
                      : 'text-white hover:text-cyan-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
