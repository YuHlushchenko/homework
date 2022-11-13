import React from 'react'
import styles from '../styles/aboutUs.module.sass'
import PageWrapper from '../components/PageWrapper/PageWrapper'

const infoBlocksContent = [
  {
    title: 'Логістика на нас',
    description:
      'Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obcm ipsum dolor sit amet. Est voluptatem dolorem dolor sit amet. Est voluptatem dolorem sem ',
    bgImg: 'img1.png',
  },
  {
    title: 'Поважаємо сусідів',
    description:
      'Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obcm ipsum dolor sit amet. Est voluptatem dolorem sem ',
    bgImg: 'img2.png',
  },
  {
    title: 'Вивозимо сміття',
    description:
      'Loreptatem dolorem dolor sit amet. Est voluptatem dolorem sem ',
    bgImg: 'img3.png',
  },
  {
    title: 'Щоденний звіт',
    description:
      'Lorem ipsum dolor sit amet. Est uptatem dolorem dolor sit amet. Est voluptatem dolorem sem ',
    bgImg: 'img4.png',
  },
  {
    title: 'Вирішуємо всі питання',
    description:
      'Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obcm ipsum dolor sit amet. Est voluptatem dolorem dolor sit amet. Est voluptatem dolorem sem ',
    bgImg: 'img5.png',
  },
  {
    title: 'Контролюємо якість',
    description:
      'Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obcm ipsum dolor sit amet. Est voluptatem dolorem dolor sit amet. Est voluptatem dolorem sem ',
    bgImg: 'img6.png',
  },
]

const AboutUs = () => {
  return (
    <PageWrapper>
      <div className={styles.aboutUsContainer}>
        <section className={styles.mainContentContainer}>
          <div className={styles.topContentContainer}>
            <div className={styles.imgContainer}></div>

            <div className={styles.mainTextContainer}>
              <h2>Про компанію</h2>
              <p>
                Наша компанія виконує професійний ремонт квартир та будинків,
                комерційной нерухомості в Києві та області. Протягом 4 років
                наші бригади виконали більше 130 ремонтів. В нашій команді
                працюють справжні професіонали своєї справи. Середній стаж
                працівників в сфері ремонту більше 10 років.
              </p>
              <p>
                Всі виконроби мають вищу будівельну освіту і досвід робіт більше
                15 років. Протягом 4 років наші бригади виконали більше 130
                ремонтів. В нашій команді працюють справжні професіонали
              </p>
            </div>
          </div>

          <div className={styles.bottomContentContainer}>
            <h2>чому обирають саме нас</h2>
            <p>
              Ми робимо все, щоб ви приймали якомога менше участі в роботах, і{' '}
              <br /> отримали саме той результат, на який очікували
            </p>

            <div className={styles.infoBlocksContainer}>
              {infoBlocksContent.map((item) => {
                return (
                  <div
                    className={`${styles.infoBlock}`}
                    style={{
                      backgroundImage: `url(/aboutUsPageBackgrounds/${item.bgImg})`,
                    }}
                    key={item.title}>
                    <div className={styles.bgCover}>
                      <div className={styles.infoTitle}>
                        <svg
                          width="43"
                          height="43"
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="43" height="43" fill="#DB0000" />
                          <path
                            d="M16.8416 28.0215L10.3199 21.4998L8.146 23.6737L16.8416 32.3692L35.4749 13.7359L33.301 11.562L16.8416 28.0215Z"
                            fill="white"
                          />
                        </svg>

                        <p>{item.title}</p>
                      </div>

                      <div className={styles.infoDescription}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

export default AboutUs
