import React from 'react'
import styles from '../styles/commercialProperty.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import AdviceFormContainer from '@components/AdviceFormContainer/AdviceFormContainer'

const item = {
  title: 'ремонт офісів',
  description:
    'Компанія «HOME WORK» виконує професійний ремонт офісів, та іншої коммерційної нерухомості.',
  imgUrl: '/commercialPropertyImgs/img1.png',
  text1:
    'У нас працюють тільки досвідчені співробітники. У кожного своя спеціалізація - інженер, електрик, плиточник, сантехник, тесляр. Бригади використовують професійне обладнання: прожектори, будівники площин Bosch, нівеліри, лазерні вимірювальні інструменти.',
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
      </div>
    </PageWrapper>
  )
}

export default CommercialProperty
