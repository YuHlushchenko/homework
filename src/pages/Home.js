import React from 'react'
import Achievements from '../components/Achievements/Achievements'
import MainSlider from '../components/MainSlider/MainSlider'
import OurServices from '../components/OurServices/OurServices'
import CustomMap from '../components/CustomMap/CustomMap'
import styles from '../styles/home.module.sass'
import Footer from '../components/Footer/Footer'
import AnyQuestions from '../components/AnyQuestions/AnyQuestions'

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

      <section>
        <CustomMap />
      </section>

      <section>
        <AnyQuestions />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home
