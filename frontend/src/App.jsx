import { Toaster } from "react-hot-toast";
import { useState } from "react";
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

import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "./firebase.js";  
const auth = getAuth(appFirebase)



function App() {
    const [usuario, setUsuario]= useState("")
    onAuthStateChanged(auth,(usuarioFirebase)=> {
      if (usuarioFirebase) {
          setUsuario(usuarioFirebase)
      }
      else
      {
        setUsuario(null)
      }
    } )

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
