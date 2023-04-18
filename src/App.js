import {
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';

const Layout = () => (
  <main>
    {/* <Navigation /> */}
    <Outlet />
  </main>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Rockets />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
