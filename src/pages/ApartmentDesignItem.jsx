import React from 'react'
import styles from '../styles/apartmentDesignItem.module.sass'
import { useParams } from 'react-router-dom'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import Portfolio from '@components/Portfolio/Portfolio'
import TableContainer from '@components/TableContainer/TableContainer'

const options = {
  project: {
    adviceForm: {
      title: 'ДИЗАЙН ПРОЄКТ',
      imgUrl: '/apartmentDesignPageImgs/moreDetails/img1.webp',
    },
    portfolio: {
      title: 'приклади дизайн проєкту',
      imgSrcs: [
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
        '/apartmentDesignPageImgs/projectExamples1/img1.webp',
      ],
      alt: 'apartment design example',
    },
    table: {
      title: 'бАЗОВИЙ ДИЗАЙН ПРОЄКТ:',
      description: '',
      text: '',
      tableData: [
        'Обмірний план-креслення',
        'План після перепланування об\'єкта',
        'План вимикачів',
        'План розміщення кондиціонерів',
        'План розміщення меблів',
        'План розкладки плитки',
        'План розеток з прив\'язками',
        'План розташування обладнання',
        'План демонтажу і монтажу',
        'План стелі',
        'Схема розташування сантехніки',
        'Специфікація матеріалів',
        '',
      ]
    }
  },

  visualisation: {
    adviceForm: {
      title: '3d візуалізація',
      imgUrl: '/apartmentDesignPageImgs/moreDetails/img2.webp',
    },
    portfolio: {
      title: 'приклади дизайн проєкту',
      imgSrcs: [
        '/apartmentDesignPageImgs/projectExamples2/img1.webp',
        '/apartmentDesignPageImgs/projectExamples2/img2.webp',
        '/apartmentDesignPageImgs/projectExamples2/img3.webp',
        '/apartmentDesignPageImgs/projectExamples2/img4.webp',
        '/apartmentDesignPageImgs/projectExamples2/img5.webp',
        '/apartmentDesignPageImgs/projectExamples2/img6.webp',
        '/apartmentDesignPageImgs/projectExamples2/img1.webp',
        '/apartmentDesignPageImgs/projectExamples2/img2.webp',
        '/apartmentDesignPageImgs/projectExamples2/img3.webp',
        '/apartmentDesignPageImgs/projectExamples2/img4.webp',
      ],
      alt: 'apartment design example',
    },
    table: {
      title: 'бАЗОВИЙ ДИЗАЙН ПРОЄКТ:',
      description: '',
      text: '',
      tableData: [
        'Обмірний план-креслення',
        'План після перепланування об\'єкта',
        'План вимикачів',
        'План розміщення кондиціонерів',
        'План розміщення меблів',
        'План розкладки плитки',
        'План розеток з прив\'язками',
        'План розташування обладнання',
        'План демонтажу і монтажу',
        'План стелі',
        'Схема розташування сантехніки',
        'Специфікація матеріалів',
      ]
    }
  },

  placement: {
    adviceForm: {
      title: 'План розміщення меблів',
      imgUrl: '/apartmentDesignPageImgs/moreDetails/img3.webp',
    },
    portfolio: {
      title: 'План розміщення меблів: ',
      imgSrcs: [
        '/apartmentDesignPageImgs/projectExamples3/img1.webp',
        '/apartmentDesignPageImgs/projectExamples3/img2.webp',
        '/apartmentDesignPageImgs/projectExamples3/img3.webp',
        '/apartmentDesignPageImgs/projectExamples3/img4.webp',
        '/apartmentDesignPageImgs/projectExamples3/img5.webp',
        '/apartmentDesignPageImgs/projectExamples3/img6.webp',
        '/apartmentDesignPageImgs/projectExamples3/img1.webp',
        '/apartmentDesignPageImgs/projectExamples3/img2.webp',
        '/apartmentDesignPageImgs/projectExamples3/img3.webp',
        '/apartmentDesignPageImgs/projectExamples3/img4.webp',
      ],
      alt: 'apartment design example',
    },
    table: {
      title: 'Що входить до плану разташування меблів?',
      description: '',
      text: '',
      tableData: [
        'Обмірний план квартири',
        'План розташування меблів',
        'Консультація дізайнера',
      ]
    }
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

              <section
                className={styles.tableContainer}
                style={{
                  backgroundImage: 'url(/servicesPageImgs/background.png)',
                }}>
                <TableContainer data={options[item].table} />
              </section>

              <section className={styles.portfolioContainer}>
                <Portfolio data={options[item].portfolio} />
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
