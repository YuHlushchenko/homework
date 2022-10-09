import React from 'react'
import styles from './MoreDetailsContainer.module.sass'
import MoreDetailsItem from '../MoreDetailsItem/MoreDetailsItem'
import PropTypes from 'prop-types'

const MoreDetailsContainer = ({ option }) => {
  const options = {
    services: [
      {
        imgUrl: '/ServicesPageImgs/moreDetails/img1.png',
        description: 'Ремонт квартири під ключ',
        title: 'Економ варіант',
        price: '300 грн',
        bttnLink: '/services/economy',
        namePage: 'economy',
      },
      {
        imgUrl: '/ServicesPageImgs/moreDetails/img2.png',
        description: 'Ремонт квартири під ключ',
        title: 'євроремонт',
        price: '550 грн',
        bttnLink: '/services/eurorepair',
        namePage: 'eurorepair',
      },
      {
        imgUrl: '/ServicesPageImgs/moreDetails/img3.png',
        description: 'Ремонт квартири під ключ',
        title: 'бізнес',
        price: '880 грн',
        bttnLink: '/services/business',
        namePage: 'business',
      },
    ],

    apartmentDesign: [
      {
        imgUrl: '/apartmentDesignPageImgs/moreDetails/img1.png',
        title: 'ДИЗАЙН ПРОЄКТ',
        price: '10 USD ЗА М',
        bttnLink: '/apartment-design/project',
        namePage: 'project',
      },
      {
        imgUrl: '/apartmentDesignPageImgs/moreDetails/img2.png',
        title: '3D ВІЗУАЛІЗАЦІЯ',
        price: '20 USD ЗА М',
        bttnLink: '/apartment-design/visualisation',
        namePage: 'visualisation',
      },
      {
        imgUrl: '/apartmentDesignPageImgs/moreDetails/img3.png',
        title: 'РОЗМІЩЕННЯ МЕБЛІВ',
        price: '20 USD ЗА М',
        bttnLink: '/apartment-design/placement',
        namePage: 'placement',
      },
    ],

    smartHouse: [
      {
        imgUrl: '/smartHousePageImgs/moreDetails/img1.png',
        title: 'Управління кліматом',
        bttnLink: '/smart-house/climate',
        namePage: 'climate',
      },
      {
        imgUrl: '/smartHousePageImgs/moreDetails/img2.png',
        title: 'управління освітленням',
        bttnLink: '/smart-house/lighting',
        namePage: 'lighting',
      },
      {
        imgUrl: '/smartHousePageImgs/moreDetails/img3.png',
        title: 'система безпеки',
        bttnLink: '/smart-house/security',
        namePage: 'security',
      },
    ],
  }

  return (
    <div className={styles.container}>
      {option === 'services'
        ? options.services.map((item, index) => {
            return (
              <MoreDetailsItem
                key={index}
                imgUrl={item.imgUrl}
                description={item.description}
                title={item.title}
                price={item.price}
                bttnLink={item.bttnLink}
                namePage={item.namePage}
              />
            )
          })
        : option === 'apartmentDesign'
        ? options.apartmentDesign.map((item, index) => {
            return (
              <MoreDetailsItem
                key={index}
                imgUrl={item.imgUrl}
                description={item.description}
                title={item.title}
                price={item.price}
                bttnLink={item.bttnLink}
                namePage={item.namePage}
              />
            )
          })
        : options.smartHouse.map((item, index) => {
            return (
              <MoreDetailsItem
                key={index}
                imgUrl={item.imgUrl}
                description={item.description}
                title={item.title}
                price={item.price}
                bttnLink={item.bttnLink}
                namePage={item.namePage}
              />
            )
          })}
    </div>
  )
}

MoreDetailsContainer.propTypes = {
  option: PropTypes.string,
}

export default MoreDetailsContainer
