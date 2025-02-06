import PropTypes from "prop-types";
import "../App.css"

const NewGame = ({onClick}) =>{
    return (
        <button className="newGameBtn" data-testid="newGameButton" onClick={() => {
            onClick(true)
            }}
            >
            New Game
        </button>
    )
}

NewGame.propTypes = {
    onClick: PropTypes.any,
}
export default NewGame;