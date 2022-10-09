import React from 'react'
import styles from './MoreDetailsItem.module.sass'

const MoreDetailsItem = ({ imgUrl, description = '', title = '', price = '', bttnLink }) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div
                    className={styles.imgContainer}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                ></div>
                <div className={styles.infoContainer}>
                {
                    description === ''
                        ? undefined
                        : <span>{description}</span>
                }
                {
                    title === ''
                        ? undefined
                        : <p>{title}</p>
                }
                {
                    price === ''
                        ? undefined
                        : <h6>{price}</h6>
                }
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <a href={bttnLink}>
                    <button type='button'>Детальніше</button>
                </a>
            </div>
        </div>
    )
}

export default MoreDetailsItem