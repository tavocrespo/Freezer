import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Agregar from "./Menu/Agregar";
import Cuenta from "./Menu/Cuenta";
import Config from "./Menu/Config";
import Soporte from "./Menu/Soporte";
import ActivosPage from "./pages/ActivosPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/config" element={<Config />} />
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/home" element={<Home />} />
          <Route path="/agregar-activo" element={<Agregar />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/activos" element={<ActivosPage />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
