import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, } from '../firebase';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [registrando, setRegistrando] = useState (false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuario autenticado:', userCredential.user);
            navigate('/home');
        } catch (error) {
            console.error('Error completo:', error);
            alert('Error al iniciar sesión: ' + error.code + ' - ' + error.message);
        }
    };

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Usuario registrado:', userCredential.user);
            alert('Usuario registrado con éxito');
            navigate('/home');
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Error al registrar: ' + error.code + ' - ' + error.message);
        }
    };

    return (
        <div>
            <div>
            <img src="/src/assets/FREEZER.png" alt="Freezer" className="mx-auto w-50" />
            </div>
            <div className='flex flex-col items-center justify-center h-10'>
                <form onSubmit={handleLogin} className='bg-white p-9 rounded-lg shadow-md'>
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
                    <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Iniciar sesión</button>
                    <br />
                    <button onClick={handleRegister} className='bg-green-500 text-white p-2 rounded-md mt-2'>Registrate</button>
                </form>
                
            </div>

        </div>
    );
}

export default Login;
