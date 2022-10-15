import React from 'react'
import styles from '../styles/designRepair.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import Portfolio from '@components/Portfolio/Portfolio'
import TableContainer from '@components/TableContainer/TableContainer'

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
  alt: 'commercial property example',
}

const table = {
  title: 'Детальніше, що саме входить у вартість:',
  description: 'Коли дизайн-проект буде узгоджено та затверджено бюджет - починаються роботи з ремонту. Вони складаються з наступних основних етапів:',
  text: 'Спочатку забираються старі матеріали та комунікації. Якщо потрібне перепланування приміщення, демонтують зайві перегородки, будуються нові. Потім прокладається електропроводка відповідно до дизайн-проекту, де видно розміщення побутових та освітлювальних приладів.',
  tableData: [
    'Демонтажні - монтажні роботи ',
    'Монтаж електричних кабелів',
    'Штукатурні роботи',
    'Прокладання труб',
    'Пристрій стяжки',
    'Монтажні роботи',
    'Фінішне оздоблення',
    'Декорування інтер\'єру',
    'Клінінг',
  ]
}


const DesignRepair = () => {
  return (
    <PageWrapper>
      <div className={styles.designRepairContainer}>
        <section className={styles.adviceFormContainer}>
          <AdviceFormContainer item={item} />
        </section>

        <section className={styles.portfolioContainer}>
          <Portfolio data={portfolio} />
        </section>

        <section
          className={styles.tableContainer}
          style={{
            backgroundImage: 'url(/servicesPageImgs/background.png)',
          }}>
          <TableContainer data={table} />
        </section>

        <div className={styles.textContainer}>
          <h2>Про вартість</h2>
          <div className={styles.line}></div>
          <p>Майже неможливо сказати точно, скільки коштуватиме дизайнерський ремонт квартири. Зазвичай вартість залежить від різних критеріїв.
            В принципі можна отримати не дуже дорогий дизайнерський ремонт у маленькому житлі. Такий варіант може бути реалізований тоді, коли не замовляються дорогі матеріали та меблі і не потрібно повністю міняти планування, особливо з демонтажем несучих конструкцій.
          </p>
          <p>
            У тих, хто має велику квартиру, бажає зробити її повністю унікальною та ексклюзивною, ремонт обійдеться у чималу суму.
            Якщо ви хочете приблизно дізнатися, скільки складе вартість оздоблювальних матеріалів та меблів, фахівці нашої компанії підберуть вам відповідні варіанти та розрахують орієнтовний бюджет.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default DesignRepair
