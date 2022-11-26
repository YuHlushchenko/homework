import styles from './OurServices.module.sass'

const ourServicesData = [
  {
    title: 'Ремонт квартир під ключ',
    imgUrl: '/ourServicesBackgrounds/img1.webp',
  },
  {
    title: 'Дизайн інтер’єру',
    imgUrl: '/ourServicesBackgrounds/img2.webp',
  },
  {
    title: 'Будівництво будинків',
    imgUrl: '/ourServicesBackgrounds/img3.webp',
  },
]

const OurServices = () => {
  return (
    <div className={styles.ourServicesContainer}>
      <h2>наші послуги</h2>
      <p>
        Ми проводимо ремонтно-будівничі роботи в квартирах будь-якого типу,{' '}
        <br /> площі і технічного стану
      </p>

      <div className={styles.servicesContainer}>
        {
          ourServicesData && ourServicesData.map((item) => {
            return <div
              key={item.title}
              className={`${styles.serviceBlock} ${styles.img}`}
              style={{ backgroundImage: `url(${item.imgUrl})`}}
            >
              <div className={styles.bottomContainer}>
                <span>{item.title}</span>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default OurServices
