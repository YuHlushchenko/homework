import React from 'react'
import styles from '../styles/apartmentDesignItem.module.sass'
import { useParams } from 'react-router-dom'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import Portfolio from '../components/Portfolio/Portfolio'

const options = {
  project: {
    adviceForm: {
      title: 'ДИЗАЙН ПРОЄКТ',
      imgUrl: '/apartmentDesignPageImgs/moreDetails/img1.png',
    },
    portfolio: {
      title: 'приклади дизайн проєкту',
      imgSrcs: [
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
        '/apartmentDesignPageImgs/projectExamples1/img1.png',
      ],
      alt: 'apartment design example'
    },
  },

  visualisation: {
    adviceForm: {
      title: '3d візуалізація',
      imgUrl: '/apartmentDesignPageImgs/moreDetails/img2.png',
    },
    portfolio: {
      title: 'приклади дизайн проєкту',
      imgSrcs: [
        '/apartmentDesignPageImgs/projectExamples2/img1.png',
        '/apartmentDesignPageImgs/projectExamples2/img2.png',
        '/apartmentDesignPageImgs/projectExamples2/img3.png',
        '/apartmentDesignPageImgs/projectExamples2/img4.png',
        '/apartmentDesignPageImgs/projectExamples2/img5.png',
        '/apartmentDesignPageImgs/projectExamples2/img6.png',
        '/apartmentDesignPageImgs/projectExamples2/img1.png',
        '/apartmentDesignPageImgs/projectExamples2/img2.png',
        '/apartmentDesignPageImgs/projectExamples2/img3.png',
        '/apartmentDesignPageImgs/projectExamples2/img4.png',
      ],
      alt: 'apartment design example'
    },
  },

  placement: {
    adviceForm: {
      title: 'План розміщення меблів',
      imgUrl: '/apartmentDesignPageImgs/moreDetails/img3.png',
    },
    portfolio: {
      title: 'План розміщення меблів: ',
      imgSrcs: [
        '/apartmentDesignPageImgs/projectExamples3/img1.png',
        '/apartmentDesignPageImgs/projectExamples3/img2.png',
        '/apartmentDesignPageImgs/projectExamples3/img3.png',
        '/apartmentDesignPageImgs/projectExamples3/img4.png',
        '/apartmentDesignPageImgs/projectExamples3/img5.png',
        '/apartmentDesignPageImgs/projectExamples3/img6.png',
        '/apartmentDesignPageImgs/projectExamples3/img1.png',
        '/apartmentDesignPageImgs/projectExamples3/img2.png',
        '/apartmentDesignPageImgs/projectExamples3/img3.png',
        '/apartmentDesignPageImgs/projectExamples3/img4.png',
      ],
      alt: 'apartment design example'
    },
  },
}

const ApartmentDesignItem = () => {
  const { name } = useParams()

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

              <section className={styles.tableContainer}>

              </section>

              <section
                className={styles.portfolioContainer}
              >
                <Portfolio
                  data={options[item].portfolio}
                />
              </section>

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
