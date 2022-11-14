import React from 'react'
import styles from '../styles/servicesItem.module.sass'
import { useParams } from 'react-router-dom'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import Page404 from '@pages/Page404'
import Portfolio from '@components/Portfolio/Portfolio'
import TableContainer from '@components/TableContainer/TableContainer'

const options = {
  economy: {
    adviceForm: {
      title: 'економ варіант',
      description: '',
      imgUrl: '/servicesPageImgs/moreDetails/img1.webp',
      subTitle: '',
      text1:
        'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
      text2:
        'Вам залишається лише оформити заявку, поетапно внести оплату та в\'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.',
      text3: '',
    },
    portfolio: {
      title: 'портфоліо',
      imgSrcs: [
        '/servicesPageImgs/portfolio1/img1.webp',
        '/servicesPageImgs/portfolio1/img2.webp',
        '/servicesPageImgs/portfolio1/img3.webp',
        '/servicesPageImgs/portfolio1/img4.webp',
        '/servicesPageImgs/portfolio1/img5.webp',
        '/servicesPageImgs/portfolio1/img6.webp',
        '/servicesPageImgs/portfolio1/img1.webp',
        '/servicesPageImgs/portfolio1/img2.webp',
        '/servicesPageImgs/portfolio1/img3.webp',
        '/servicesPageImgs/portfolio1/img4.webp',
      ],
      alt: 'service example'
    },
    table: {
      title: 'Детальніше, що саме входить у вартість:',
      description: 'Усі роботи та матеріали входять у вартість ремонту, вам не потрібно більше ничого купляти, тільки завезти свої меблі та речі!',
      text: '',
      tableData: [
        'Дизайн-проект',
        '3D візуалізація',
        'Чорнові матеріали та робота',
        'Чистові роботи',
        'Електромонтажні роботи',
        ' Сантехнічні роботи та мат.',
        'Стелі з гіпсокартону',
        'Фарбування стелі',
        'Фарбування стін',
        'Декоративне оздоблення стін',
        'Паркет',
        'Плитка',
        'Міжкімнатні двері',
        'Змішувачі, душова стійка',
        'Душова кабіна або ванна',
        'Умивальник з вбудованою тумбою',
        'LED дзеркало',
        'Тепла підлога в санвузлі',
        'Бойлер',
        'Підвісний унітаз',
        'Система від протікання води',
        'Фільтр для питної води',
        'Магістральні фільтри води',
        'Ввідний електрощит',
        'Відеодомофон',
        'Система охоронної сигналізації',
        'Кондиціювання',
      ]
    }
  },

  eurorepair: {
    adviceForm: {
      title: 'ремонт квартири євроремонт',
      imgUrl: '/servicesPageImgs/moreDetails/img2.webp',
      text1:
        'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
      text2:
        'Вам залишається лише оформити заявку, поетапно внести оплату та в\'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.',
    },
    portfolio: {
      title: 'портфоліо',
      imgSrcs: [
        '/servicesPageImgs/portfolio2/img1.webp',
        '/servicesPageImgs/portfolio2/img2.webp',
        '/servicesPageImgs/portfolio2/img3.webp',
        '/servicesPageImgs/portfolio2/img4.webp',
        '/servicesPageImgs/portfolio2/img5.webp',
        '/servicesPageImgs/portfolio2/img6.webp',
        '/servicesPageImgs/portfolio2/img1.webp',
        '/servicesPageImgs/portfolio2/img2.webp',
        '/servicesPageImgs/portfolio2/img3.webp',
        '/servicesPageImgs/portfolio2/img4.webp',
      ],
      alt: 'eurorepair example'
    },
    table: {
      title: 'Детальніше, що саме входить у вартість:',
      description: 'Усі роботи та матеріали входять у вартість ремонту, вам не потрібно більше ничого купляти, тільки завезти свої меблі та речі! ',
      text: '',
      tableData: [
        'Дизайн-проект',
        '3D візуалізація',
        'Чорнові матеріали та робота',
        'Чистові роботи',
        'Електромонтажні роботи',
        ' Сантехнічні роботи та мат.',
        'Стелі з гіпсокартону',
        'Фарбування стелі',
        'Фарбування стін',
        'Декоративне оздоблення стін',
        'Паркет',
        'Плитка',
        'Міжкімнатні двері',
        'Змішувачі, душова стійка',
        'Душова кабіна або ванна',
        'Умивальник з вбудованою тумбою',
        'LED дзеркало',
        'Тепла підлога в санвузлі',
        'Бойлер',
        'Підвісний унітаз',
        'Система від протікання води',
        'Фільтр для питної води',
        'Магістральні фільтри води',
        'Ввідний електрощит',
        'Відеодомофон',
        'Система охоронної сигналізації',
        'Кондиціювання',
      ]
    }
  },

  business: {
    adviceForm: {
      title: 'ремонт квартири бізнес',
      imgUrl: '/servicesPageImgs/moreDetails/img3.webp',
      text1:
        'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
      text2:
        'Вам залишається лише оформити заявку, поетапно внести оплату та в\'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.',
    },
    portfolio: {
      title: 'портфоліо',
      imgSrcs: [
        '/servicesPageImgs/portfolio3/img1.webp',
        '/servicesPageImgs/portfolio3/img2.webp',
        '/servicesPageImgs/portfolio3/img3.webp',
        '/servicesPageImgs/portfolio3/img4.webp',
        '/servicesPageImgs/portfolio3/img5.webp',
        '/servicesPageImgs/portfolio3/img6.webp',
        '/servicesPageImgs/portfolio3/img1.webp',
        '/servicesPageImgs/portfolio3/img2.webp',
        '/servicesPageImgs/portfolio3/img3.webp',
        '/servicesPageImgs/portfolio3/img4.webp',
      ],
      alt: 'business example'
    },
    table: {
      title: 'Детальніше, що саме входить у вартість:',
      description: 'Усі роботи та матеріали входять у вартість ремонту, вам не потрібно більше ничого купляти, тільки завезти свої меблі та речі! ',
      text: '',
      tableData: [
        'Дизайн-проект',
        '3D візуалізація',
        'Чорнові матеріали та робота',
        'Чистові роботи',
        'Електромонтажні роботи',
        ' Сантехнічні роботи та мат.',
        'Стелі з гіпсокартону',
        'Фарбування стелі',
        'Фарбування стін',
        'Декоративне оздоблення стін',
        'Паркет',
        'Плитка',
        'Міжкімнатні двері',
        'Змішувачі, душова стійка',
        'Душова кабіна або ванна',
        'Умивальник з вбудованою тумбою',
        'LED дзеркало',
        'Тепла підлога в санвузлі',
        'Бойлер',
        'Підвісний унітаз',
        'Система від протікання води',
        'Фільтр для питної води',
        'Магістральні фільтри води',
        'Ввідний електрощит',
        'Відеодомофон',
        'Система охоронної сигналізації',
        'Кондиціювання',
      ]
    }
  },
}

const ServicesItem = () => {
  const { name } = useParams()
  const optionsKeys = Object.keys(options)

  return options[name] ? (
    <PageWrapper>
      <>
        {optionsKeys.map((item, index) => {
          return name === item ? (
            <div key={index} className={styles.servicesItemContainer}>
              <section className={styles.adviceFormContainer}>
                <AdviceFormContainer item={options[item].adviceForm} />
              </section>

              <section
                className={styles.portfolioContainer}
              >
                <Portfolio
                  data={options[item].portfolio}
                />
              </section>

              <section
                className={styles.backgroundContainer}
                style={{
                  backgroundImage: 'url(/servicesPageImgs/background.png)',
                }}>

                <section className={styles.tableContainer}>
                  <TableContainer data={options[item].table} />
                </section>

                <section className={styles.moreDetailsContainer}>
                  <MoreDetailsContainer
                    option={'services'} // 'services' / 'apartmentDesign' / 'smartHause'
                  />
                </section>

              </section>
            </div>
          ) : undefined
        })}
      </>
    </PageWrapper>
  ) : (
    <Page404 />
  )
}

export default ServicesItem
