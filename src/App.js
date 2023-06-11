import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Event from './routes/event/Event';
import Home from './routes/home/Home';
import RSVP from './routes/rsvp/RSVP';
import Gallery from './routes/gallery/Gallery';
import Guide from './routes/guide/Guide';
import Navbar from './components/Navbar';

function App() {
  
  const isActive = (path) => {
    console.log(window.location.pathname);
    // eslint-disable-next-line no-restricted-globals
    return window.location.pathname.includes(path);
  };
  return (
    <div className="App font-sans">
      <Router>
          <Navbar/>
          {/* <nav className="bg-gray-800 py-4">
            <ul className="flex justify-center">
              <li className="mr-6 cursor-pointer">
                <Link to="/" activeClassName="underline underline-offset-8" className={`text-white`}>Home</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/event" className={`text-white ${isActive('event') ? 'underline underline-offset-8 font-bold' : ''}`}>Events</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/rsvp" className={`text-white ${isActive('rsvp') ? 'underline underline-offset-8 font-bold' : ''}`}>RSVP</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/gallery" className={`text-white`}>Gallery</Link>
              </li>
              <li className="mr-6 cursor-pointer">
                <Link to="/guide" className={`text-white`}>Guide</Link>
              </li>
            </ul>
          </nav> */}

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/event" element={<Event/>} />
              <Route path="/rsvp" element={<RSVP/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/guide" element={<Guide/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
