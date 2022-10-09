import React from 'react'
import styles from '../styles/servicesItem.module.sass'
import { useParams } from 'react-router-dom'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import Page404 from '@pages/Page404'

const ServicesItem = () => {
  const { name } = useParams()

  const options = {
    economy: {
      adviceForm: {
        title: 'економ варіант',
        description: '',
        imgUrl: '/servicesPageImgs/moreDetails/img1.png',
        subTitle: '',
        text1:
          'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
        text2:
          "Вам залишається лише оформити заявку, поетапно внести оплату та в'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.",
        text3: '',
      },
      portfolio: {},
    },

    eurorepair: {
      adviceForm: {
        title: 'ремонт квартири євроремонт',
        imgUrl: '/servicesPageImgs/moreDetails/img2.png',
        text1:
          'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
        text2:
          "Вам залишається лише оформити заявку, поетапно внести оплату та в'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.",
      },
      portfolio: {},
    },

    business: {
      adviceForm: {
        title: 'ремонт квартири бізнес',
        imgUrl: '/servicesPageImgs/moreDetails/img3.png',
        text1:
          'Послуги є комплексними та включають всі витрати як на матеріали, так і на роботи. Одна компанія бере на себе все: виміри та розробку дизайн-проекту, електрику, вирівнювання стін, сантехніку, монтаж стель, обклеювання шпалерами, укладання плитки та ламінату.  ',
        text2:
          "Вам залишається лише оформити заявку, поетапно внести оплату та в'їхати до готового затишного будинку. До виконання усіх заходів залучаються високоспеціалізовані майстри – дизайнери, архітектори, будівельники, інженери, електрики та інші. Наш підхід до співпраці позбавить вас від хвилювання та напруженості. Весь процес повністю контролюють профільні спеціалісти.",
      },
      portfolio: {},
    },
  }

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

              <section className={styles.portfolioContainer}></section>

              <section
                className={styles.backgroundContainer}
                style={{
                  backgroundImage: 'url(/servicesPageImgs/background.png)',
                }}>
                <section className={styles.tableContainer}></section>

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
