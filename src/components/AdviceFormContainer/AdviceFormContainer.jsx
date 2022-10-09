import React from 'react'
import AdviceForm from '../AdviceForm/AdviceForm'
import styles from './AdviceFormContainer.module.sass'
import PropTypes from 'prop-types'

const AdviceFormContainer = ({ item }) => {
  return (
    <div className={styles.adviceFormContainer}>
      <h2>{item?.title}</h2>
      {item?.description && <span>{item?.description}</span>}

      <div className={styles.formContainer}>
        <AdviceForm imgUrl={item?.imgUrl} />
      </div>
      <div className={styles.bottomContextContainer}>
        {item?.subTitle && <h3>{item?.subTitle}</h3>}
        {item?.text1 && <p>{item?.text1}</p>}
        {item?.text2 && <p>{item?.text2}</p>}
        {item?.text3 && <p>{item?.text3}</p>}
      </div>
    </div>
  )
}

AdviceFormContainer.propTypes = {
  item: PropTypes.object,
}

export default AdviceFormContainer
