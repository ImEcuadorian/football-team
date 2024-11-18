import React, {useState} from 'react';
import {useFootball} from '../hooks/useFootball';

const PlayerForm = () => {
    const {dispatch} = useFootball();
    const [playerData, setPlayerData] = useState({
        name: '',
        position: 'Forward',
        age: 0,
        headline: false,
        goals: 0,
        assists: 0,
        goalsReceived: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setPlayerData((prevData) => ({
            ...prevData,
            [name]: name === 'age' ? Number(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Dispatch basado en el tipo de jugador seleccionado
        switch (playerData.position) {
            case 'Forward':
                dispatch({
                    type: 'ADD_FORWARD',
                    payload: {forward: {...playerData, goals: playerData.goals}}
                });
                break;
            case 'Midfielder':
                dispatch({
                    type: 'ADD_MIDFIELDER',
                    payload: {midfielder: {...playerData, assists: playerData.assists}}
                });
                break;
            case 'Goalkeeper':
                dispatch({
                    type: 'ADD_GOALKEEPER',
                    payload: {goalkeeper: {...playerData, goalsReceived: playerData.goalsReceived}}
                });
                break;
            case 'Defender':
                dispatch({
                    type: 'ADD_DEFENDER',
                    payload: {defender: playerData}
                });
                break;
            default:
                alert('Posición no válida');
                return;
        }

        // Resetear datos después de enviar
        setPlayerData({name: '', position: 'Forward', age: 0, headline: false, goals: 0, assists: 0, goalsReceived: 0});
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Agregar Jugador</h2>
            <label className="block text-sm text-gray-600">Nombre</label>
            <input
                type="text"
                name="name"
                value={playerData.name}
                onChange={handleChange}
                placeholder="Nombre del jugador"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block text-sm text-gray-600">Posición</label>
            <select
                name="position"
                value={playerData.position}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="Forward">Delantero</option>
                <option value="Defender">Defensa</option>
                <option value="Midfielder">Mediocampista</option>
                <option value="Goalkeeper">Portero</option>
            </select>
            <label className="block text-sm text-gray-600">Edad</label>
            <input
                type="number"
                name="age"
                value={playerData.age}
                onChange={handleChange}
                placeholder="Edad"
                className="w-full p-2 border border-gray-300 rounded"
            />


            {playerData.position === 'Forward' && (
                <>
                    <label className="block text-sm text-gray-600">Goles</label>
                    <input
                        type="number"
                        name="goals"
                        value={playerData.goals}
                        onChange={handleChange}
                        placeholder="Goles"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </>
            )}

            {playerData.position === 'Midfielder' && (
                <>
                    <label className="block text-sm text-gray-600">Asistencias</label>
                    <input
                        type="number"
                        name="assists"
                        value={playerData.assists}
                        onChange={handleChange}
                        placeholder="Asistencias"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </>
            )}

            {playerData.position === 'Goalkeeper' && (
                <>
                    <label className="block text-sm text-gray-600">Goles Recibidos</label>
                    <input
                        type="number"
                        name="goalsReceived"
                        value={playerData.goalsReceived}
                        onChange={handleChange}
                        placeholder="Goles recibidos"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </>
            )}

            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="headline"
                    checked={playerData.headline}
                    onChange={handleChange}
                    className="w-4 h-4"
                />
                <span>Es Titular</span>
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Agregar
            </button>
        </form>
    );
};

export default PlayerForm;
