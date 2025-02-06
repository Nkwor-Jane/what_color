import PropTypes from 'prop-types';
import "../App.css"
const ColorBox = ({color}) => {
  return (
    <div  className="color_box" data-testid="colorBox"
    style={{
        width: "150px",
        height: "150px",
        backgroundColor: color,
        margin: "20px auto",
        boxShadow: "0 4px 8px 0 rgba(124, 124, 124, 0.2), 0 6px 20px 0 rgba(107, 107, 107, 0.19)",
        borderRadius: "100%",
        cursor:"pointer",
      }}>
        
    </div>
  )
}
ColorBox.propTypes = {
    color: PropTypes.any,
}
export default ColorBox