import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Event from './routes/event/Event';
import Home from './routes/home/Home';
import RSVP from './routes/rsvp/RSVP';
import Admin from './routes/rsvp/Admin';
import Gallery from './routes/gallery/Gallery';
import Guide from './routes/guide/Guide';
import Navbar from './components/Navbar';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  
  const isActive = (path) => {
    console.log(window.location.pathname);
    // eslint-disable-next-line no-restricted-globals
    return window.location.pathname.includes(path);
  };
  return (
    <div className="App font-sans">
      <ReactNotifications />
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/event" element={<Event/>} />
              <Route path="/rsvp" element={<RSVP/>} />
              <Route path="/rsvp/admin" element={<Admin/>}/>
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/guide" element={<Guide/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
