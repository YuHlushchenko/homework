import styles from './AdviceForm.module.sass'
import { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Notification from '@components/Notification/Notification'

const AdviceForm = ({ imgUrl }) => {
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState({
    message: '',
    isSuccess: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target))

    const TG_CHAT_ID = process.env.REACT_APP_TG_CHAT_ID
    const TG_URL_API = process.env.REACT_APP_TG_URL_API

    let message = '<b>Запит "Консультація фахівця"</b>\n'
    message += `<b>Ім'я: </b> ${data.name} \n`
    message += `<b>Номер телефону: </b> ${data.number}`

    axios.post(TG_URL_API, {
      chat_id: TG_CHAT_ID,
      parse_mode: 'html',
      text: message,
    }).then(() => {
      e.target.reset()

      setNotification({
        message: 'Ваш запит успішно відправлено. Ми Вам зателефонуємо.',
        isSuccess: true,
      })
    }).catch((error) => {
      setNotification({
        message: 'Схоже сталася помилка. Запит НЕ надіслано.',
        isSuccess: false,
      })

      console.error(error)
    }).finally(() => {
      setShowNotification(true)

      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    })
  }

  return (
    <div className={styles.adviceForm}>
      {
        showNotification && <Notification
          textNotification={notification}
          setShowNotification={setShowNotification}
        />
      }
      <div
        className={styles.imgContainer}
        style={{ backgroundImage: `url(${imgUrl})` }}></div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputsContainer}>
            <input name="name" type="text" placeholder="Ваше Ім’я" />
            <input name="number" type="number" placeholder="+38 09 000 00 00" />
          </div>

          <div className={styles.bttnContainer}>
            <button type="submit">Консультація фахівця</button>
          </div>
        </form>
      </div>
    </div>
  )
}

AdviceForm.propTypes = {
  imgUrl: PropTypes.string,
}

export default AdviceForm
