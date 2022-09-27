import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({value, btnType, btnStyle, handleClick, inlineStyle, id = null}) => {
  return (
    <button 
        id={id}
        className={btnStyle ? `${styles.default} ${styles[btnStyle]}` : styles.default}
        style={inlineStyle}
        type={btnType}
        onClick={handleClick}
    >
        {value}
    </button>
  )
}

// Button.propTypes = {
//     value: PropTypes.string,
//     btnType: PropTypes.string,
//     btnStyle: PropTypes.string,
//     id: PropTypes.string,
//     handleClick: PropTypes.func
// }

export default Button