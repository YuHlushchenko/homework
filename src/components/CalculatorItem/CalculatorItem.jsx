import React from 'react'
import PropTypes from 'prop-types'
import styles from './CalculatorItem.module.sass'
import List from '../List/List'

const list = {
  rooms: [
    'Студія',
    'Однокімнатна',
    'Двокімнатна',
    'Трикімнатна',
  ],
  tariff: [
    'Економ',
    'Євроремонт',
    'Бізнес',
  ],
  apartmentType: [
    'Новобудова',
    'Вторинний ринок',
  ]
}

const CalculatorItem = ({ title = '' }) => {
  return (
    <div className={styles.container}>
      {
        title && <h2>{title}</h2>
      }
      <div className={styles.calculatorContainer}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <div className={styles.inputContainer}>
              <p>Кімнатність:</p>
              <List list={list.rooms} />
            </div>

            <div className={styles.inputContainer}>
              <p>Загальна площа:</p>

            </div>

            <div className={styles.inputContainer}>
              <p>Ремонт по тарифу:</p>
              <List list={list.tariff} />
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.inputContainer}>
              <p>Тип квартири:</p>
              <List list={list.apartmentType} />
            </div>

            <div className={styles.inputContainer}>
              <p>Санвузол:</p>
              <div className={styles.radioBtnsContainer}>

                <div className={styles.radio}>
                  <input type="radio" defaultChecked value='separate' id='separate' name='WS' />
                  <label htmlFor="separate">Роздільний</label>
                </div>

                <div className={styles.radio}>
                  <input type="radio" value='shared' id='shared' name='WS' />
                  <label htmlFor="shared">Спільний</label>
                </div>

              </div>
            </div>

            <div className={styles.inputContainer}>
              <p>Локація:</p>
              <div className={styles.radioBtnsContainer}>

                <div className={styles.radio}>
                  <input type="radio" defaultChecked value='IF' id='IF' name='location' />
                  <label htmlFor="IF">Івано-Франківськ</label>
                </div>

                <div className={styles.radio}>
                  <input type="radio" value='outOfCity' id='outOfCity' name='location' />
                  <label htmlFor="outOfCity">За містом</label>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <button>Розрахувати вартість</button>
          <div className={styles.priceContainer}>
            <p>Всього:</p>
            <h6>16 000$</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

CalculatorItem.propTypes = {
  title: PropTypes.string
}

export default CalculatorItem