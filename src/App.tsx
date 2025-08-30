import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Partnerships from './pages/Partnerships';
import Apply from './pages/Apply';

function App() {
    console.log("App component rendering");

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="methodology" element={<Methodology />} />
                    <Route path="partnerships" element={<Partnerships />} />
                    <Route path="apply" element={<Apply />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
