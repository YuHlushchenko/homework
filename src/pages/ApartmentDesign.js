import React from 'react'
import Footer from '../components/Footer/Footer'
import MoreDetailsContainer from '../components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/apartmentDesign.module.sass'

const ApartmentDesign = () => {
  return (
    <div className={styles.apartmentDesignContainer}>
      <section className={styles.moreDetailsContainer}>
        <MoreDetailsContainer
          option={'apartmentDesign'}
        />
      </section>

      <section className={styles.footerContainer}>
        <Footer />
      </section>
    </div>
  )
}

export default ApartmentDesign