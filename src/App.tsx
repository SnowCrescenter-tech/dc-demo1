import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Bus } from './pages/Bus';
import { Venues } from './pages/Venues';
import { Map } from './pages/Map';
import { Canteen } from './pages/Canteen';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/map" element={<Map />} />
          <Route path="/canteen" element={<Canteen />} />
        </Routes>
      </Layout>
    </Router>
  );
}
