import ReactSlider from 'react-slider'
import styles from './Range.module.sass'
import PropTypes from 'prop-types'
import './Range.css'

const Range = ({ rangeValue, rangeHandler }) => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      onChange={(value) => rangeHandler(value)}
      value={rangeValue}
      min={15}
      max={120}
      renderThumb={(props, state) => {
        return (
          <div {...props}>
            <div className={styles.rangeDetails}>
              <p>{state.valueNow}</p>
              <p>
                м<sup>2</sup>
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

Range.propTypes = {
  rangeValue: PropTypes.number,
  rangeHandler: PropTypes.func,
}

export default Range
