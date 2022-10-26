import React from 'react'
import PageWrapper from '@components/PageWrapper/PageWrapper'
import styles from '../styles/calculator.module.sass'
import CalculatorItem from '../components/CalculatorItem/CalculatorItem'

const Calculator = () => {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <CalculatorItem title='Розрахуйте вартість ремонту' />
      </div>
    </PageWrapper>
  )
}

export default Calculator
