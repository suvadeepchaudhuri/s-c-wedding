import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => {
        return window.location.pathname === path;
      };

    return (
        <nav className="bg-gray-800 py-4">
            <ul className="flex justify-center">
              <li className="mr-6 cursor-pointer">
                <Link to="/" className={`text-white ${isActive('/') ? 'underline underline-offset-8 font-bold' : ''}`}>Home</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/event" className={`text-white ${isActive('/event') ? 'underline underline-offset-8 font-bold' : ''}`}>Events</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/rsvp" className={`text-white ${isActive('/rsvp') ? 'underline underline-offset-8 font-bold' : ''}`}>RSVP</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/gallery" className={`text-white ${isActive('/gallery') ? 'underline underline-offset-8 font-bold' : ''}`}>Gallery</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/guide" className={`text-white ${isActive('/guide') ? 'underline underline-offset-8 font-bold' : ''}`}>Guide</Link>
              </li>
            </ul>
          </nav>
    );
}
