import React from 'react'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/smartHouse.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'

const SmartHouse = () => {
  return (
    <PageWrapper>
      <div className={styles.smartHouseContainer}>
        <section className={styles.moreDetailsContainer}>
          <MoreDetailsContainer option={'smartHouse'} />
        </section>
      </div>
    </PageWrapper>
  )
}

export default SmartHouse
