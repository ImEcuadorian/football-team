import React from 'react';

type NavbarProps = {
    setView: (view: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <button onClick={() => setView('teamSetup')} className="mr-4">Configuración de Equipo</button>
            <button onClick={() => setView('addCoach')} className="mr-4">Agregar Entrenador</button>
            <button onClick={() => setView('addPlayer')} className="mr-4">Agregar Jugador</button>
            <button onClick={() => setView('teamInfo')} className="mr-4">Equipo</button>
        </nav>
    );
};

export default Navbar;
