import React from 'react'
import Achievements from '../components/Achievements/Achievements'
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

      <section className={styles.achievementsSection}>
        <Achievements />
      </section>
    </div>
  )
}

export default Home