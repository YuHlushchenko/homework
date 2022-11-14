import React from 'react'
import styles from '../styles/commercialProperty.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'
import Portfolio from '@components/Portfolio/Portfolio'
import AccordionContainer from '@components/AccordionContainer/AccordionContainer'

const item = {
  title: 'ремонт офісів',
  description:
    'Компанія «HOME WORK» виконує професійний ремонт офісів, та іншої коммерційної нерухомості.',
  imgUrl: '/commercialPropertyImgs/img1.webp',
  text1:
    'У нас працюють тільки досвідчені співробітники. У кожного своя спеціалізація - інженер, електрик, плиточник, сантехник, тесляр. Бригади використовують професійне обладнання: прожектори, будівники площин Bosch, нівеліри, лазерні вимірювальні інструменти.',
}

const portfolio = {
  title: 'портфоліо',
  imgSrcs: [
    '/commercialPropertyImgs/portfolio/img1.webp',
    '/commercialPropertyImgs/portfolio/img2.webp',
    '/commercialPropertyImgs/portfolio/img3.webp',
    '/commercialPropertyImgs/portfolio/img4.webp',
    '/commercialPropertyImgs/portfolio/img5.webp',
    '/commercialPropertyImgs/portfolio/img6.webp',
    '/commercialPropertyImgs/portfolio/img1.webp',
    '/commercialPropertyImgs/portfolio/img2.webp',
    '/commercialPropertyImgs/portfolio/img3.webp',
    '/commercialPropertyImgs/portfolio/img4.webp',
  ],
  alt: 'commercial property example',
}

const accordion = {
  title: 'мИ НАДАЄМО:',
  description: 'Компанія «HOME WORK» виконує професійний ремонт офісів, та іншої коммерційної нерухомості.',
  option: 'commercialProperty',
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

        <section className={styles.accordionContainer}>
          <AccordionContainer data={accordion} />
        </section>

        <section className={styles.portfolioContainer}>
          <Portfolio data={portfolio} />
        </section>
      </div>
    </PageWrapper>
  )
}

export default CommercialProperty
