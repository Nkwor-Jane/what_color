import PropTypes from "prop-types";
import "../App.css"

const Score = ({score, highScore}) =>{
    return (
        <div className="score_p">
            <p data-testid="score">Score: {score}</p>
            <p data-testid="highScore">High Score: {highScore}</p>
        </div>
    )
    
}

Score.propTypes = {
    score: PropTypes.any,
    highScore: PropTypes.any,
}

export default Score;