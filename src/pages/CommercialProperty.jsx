import React from 'react'
import styles from '../styles/commercialProperty.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import Portfolio from '@components/Portfolio/Portfolio'

const item = {
  title: 'ремонт офісів',
  description:
    'Компанія «HOME WORK» виконує професійний ремонт офісів, та іншої коммерційної нерухомості.',
  imgUrl: '/commercialPropertyImgs/img1.png',
  text1:
    'У нас працюють тільки досвідчені співробітники. У кожного своя спеціалізація - інженер, електрик, плиточник, сантехник, тесляр. Бригади використовують професійне обладнання: прожектори, будівники площин Bosch, нівеліри, лазерні вимірювальні інструменти.',
}

const portfolio = {
  title: 'портфоліо',
  imgSrcs: [
    '/commercialPropertyImgs/portfolio/img1.png',
    '/commercialPropertyImgs/portfolio/img2.png',
    '/commercialPropertyImgs/portfolio/img3.png',
    '/commercialPropertyImgs/portfolio/img4.png',
    '/commercialPropertyImgs/portfolio/img5.png',
    '/commercialPropertyImgs/portfolio/img6.png',
    '/commercialPropertyImgs/portfolio/img1.png',
    '/commercialPropertyImgs/portfolio/img2.png',
    '/commercialPropertyImgs/portfolio/img3.png',
    '/commercialPropertyImgs/portfolio/img4.png',
  ],
  alt: 'commercial property example',
}

const CommercialProperty = () => {
  return (
    <PageWrapper>
      <div>
        <section className={styles.mainContentContainer}>
          <div className={styles.adviceFormContainer}>
            <AdviceFormContainer item={item} />
          </div>
        </section>

        <section className={styles.dropDownContainer}></section>

        <section className={styles.portfolioContainer}>
          <Portfolio data={portfolio} />
        </section>
      </div>
    </PageWrapper>
  )
}

export default CommercialProperty
