import React from 'react'
import styles from '../styles/apartmentDesignItem.module.sass'
import { useParams } from 'react-router-dom'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'

const ApartmentDesignItem = () => {
  const { name } = useParams()

  const options = {
    project: {
      adviceForm: {
        title: 'ДИЗАЙН ПРОЄКТ',
        imgUrl: '/apartmentDesignPageImgs/moreDetails/img1.png',
      },
      portfolio: {},
    },

    visualisation: {
      adviceForm: {
        title: '3d візуалізація',
        imgUrl: '/apartmentDesignPageImgs/moreDetails/img2.png',
      },
      portfolio: {},
    },

    placement: {
      adviceForm: {
        title: 'План розміщення меблів',
        imgUrl: '/apartmentDesignPageImgs/moreDetails/img3.png',
      },
      portfolio: {},
    },
  }

  const optionsKeys = Object.keys(options)

  return (
    <PageWrapper>
      <>
        {optionsKeys.map((item, index) => {
          return name === item ? (
            <div key={index} className={styles.apartmentDesignItemContainer}>
              <section className={styles.adviceFormContainer}>
                <AdviceFormContainer item={options[item].adviceForm} />
              </section>

              <section></section>
              <section></section>

              <section className={styles.moreDetailsContainer}>
                <MoreDetailsContainer
                  option={'apartmentDesign'} // 'services' / 'apartmentDesign' / 'smartHause'
                />
              </section>
            </div>
          ) : undefined
        })}
      </>
    </PageWrapper>
  )
}

export default ApartmentDesignItem
