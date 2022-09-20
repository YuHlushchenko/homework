import React from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import OurServices from '../components/OurServices/OurServices'
import styles from '../styles/home.module.sass'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.mainSliderSection}>
        <MainSlider />
      </section>

      <section className={styles.ourServicesSection}>
        <OurServices />
      </section>
    </div>
  )
}

export default Home