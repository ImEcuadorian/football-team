import { useState } from 'react';
import Navbar from './components/Navbar';
import TeamInfo from './components/TeamInfo';
import PlayerForm from './components/PlayerForm';
import CoachForm from './components/CoachForm';
import TeamSetup from "./components/TeamSetup.tsx";

function App() {
    const [view, setView] = useState('teamInfo');

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar setView={setView} />
            <div className="container mx-auto p-4">
                {view === 'teamInfo' && <TeamInfo />}
                {view === 'addPlayer' && <PlayerForm />}
                {view === 'addCoach' && <CoachForm />}
                {view === 'teamSetup' && <TeamSetup />}
            </div>
        </div>
    );
}

export default App;
