import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { auth } from "../firebase";
import useFetch from "../hooks/fetch/useFetch";
import { API_URL } from "../constants/api";
import useToast from "../hooks/toast/useToast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [registrando, setRegistrando] = useState(false);

  const { fetchData } = useFetch();
  const { exitoToast, errorToast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Usuario autenticado:", userCredential.user);
      navigate("/home");
    } catch (error) {
      console.error("Error completo:", error);
      alert("Error al iniciar sesión: " + error.code + " - " + error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Usuario registrado:", userCredential.user);
      alert("Usuario registrado con éxito");
      navigate("/home");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar: " + error.code + " - " + error.message);
    }
  };

  const handleRegisterApi = async () => {
    const respuesta = await fetchData(`${API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "prueba",
        email: email,
        password: password,
      }),
    });
    if (respuesta.success) {
      exitoToast(respuesta.message);
    } else {
      errorToast(respuesta.message);
    }
  };

  return (
    <div className=" flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-hidden h-[380px]">
          <img
            src="/src/assets/FREEZER.png"
            alt="Freezer"
            className="mx-auto w-50"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="bg-white p-9 rounded-lg shadow-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
            <br />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <br />
            <br />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              type="submit"
            >
              Iniciar sesión
            </button>
            <br />
            <button
              onClick={handleRegister}
              className="bg-green-500 text-white p-2 rounded-md mt-2"
            >
              Registrate
            </button>
          </form>
        </div>
      </div>

      <button className="bg-red-600 text-white" onClick={handleRegisterApi}>
        Inicia sesion con API
      </button>
    </div>
  );
}

export default Login;
