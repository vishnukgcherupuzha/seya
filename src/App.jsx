import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ScrollToTopOnRouteChange } from './components/ui/ScrollToTopOnRouteChange';
import './utils/animations';

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      <ScrollToTop />
    </Router>
  );
}

export default App;
