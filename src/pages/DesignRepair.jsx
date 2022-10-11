import React from 'react'
import styles from '../styles/designRepair.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import Portfolio from '@components/Portfolio/Portfolio'


const item = {
  title: 'Дизайнерський ремонт під ключ',
  imgUrl: '/designRepairImgs/img1.png',
  text1:
    'Багато хто хоче зробити ремонт у своїй квартирі, але не всім подобаються стандартні рішення та ідеї. У такому разі можна обрати дизайнерський ремонт. Фахівці допоможуть підібрати необхідне планування, відповідні матеріали, всі рішення в інтер\'єрі будуть розроблені саме під вас та ваші побажання.',
  text2:
    'Такий ремонт зазвичай передбачає створення дизайн-проекту, що розробляється індивідуально під замовника. При цьому будуть враховані можливості та особливості простору, ваші побажання та бюджет. Також можуть бути змінені комунікації, виконано перепланування приміщення. Дизайн-проект вийде унікальним та особливим.',
}

const portfolio = {
  title: 'портфоліо',
  imgSrcs: [
    '/designRepairImgs/portfolio/img1.png',
    '/designRepairImgs/portfolio/img2.png',
    '/designRepairImgs/portfolio/img3.png',
    '/designRepairImgs/portfolio/img4.png',
    '/designRepairImgs/portfolio/img5.png',
    '/designRepairImgs/portfolio/img6.png',
    '/designRepairImgs/portfolio/img1.png',
    '/designRepairImgs/portfolio/img2.png',
    '/designRepairImgs/portfolio/img3.png',
    '/designRepairImgs/portfolio/img4.png',
  ],
  alt: 'commercial property example'
}

const DesignRepair = () => {
  return (
    <PageWrapper>
      <div className={styles.designRepairContainer}>
        <section className={styles.adviceFormContainer}>
          <AdviceFormContainer item={item} />
        </section>

        <section
          className={styles.portfolioContainer}
        >
          <Portfolio
            data={portfolio}
          />
        </section>

        <section className={styles.tableContainer}>

        </section>

        <div className={styles.mainTextContainer}>

        </div>
      </div>
    </PageWrapper>
  )
}

export default DesignRepair
