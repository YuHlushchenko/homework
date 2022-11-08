import styles from './AdviceForm.module.sass'
import { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Notification from '@components/Notification/Notification'
import { useForm } from 'react-hook-form'

const AdviceForm = ({ imgUrl }) => {
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState({
    message: '',
    isSuccess: false,
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const submit = (dataForm) => {

    const TG_CHAT_ID = process.env.REACT_APP_TG_CHAT_ID
    const TG_URL_API = process.env.REACT_APP_TG_URL_API

    let message = '<b>Запит "Консультація фахівця"</b>\n'
    message += `<b>Ім'я: </b> ${dataForm.name} \n`
    message += `<b>Номер телефону: </b> ${dataForm.number}`

    axios.post(TG_URL_API, {
      chat_id: TG_CHAT_ID,
      parse_mode: 'html',
      text: message,
    }).then(() => {
      reset()

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
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.inputsContainer}>
            {errors.name?.type === 'required' && <p role="alert" style={{ color: '#BD0000', margin: '0 0 5px' }}>Поле не може бути порожнім.</p>}
            {errors.name?.type === 'minLength' && <p role="alert" style={{ color: '#BD0000', margin: '0 0 5px' }}>Не менше трьох символів.</p>}
            {errors.name?.type === 'pattern' && <p role="alert" style={{ color: '#BD0000', margin: '0 0 5px' }}>Неправильний формат даних.</p>}
            <input
              {...register('name', { required: true, minLength: 3, pattern: /^[A-ZЄ-ЯҐa-zа-їґ^']+$/i })}
              type="text"
              placeholder="Ваше Ім’я"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.number?.type === 'required' && <p role="alert" style={{ color: '#BD0000', margin: '0 0 5px' }}>Поле не може бути порожнім.</p>}
            {errors.number?.type === 'minLength' && <p role="alert" style={{ color: '#BD0000', margin: '0 0 5px' }}>Не менше десяти символів.</p>}
            {errors.number?.type === 'pattern' && <p role="alert" style={{ color: '#BD0000', margin: '0 0 5px' }}>Неправильний формат даних.</p>}
            <input
              {...register('number', { required: true, minLength: 10, pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/ })}
              type="number"
              placeholder="+38 09 000 00 00"
              aria-invalid={errors.number ? 'true' : 'false'}
            />
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
