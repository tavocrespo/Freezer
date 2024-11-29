import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import appFirebase from "../firebase.js";
const auth = getAuth(appFirebase)

import useFetch from "../hooks/fetch/useFetch";
import { API_URL } from "../constants/api";
import useToast from "../hooks/toast/useToast";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [registrando, setRegistrando] = useState(false);
  const { fetchData } = useFetch();
  const { exitoToast, errorToast } = useToast();

  const toggleForm = () => {
    setRegistrando(!registrando);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const functionAuth = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    console.log(correo)

    //registro

    if (registrando) {

      if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
      }
      if (password !== confirmPassword) {
        alert('las contraseñas no coinciden' + error.message);
      }

      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
        navigate('/home');

      }
      catch (error) {
        alert('ERROR EN EL REGISTRO:' + error.message);
      }
    }

    else {

      try {
        await signInWithEmailAndPassword(auth, correo, contraseña)
        navigate('/Home');
      } catch (error) {
        alert('INVALIDO');
      }

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
            onSubmit={functionAuth}
            className="bg-white p-9 rounded-lg shadow-md"
          >
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
            <br />
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />

            {registrando && (
              <div className='confirm-password'>

                <br />
                <input type="password"
                  className='input-password'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} required />
                <br />
                <br />

                <input
                  className='input-age'
                  type="date"
                  placeholder='Age'
                />
              </div>


            )}

            <br />
            <br />

            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              type="submit"
            >
              {registrando ? "Registrate" : "Inicia Sesion"}
            </button>

            <br />

            <h4 className="texto-boton">

              <br />
              <button onClick={toggleForm}>
                {registrando ? "Si ya tienes cuenta, Inicia Sesion" : "No Tienes Cuenta? Registrate"}
              </button>

            </h4>

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
