import PageWrapper from '@components/PageWrapper/PageWrapper'
import styles from '../styles/promotions.module.sass'
import PromotionItem from '@components/PromotionItem/PromotionItem'

const promotions = [
  {
    imgSrc: '/promotionsImgs/img1.webp',
    imgAlt: 'furniture',
    isReverse: false,
    titleText: 'Розумний Дім зі знижкою',
    discount: ' - 50%',
    date: '30.09.2021',
    details:
      'При замовленні ремонту в компанії Свої Стіни - діє знижка 50% на монтаж системи Розумного Будинку',
  },

  {
    imgSrc: '/promotionsImgs/img2.webp',
    imgAlt: 'furniture',
    isReverse: true,
    titleText: 'Дизайн-проект в подарунок',
    discount: '',
    date: '30.09.2021',
    details:
      'При замовленні ремонту в компанії "Свої Стіни" - дизайн проект в подарунок',
  },
]

const Promotions = () => {
  return (
    <PageWrapper>
      <section className={styles.promotionsSectionContainer}>
        <div className={styles.titleContainer}>
          <h2>Акції та спецпропозиції</h2>
          <p>
            Ми намагаємося, щоб співпраця кожного клієнта з нашою компанією{' '}
            <br /> була максимально приємна і вигідна.
          </p>
        </div>

        <div className={styles.promotionBlocksContainer}>
          {promotions.map((item, index) => {
            return (
              <div className={styles.promtionItemContainer} key={index}>
                <PromotionItem
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  isReverse={item.isReverse}
                  titleText={item.titleText}
                  discount={item.discount}
                  date={item.date}
                  details={item.details}
                />
              </div>
            )
          })}
        </div>
      </section>
    </PageWrapper>
  )
}

export default Promotions
