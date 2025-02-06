import { useState } from 'react';
import {motion} from 'framer-motion';
import './App.css'
// Components
import ColorBox from './components/ColorBox';
import GameStats from './components/GameStats';
import Colors from './components/Colors';
import Score from './components/Score';
import NewGame from './components/NewGame';

const glowVariants = {
  animate: {
    background: [
      "radial-gradient(circle, rgba(255,0,150,0.3) 0%, rgba(201, 12, 122, 0.6) 70%)",
      "radial-gradient(circle, rgba(0,255,150,0.3) 0%, rgba(60, 179, 129, 0.6) 70%)",
      "radial-gradient(circle, rgba(0,150,255,0.3) 0%, rgba(4, 72, 121, 0.6) 70%)",
    ],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "teal", "brown", "magenta"];

const App = () => {
  const [playGame, setPlayGame] = useState(false)
  const [targetColor, setTargetColor] = useState("")
  const [score, setScore] = useState(0);
  const [displayColors, setDisplayColors] = useState("")
  const [highScore, setHighScore] = useState(0)
  const [gameStats, setGameStats] = useState("Click a color to start!")
  const [lives, setLives] = useState(3);


  const getMoreColors = () => {
    let shuffle = [...colors].sort(() => 0.5 - Math.random()); 
    return shuffle.slice(0, 6);
  };

  const startNewGame = (resetScore = true, resetLives=true) => {
    if (resetScore) {
      setHighScore((prevHighScore) => Math.max(prevHighScore, score));
      setScore(0);
    }
    if (resetLives) {
      setLives(3); 
    }
    const moreColors = getMoreColors();
    setDisplayColors(moreColors);

    const getRandomColor = (prevColor) =>{
      let randomColor;
      do{
        randomColor = moreColors[Math.floor(Math.random() * moreColors.length)]
      }while (randomColor === prevColor);
      return randomColor;
    }
    const randomColor = getRandomColor(targetColor);
    setTargetColor("");
    setTimeout(() => setTargetColor(randomColor), 10);
    setGameStats({message:"Match the correct color!", className: "match_color font_style"});
  };

  const handleGuess = (selectedColor) => {
    if (lives <= 0) return;
    if (selectedColor === targetColor) {
      setScore((prevScore) => prevScore + 1);
      setGameStats({message: "Correct! 🎉 Changing color...", className:"correct_match font_style"});
      setTimeout(() => startNewGame(false), 1000);
    } else {
      setLives((prevLives) => {
        const newLives = Math.max(prevLives - 1, 0);
        if (newLives === 0) {
          gameOver();
        }
        return newLives;
      });
      setGameStats({ message: "Wrong! ❌ Try again.", className: "wrong_match font_style" });
    }
  };

  const gameOver = () => {
    setHighScore((prevHighScore) => Math.max(prevHighScore, score))
    setGameStats({message:"Game Over! 💀 Click New Game to restart.", className:"game_over font_style"});
    setScore(0);
    setPlayGame(true)
  };

 

  return (
    <motion.div className='wrapper' variants={glowVariants} animate="animate">
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
          <div className='container'  >
          <h2 className='lives_h2'>Lives: 
          {Array.from({ length: lives }).map((_, index) => (
            <span key={index} className="heart">❤️</span>
          ))}
            </h2>
          <ColorBox color={targetColor}/>
          <GameStats stats={gameStats}/>
          <div>
          <Colors colors={displayColors} onGuess={handleGuess}/>
          </div>
          <Score score={score} highScore={highScore}/>
          <NewGame onClick={() => startNewGame(true, true)}/>
          </div>
        )}
    </motion.div>
  )
}

export default App
