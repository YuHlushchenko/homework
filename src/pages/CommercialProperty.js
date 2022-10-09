import React from 'react'
import styles from '../styles/commercialProperty.module.sass'
import Footer from '../components/Footer/Footer'
import AdviceFormContainer from '../components/AdviceFormContainer/AdviceFormContainer'

const CommercialProperty = () => {
  return (
    <div>
      <section className={styles.mainContentContainer}>
        <div className={styles.adviceFormContainer}>
          <AdviceFormContainer
            title={'ремонт офісів'}
            description={'Компанія «HOME WORK» виконує професійний ремонт офісів, та іншої коммерційної нерухомості.'}
            imgUrl={'/commercialPropertyImgs/img1.png'}
            text1={"У нас працюють тільки досвідчені співробітники. У кожного своя спеціалізація - інженер, електрик, плиточник, сантехник, тесляр. Бригади використовують професійне обладнання: прожектори, будівники площин Bosch, нівеліри, лазерні вимірювальні інструменти. "}
          />
        </div>

      </section>

      <section className={styles.footerContainer}>
        <Footer />
      </section>
    </div>
  )
}

export default CommercialProperty