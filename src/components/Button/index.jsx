import PropTypes from 'prop-types';

import './Button.css'
//Componente funcional


//type = button-long-text
const Button = ({ type, text, clickHandler} ) => (
    <button className={type}  onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)


Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
}


export default Button