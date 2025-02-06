import PropTypes from "prop-types";

const GameStats = ({stats}) => {
  return (
    <h3 data-testid="gameStatus" className={stats.className}>{stats.message}</h3>
  )
}

GameStats.propTypes = {
    stats: PropTypes.shape({
      message:PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
}

export default GameStats;