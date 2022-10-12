import React from 'react'
import styles from './OurServices.module.sass'

const OurServices = () => {
  return (
    <div className={styles.ourServicesContainer}>
        <h2>наші послуги</h2>
        <p>Ми проводимо ремонтно-будівничі роботи в квартирах будь-якого типу, <br /> площі і технічного стану</p>
        
        <div className={styles.servicesContainer}>
            <div className={`${styles.serviceBlock} ${styles.img1}`}>
                <div className={styles.bottomContainer}>
                    <span>Ремонт квартир під ключ</span>
                </div>
            </div>

            <div className={`${styles.serviceBlock} ${styles.img2}`}>
                <div className={styles.bottomContainer}>
                    <span>Дизайн інтер’єру</span>
                </div>
            </div>

            <div className={`${styles.serviceBlock} ${styles.img3}`}>
                <div className={styles.bottomContainer}>
                    <span>Будівництво будинків</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices