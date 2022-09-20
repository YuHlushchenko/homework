import React from 'react'
import styles from './Achievements.module.sass'

const Achievements = () => {
  return (
    <div className={styles.achievementsContainer}>
      <div className={`${styles.achievementItem} ${styles.a}`}>
        <span>141</span>
        <p>зданих об’єктів</p>
      </div>

      <div className={`${styles.achievementItem} ${styles.b}`}>
        <span>128</span>
        <p>ремонтів під ключ</p>
      </div>

      <div className={`${styles.achievementItem} ${styles.c}`}>
        <span>14</span>
        <p>професійних бригад</p>
      </div>

      <div className={`${styles.achievementItem} ${styles.d}`}>
        <span>25</span>
        <p>професійних бригад</p>
      </div>
    </div>
  )
}

export default Achievements