import React from 'react'
import Footer from '../components/Footer/Footer'
import MoreDetailsContainer from '../components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/smartHouse.module.sass'

const SmartHouse = () => {
  return (
    <div className={styles.smartHouseContainer}>
      <section className={styles.moreDetailsContainer}>
        <MoreDetailsContainer 
          option={'smartHouse'}
        />
      </section>

      <section className={styles.footerContainer}>
        <Footer />
      </section>
    </div>
  )
}

export default SmartHouse