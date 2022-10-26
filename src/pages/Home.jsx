import React from 'react'
import Achievements from '@components/Achievements/Achievements'
import MainSlider from '@components/MainSlider/MainSlider'
import OurServices from '@components/OurServices/OurServices'
import CustomMap from '@components/CustomMap/CustomMap'
import styles from '../styles/home.module.sass'
import AnyQuestions from '@components/AnyQuestions/AnyQuestions'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import RepairTypesContainer from '../components/RepairTypesContainer/RepairTypesContainer'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import CalculatorItem from '../components/CalculatorItem/CalculatorItem'

const Home = () => {
  return (
    <PageWrapper>
      <div className={styles.homeContainer}>
        <section className={styles.mainSliderSection}>
          <MainSlider />
        </section>

        <section className={styles.repairTypesContainer}>
          <RepairTypesContainer />
        </section>

        <section className={styles.calculatorContainer}>
          <CalculatorItem title='Розрахуйте вартість ремонту'/>
        </section>

        <section className={styles.ourServicesSection}>
          <OurServices />
        </section>

        <ChooseUs />

        <section className={styles.achievementsSection}>
          <Achievements />
        </section>

        <section>
          <CustomMap />
        </section>

        <AnyQuestions />

      </div>
    </PageWrapper>
  )
}

export default Home
