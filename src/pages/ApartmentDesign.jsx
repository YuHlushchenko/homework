import React from 'react'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/apartmentDesign.module.sass'

const ApartmentDesign = () => {
  return (
    <PageWrapper>
      <div className={styles.apartmentDesignContainer}>
        <section className={styles.moreDetailsContainer}>
          <MoreDetailsContainer option={'apartmentDesign'} />
        </section>
      </div>
    </PageWrapper>
  )
}

export default ApartmentDesign
