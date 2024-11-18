import React, { useState } from 'react';
import { useFootball } from '../hooks/useFootball';

const CoachForm = () => {
    const { dispatch } = useFootball();
    const [coachData, setCoachData] = useState({
        name: '',
        age: 0,
        experience: 0,
        isNational: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setCoachData({
            ...coachData,
            [name]: type === 'checkbox' ? checked : Number(value) || value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'ADD_COACH', payload: { coach: coachData } });
        setCoachData({ name: '', age: 0, experience: 0, isNational: false });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Agregar Entrenador</h2>
            <label className="block text-gray-700 font-medium">Nombre del Entrenador</label>
            <input
                type="text"
                name="name"
                value={coachData.name}
                onChange={handleChange}
                placeholder="Nombre del entrenador"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block text-gray-700 font-medium">Edad</label>
            <input
                type="number"
                name="age"
                value={coachData.age}
                onChange={handleChange}
                placeholder="Edad"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block text-gray-700 font-medium">Años de Experiencia</label>
            <input
                type="number"
                name="experience"
                value={coachData.experience}
                onChange={handleChange}
                placeholder="Años de experiencia"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="isNational"
                    checked={coachData.isNational}
                    onChange={handleChange}
                    className="w-4 h-4"
                />
                <span>Es Nacional</span>
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Agregar
            </button>
        </form>
    );
};

export default CoachForm;
