import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './CalculatorItem.module.sass'
import List from '../List/List'
import Range from '../Range/Range'

const list = {
  rooms: ['Студія', 'Однокімнатна', 'Двокімнатна', 'Трикімнатна'],
  tariff: ['Економ', 'Євроремонт', 'Бізнес'],
  apartmentType: ['Новобудова', 'Вторинний ринок'],
}

const CalculatorItem = ({ title = '' }) => {
  const [rangeValue, setRangeValue] = useState(44)
  const [WSValue, setWSValue] = useState('separate')
  const [locationValue, setLocationValue] = useState('IF')
  const [roomValue, setRoomValue] = useState('Студія')
  const [tariffValue, setTariffValue] = useState('Економ')
  const [apartmentTypeValue, setApartmentTypeValue] = useState('Новобудова')

  const [price, setPrice] = useState('21 800')

  const rangeHandler = (value) => {
    setRangeValue(Number(value))
  }

  const listHandler = (listItem, value) => {
    switch (listItem) {
      case 'rooms':
        setRoomValue(value)
        break
      case 'tariff':
        setTariffValue(value)
        break
      case 'apartmentType':
        setApartmentTypeValue(value)
        break
    }
  }

  const radioHandler = (key, value) => {
    switch (key) {
      case 'WS':
        setWSValue(value)
        break
      case 'location':
        setLocationValue(value)
        break
    }
  }

  const calcPrice = () => {
    let res = rangeValue * 250

    switch (roomValue) {
      case 'Студія':
        res *= 1.5
        break
      case 'Однокімнатна':
        res *= 1.1
        break
      case 'Двокімнатна':
        res *= 1.2
        break
      case 'Трикімнатна':
        res *= 1.3
        break
    }

    switch (tariffValue) {
      case 'Економ':
        res *= 1.1
        break
      case 'Євроремонт':
        res *= 1.4
        break
      case 'Бізнес':
        res *= 1.5
        break
    }

    switch (apartmentTypeValue) {
      case 'Новобудова':
        res *= 1.2
        break
      case 'Вторинний ринок':
        res *= 1.1
        break
    }

    if (WSValue === 'shared') {
      res *= 0.85
    }

    if (locationValue === 'outOfCity') {
      res *= 1.25
    }

    res = numberToString(res)

    setPrice(res)
  }

  // const numberToString = (price) => {
  //   const roundedPrice = `${Math.ceil(Math.round(price) / 100) * 100}`
  //   const step = 3

  //   const iteration = Math.floor(roundedPrice.length / step)
  //   console.log(roundedPrice, iteration)

  //   let subStrings = ''

  //   for (let i = 1; i <= iteration; i++) {
  //     const prevIndex = roundedPrice.length - i * step
  //     subStrings =
  //       roundedPrice.slice(prevIndex, prevIndex + step) + ' ' + subStrings
  //     console.log(subStrings)
  //     if (i === iteration) {
  //       subStrings = roundedPrice.slice(0, prevIndex) + ' ' + subStrings
  //     }
  //   }

  //   return subStrings
  // }

  const numberToString = (price) => {
    const roundedPrice = (Math.ceil(Math.round(price) / 100)) * 100
    let priceArr = String(roundedPrice).split('')
    let res = []
    
    priceArr.reverse().map((item, index) => {
      if(index % 3 === 0 && index !== 0) {
        res.push(' ', item)
      } else {
        res.push(item)
      }
    })
    
    return res.reverse()
  }

  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}
      <div className={styles.calculatorContainer}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <div className={styles.inputContainer}>
              <p>Кімнатність:</p>
              <List
                list={list.rooms}
                listHandler={listHandler}
                listName={'rooms'}
              />
            </div>

            <div className={styles.inputContainer}>
              <p>Загальна площа:</p>
              <div className={styles.rangeContainer}>
                <div className={styles.rangeInputContainer}>
                  <input
                    onChange={(e) => rangeHandler(e.target.value)}
                    type="number"
                    min="15"
                    max="120"
                    value={rangeValue}
                  />
                  <p className={styles.squareMetre}>
                    м<sup>2</sup>
                  </p>
                </div>

                <Range rangeValue={rangeValue} rangeHandler={rangeHandler} />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <p>Ремонт по тарифу:</p>
              <List
                list={list.tariff}
                listHandler={listHandler}
                listName={'tariff'}
              />
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.inputContainer}>
              <p>Тип квартири:</p>
              <List
                list={list.apartmentType}
                listHandler={listHandler}
                listName={'apartmentType'}
              />
            </div>

            <div className={styles.inputContainer}>
              <p>Санвузол:</p>
              <div className={styles.radioBtnsContainer}>
                <div className={styles.radio}>
                  <input
                    onChange={(e) => radioHandler('WS', e.target.value)}
                    type="radio"
                    defaultChecked
                    value="separate"
                    id="separate"
                    name="WS"
                  />
                  <label htmlFor="separate">Роздільний</label>
                </div>

                <div className={styles.radio}>
                  <input
                    onChange={(e) => radioHandler('WS', e.target.value)}
                    type="radio"
                    value="shared"
                    id="shared"
                    name="WS"
                  />
                  <label htmlFor="shared">Спільний</label>
                </div>
              </div>
            </div>

            <div className={styles.inputContainer}>
              <p>Локація:</p>
              <div className={styles.radioBtnsContainer}>
                <div className={styles.radio}>
                  <input
                    onChange={(e) => radioHandler('location', e.target.value)}
                    type="radio"
                    defaultChecked
                    value="IF"
                    id="IF"
                    name="location"
                  />
                  <label htmlFor="IF">Івано-Франківськ</label>
                </div>

                <div className={styles.radio}>
                  <input
                    onChange={(e) => radioHandler('location', e.target.value)}
                    type="radio"
                    value="outOfCity"
                    id="outOfCity"
                    name="location"
                  />
                  <label htmlFor="outOfCity">За містом</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <button onClick={calcPrice}>Розрахувати вартість</button>
          <div className={styles.priceContainer}>
            <p>Всього:</p>
            <h6>{price}$</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

CalculatorItem.propTypes = {
  title: PropTypes.string,
}

export default CalculatorItem
