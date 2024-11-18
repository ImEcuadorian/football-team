// src/components/TeamSetup.tsx
import {FormEvent, useState} from "react";
import { useFootball } from "../hooks/useFootball";

const TeamSetup = () => {
    const { dispatch } = useFootball();
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TEAM",
            payload: {
                team: {
                    name,
                    country,
                    coach: { name: "", age: 0, experience: 0, isNational: false },
                    players: []
                }
            }
        });
        setName("");
        setCountry("");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4">Configuración Equipo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">Nombre de Equipo</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Nombre de equipo"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">País</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="País de Equipo"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default TeamSetup;
