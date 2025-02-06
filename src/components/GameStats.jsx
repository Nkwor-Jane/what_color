import PropTypes from "prop-types";

const GameStats = ({stats}) => {
  return (
    <h3 data-testid="gameStatus">{stats}</h3>
  )
}

GameStats.propTypes = {
    stats: PropTypes.any,
}

export default GameStats;