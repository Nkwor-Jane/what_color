import PropTypes from 'prop-types';
import "../App.css"

const ColorBox = ({color}) => {
  return (
    <div  className="color_box" data-testid="colorBox"
    style={{
        backgroundColor: color,
      }}>
        
    </div>
  )
}
ColorBox.propTypes = {
    color: PropTypes.any,
}
export default ColorBox