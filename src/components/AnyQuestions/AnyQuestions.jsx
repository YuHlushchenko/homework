import { useState } from 'react'
import styles from './AnyQuestions.module.sass'
import Button from '../UI/Button/Button'
import axios from 'axios'
import Notification from '@components/Notification/Notification'

const AnyQuestions = () => {
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

        let message = '<b>Запит "Залишились питання"</b>\n'
        message += `<b>Ім'я: </b> ${data.name} \n`
        message += `<b>Номер телефону: </b> ${data.number} \n`
        message += `<b>Текст: </b> ${data.messageText}`

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
        <div className={styles.anyQuestionsContainer}>
            {
                showNotification && <Notification
                    textNotification={notification}
                    setShowNotification={setShowNotification}
                />
            }
            <div className={styles.bgCover}>
                <div className={styles.formContainer}>
                    <h2>залишились питання?</h2>
                    <p>Ми проводимо ремонтно-будівничі роботи в квартирах будь-якого типу, площі</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Ваше Ім’я'
                            required="required"
                            minLength={3}
                            maxLength={40}
                            name="name"
                        />
                        <input
                            type="tel"
                            name="number"
                            placeholder='+38 09 000 00 00'
                            required="required"
                        />
                        <textarea
                            type="text"
                            name='messageText'
                            placeholder='Повідомлення...'
                            required="required"
                            minLength={5}
                        />
                        <div className={styles.btnContainer}>
                            <Button
                                type='submit'
                                value='Відправити повідомлення'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AnyQuestions