
// Change this line:
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// To this:
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Alliances from './pages/Alliances';
import Apply from './pages/Apply';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="methodology" element={<Methodology />} />
            <Route path="alliances" element={<Alliances />} />
            <Route path="apply" element={<Apply />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;