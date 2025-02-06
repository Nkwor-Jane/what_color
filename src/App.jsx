import { useState } from 'react';
import './App.css'
import ColorBox from './components/ColorBox';
import GameStats from './components/GameStats';
import Colors from './components/Colors';
import Score from './components/Score';
import NewGame from './components/NewGame';

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const App = () => {
  const [playGame, setPlayGame] = useState(false)
  const [targetColor, setTargetColor] = useState("")
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)
  const [gameStats, setGameStats] = useState("Click a color to start!")
  const [lives, setLives] = useState(3);

  const startNewGame = (resetScore = true) => {
    if (resetScore) {
      setHighScore((prevHighScore) => Math.max(prevHighScore, score));
      setScore(0);
    }
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor("");
    setTimeout(() => setTargetColor(randomColor), 10);
    setGameStats("Match the correct color!");
  };

  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setScore((prevScore) => prevScore + 1);
      setGameStats("Correct! 🎉 Changing color...");
      setTimeout(() => startNewGame(false), 1000);
    } else {
      setLives((prevLives) => prevLives - 1);
      setGameStats("Wrong! Try again ❌");
      if (lives - 1 <= 0) {
        gameOver();
      }
    }
  };

  const gameOver = () => {
    setPlayGame(false);
    setGameStats("Game Over! Click New Game to restart.");
    setLives(3);
    setScore(0);
  };

 

  return (
    <div className='wrapper'>
      {
        !playGame ? (
          <div className='homepage'>
            <h1>What Color?</h1>
            <button className='playBtn' onClick={() =>
              {setPlayGame(true);
                startNewGame()
              }}> Play Game</button>
          </div>
        ):
        (
          <div className='container'>
          <h2 className='lives_h2'>Lives: {"❤️".repeat(lives)}</h2>
          <ColorBox color={targetColor}/>
          <GameStats stats={gameStats}/>
          <Colors colors={colors} onGuess={handleGuess}/>
          <Score score={score} highScore={highScore}/>
          <NewGame onClick={startNewGame}/>
          </div>
        )}
    </div>
  )
}

export default App
