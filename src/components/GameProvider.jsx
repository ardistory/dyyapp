import { createContext, useState } from 'react';
import games from './GameLists';

export const GameContext = createContext();

export default function GameProvider({ children }) {
    const [idGame, setIdGame] = useState(0);
    const [output, setOutput] = useState({});
    return (
        <GameContext.Provider value={{ games, idGame, setIdGame, output, setOutput }}>
            {children}
        </GameContext.Provider>
    );
}