import React from 'react'
import styles from '../styles/services.module.sass'
import Footer from '../components/Footer/Footer'
import MoreDetailsContainer from '../components/MoreDetailsContainer/MoreDetailsContainer'

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.mainContentContainer}>
        <h2>ремонт квартири під ключ</h2>

        <div className={styles.moreDetailsBlocksContainer}>
          <MoreDetailsContainer
            option={'services'} // 'services' / 'apartmentDesign' / 'smartHause'
          />
        </div>

        <h2>Що входить у вартість «ремонту під ключ»</h2>
        <p>Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  </p>

      </div>

      <section className={styles.footerContainer}>
        <Footer />
      </section>

    </div>
  )
}

export default Services