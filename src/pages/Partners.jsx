import styles from '../styles/partners.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'

const partners = [
  {
    imgSrc: '/partnersLogos/antei.webp',
    alt: 'antei'
  },
  {
    imgSrc: '/partnersLogos/knauf.webp',
    alt: 'knauf'
  },
  {
    imgSrc: '/partnersLogos/artDoor.webp',
    alt: 'artDoor'
  },
  {
    imgSrc: '/partnersLogos/grohe.webp',
    alt: 'grohe'
  },
]

const Partners = () => {
  return (
    <PageWrapper>
      <section className={styles.partnersSectionContainer}>
        <div className={styles.textContaner}>
          <h2>партнери</h2>
          <p>Наша компанія завжди відкрита для взаємовигідного співробітництва. Ми готові розглянути будь-які пропозиції від постачальників сировини і комплектуючих, дизайнерів, суміжників, торгових мереж і споживачів нашої продукції. При укладанні договору про довгострокову співпрацю ми пропонуємо роботу з нами на особливих умовах, орієнтуючись як на побажання потенційного партнера, так і на пріоритети власної компанії. Угода про партнерство відкриває шлях до зручної системі взаєморозрахунків, ідеально оптимізованої логістиці, спільним рекламним кампаніям і більш ефективному просуванню продукції підприємств-партнерів на український ринок. </p>
        </div>

        <div className={styles.patnersLogosContainer}>
          {
            partners.map((item) => {
              return (
                <div className={styles.logoContainer} key={item.alt}>
                  <img src={item.imgSrc} alt={item.alt} width='100%' />
                </div>
              )
            })
          }
        </div>
      </section>
    </PageWrapper>
  )
}

export default Partners