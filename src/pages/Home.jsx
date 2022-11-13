import Achievements from '@components/Achievements/Achievements'
import MainSlider from '@components/MainSlider/MainSlider'
import OurServices from '@components/OurServices/OurServices'
import CustomMap from '@components/CustomMap/CustomMap'
import AnyQuestions from '@components/AnyQuestions/AnyQuestions'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import RepairTypesContainer from '@components/RepairTypesContainer/RepairTypesContainer'
import ChooseUs from '@components/ChooseUs/ChooseUs'
import CalculatorItem from '@components/CalculatorItem/CalculatorItem'
import styles from '../styles/home.module.sass'

const Home = () => {
  return (
    <PageWrapper>
      <div className={styles.homeContainer}>
        <MainSlider />
        <RepairTypesContainer />

        <section className={styles.calculatorContainer}>
          <CalculatorItem
            title='Розрахуйте вартість ремонту'
          />
        </section>

        <section className={styles.ourServicesSection}>
          <OurServices />
        </section>

        <ChooseUs />
        <Achievements />
        <CustomMap />
        <AnyQuestions />
      </div>
    </PageWrapper>
  )
}

export default Home
