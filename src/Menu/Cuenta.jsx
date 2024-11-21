import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import BottomNavbar from '../components/BottomNavbar';

const Cuenta = () => {
    const [isOpen, setIsOpen] = useState('');
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserMenu = () => {
        // Lógica para abrir el menú de usuario
    };

    const toggleArticles = () => {
        // Lógica para abrir el menú de artículos
    };

    const [user, setUser] = useState({
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        phone: "123-456-7890",
    });

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveChanges = () => {
        setUser(formData);
        setEditMode(false);
        localStorage.setItem("userData", JSON.stringify(formData));
    };
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(user));
    }, [user]);

    return (
        <div className="home-container">
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Gestión de Cuenta</h1>
                    {!editMode ? (
                        <>
                            <div className="mb-6">
                                <p className="text-gray-600"><strong>Nombre:</strong> {user.name}</p>
                                <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                                <p className="text-gray-600"><strong>Teléfono:</strong> {user.phone}</p>
                            </div>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={() => setEditMode(true)}
                            >
                                Editar Información
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-medium mb-2">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 font-medium mb-2">Teléfono</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                    onClick={() => setEditMode(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    onClick={saveChanges}
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
                <h1>HOLA</h1>
            </div>
            <BottomNavbar toggleArticles={toggleArticles} toggleUserMenu={toggleUserMenu} />
        </div>
    )
}

export default Cuenta;