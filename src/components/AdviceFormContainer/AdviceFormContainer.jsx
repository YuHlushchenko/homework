import React from 'react'
import AdviceForm from '../AdviceForm/AdviceForm'
import styles from './AdviceFormContainer.module.sass'
import PropTypes from 'prop-types'

const AdviceFormContainer = ({
  title,
  description = '',
  imgUrl,
  subTitle = '',
  text1 = '',
  text2 = '',
  text3 = '',
}) => {
  return (
    <div className={styles.adviceFormContainer}>
      <h2>{title}</h2>
      {description !== '' ? <span>{description}</span> : undefined}

      <div className={styles.formContainer}>
        <AdviceForm imgUrl={imgUrl} />
      </div>
      <div className={styles.bottomContextContainer}>
        {subTitle !== '' ? <h3>{subTitle}</h3> : undefined}
        {text1 !== '' ? <p>{text1}</p> : undefined}
        {text2 !== '' ? <p>{text2}</p> : undefined}
        {text3 !== '' ? <p>{text3}</p> : undefined}
      </div>
    </div>
  )
}

AdviceFormContainer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    subTitle: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    imgUrl: PropTypes.string,
}

export default AdviceFormContainer
