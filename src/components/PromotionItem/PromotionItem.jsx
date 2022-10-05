import React from 'react'
import styles from './PromotionItem.module.sass'

const PromotionItem = ({ imgSrc, imgAlt, isReverse, titleText, discount = '', date, details }) => {
    return (
        <div className={`${styles.promotionItemContainer} ${isReverse ? styles.reverse : undefined}`}>
            <div className={styles.imgContainer}>
                <img src={imgSrc} alt={imgAlt} />
            </div>

            <div className={styles.mainContentContainer}>
                <h6>
                    {titleText}
                    <span>{discount}</span>
                </h6>

                <span>Акція діє до {date}</span>
                <p>{details}</p>
                <a href='/contacts'><button type='button'>Замовити дзвінок</button></a>
            </div>
        </div>
    )
}

export default PromotionItem