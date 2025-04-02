import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import Settings from './pages/Settings/Settings';
import { Navbar } from '@ui-library';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/analytics', label: 'Analytics' },
  { path: '/settings', label: 'Settings' }
];

const App = () => {
  return (
    <Router future={router.future}>
      <Navbar items={navItems} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
