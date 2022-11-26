import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({
  value,
  btnType,
  btnStyle,
  handleClick,
  inlineStyle,
  disabled = false,
  id = null,
}) => {
  return (
    <button
      id={id}
      className={
        btnStyle ? `${styles.default} ${styles[btnStyle]}` : styles.default
      }
      disabled={disabled}
      style={inlineStyle}
      type={btnType}
      onClick={handleClick}>
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  btnType: PropTypes.string,
  btnStyle: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  handleClick: PropTypes.func,
  inlineStyle: PropTypes.object,
}

export default Button
