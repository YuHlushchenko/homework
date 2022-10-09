import React from 'react'
import styles from '../styles/designRepair.module.sass'
import Footer from '../components/Footer/Footer'
import AdviceFormContainer from '../components/AdviceFormContainer/AdviceFormContainer'

const DesignRepair = () => {


  return (
    <div className={styles.designRepairContainer}>
      <section className={styles.mainContentContainer}>
        <div className={styles.adviceFormContainer}>
          <AdviceFormContainer
            title={'Дизайнерський ремонт під ключ'}
            imgUrl={'/designRepairImgs/img1.png'}
            text1={"Багато хто хоче зробити ремонт у своїй квартирі, але не всім подобаються стандартні рішення та ідеї. У такому разі можна обрати дизайнерський ремонт. Фахівці допоможуть підібрати необхідне планування, відповідні матеріали, всі рішення в інтер'єрі будуть розроблені саме під вас та ваші побажання."}
            text2={'Такий ремонт зазвичай передбачає створення дизайн-проекту, що розробляється індивідуально під замовника. При цьому будуть враховані можливості та особливості простору, ваші побажання та бюджет. Також можуть бути змінені комунікації, виконано перепланування приміщення. Дизайн-проект вийде унікальним та особливим.'}
          />
        </div>

      </section>

      <section className={styles.footerContainer}>
        <Footer />
      </section>

    </div>
  )
}

export default DesignRepair