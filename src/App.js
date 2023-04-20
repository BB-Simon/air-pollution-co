import {
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Home, Metrics, Navigation } from './components';

const Layout = () => (
  <main>
    <Navigation />
    <Outlet />
  </main>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/metrics" element={<Metrics />} />
      </Route>
    </Routes>
  );
}

export default App;
