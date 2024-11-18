import {useFootball} from '../hooks/useFootball';
import {Forward, Goalkeeper, Midfielder} from '../types';

const TeamInfo = () => {
    const { state } = useFootball();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Información del Equipo</h1>
            <p><strong>Nombre:</strong> {state.name}</p>
            <p><strong>País:</strong> {state.country}</p>
            <p><strong>Entrenador:</strong> {state.coach.name}</p>
            <ul>
                <li><strong>Edad:</strong> {state.coach.age}</li>
                <li><strong>Experiencia:</strong> {state.coach.experience} años</li>
                <li><strong>Es nacional:</strong> {state.coach.isNational ? 'Sí' : 'No'}</li>
            </ul>
            <h2 className="text-xl mt-4">Jugadores:</h2>
            <ul className="list-disc ml-6">
                {state.players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.position} - {player.age} años - {player.headline ? 'Titular' : 'Suplente'}
                        <ul className="ml-4">
                            <li><strong>Edad:</strong> {player.age}</li>
                            {player.position === 'Forward' && 'goals' in player && (
                                <li><strong>Goles:</strong> {(player as Forward).goals}</li>
                            )}
                            {player.position === 'Midfielder' && 'assists' in player && (
                                <li><strong>Asistencias:</strong> {(player as Midfielder).assists}</li>
                            )}
                            {player.position === 'Goalkeeper' && 'goalsReceived' in player && (
                                <li><strong>Goles recibidos:</strong> {(player as Goalkeeper).goalsReceived}</li>
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamInfo;
