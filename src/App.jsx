import { useState } from 'react';
import './index.css';

const Dice = ({ value }) => {
    const dotStyle = { fill: 'black' };
    const faceStyle = { fill: 'white', stroke: '#e0e0e0', strokeWidth: '2', rx: '15' };

    const positions = {
        1: [[50, 50]],
        2: [[25, 25], [75, 75]],
        3: [[25, 25], [50, 50], [75, 75]],
        4: [[25, 25], [75, 25], [25, 75], [75, 75]],
        5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
        6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
    };

    return (
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            <rect x="2" y="2" width="96" height="96" style={faceStyle} />
            {positions[value].map((pos, i) => (
                <circle key={i} cx={pos[0]} cy={pos[1]} r="9" style={dotStyle} />
            ))}
        </svg>
    );
};

const App = () => {
    const [p1Dice, setP1Dice] = useState(1);
    const [p2Dice, setP2Dice] = useState(1);
    const [winner, setWinner] = useState(null);

    const rollDice = (player) => {
        const newVal = Math.floor(Math.random() * 6) + 1;
        if (player === 1) {
            setP1Dice(newVal);
           
        } else {
            setP2Dice(newVal);
        }
    };

    return (
        <div className="container">
            <h1 className="main-title">DICE ROLL</h1>

            <div className="arena">
                {/* Player 1 */}
                <div className="player-section">
                    <h2>PLAYER 1</h2>
                    <div className="dice-container">
                        <Dice value={p1Dice} />
                    </div>
                    <button onClick={() => rollDice(1)}>ROLL</button>
                </div>

                <div className="vs-badge">VS</div>

                {/* Player 2 */}
                <div className="player-section">
                    <h2>PLAYER 2</h2>
                    <div className="dice-container">
                        <Dice value={p2Dice} />
                    </div>
                    <button onClick={() => rollDice(2)}>ROLL</button>
                </div>
            </div>
        </div>
    );
};

export default App;
