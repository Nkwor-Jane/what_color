import PropTypes from 'prop-types';
import '../App.css'

const Colors = ({ colors, onGuess }) => {
  console.log("Received colors:", colors);
  
  if (!colors || colors.length === 0) {
    console.log("No colors provided!");
    return <p>No colors available.</p>;
  }

  return (
    <div className="colors">
      {colors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          style={{
            backgroundColor: color,
            width: "80px",
            height: "40px",
            margin: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("Button Clicked:", color);
            onGuess(color);
          }}
        >
        </button>
      ))}
    </div>
  );
};

Colors. propTypes ={
    colors: PropTypes.any,
    length: PropTypes.any,
    onGuess: PropTypes.any,
}
export default Colors