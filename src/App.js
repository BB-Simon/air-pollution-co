import {
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Home, Navigation } from './components';

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
      </Route>
    </Routes>
  );
}

export default App;
