import styles from './AnyQuestions.module.sass'
import Button from '@components/UI/Button/Button'
import axios from 'axios'
import { validateAnyQuestionForm } from '@utils/validation'
import { useRecoilState } from 'recoil'
import { notificationState } from '../../atoms'
import { useEffect } from 'react'

const AnyQuestions = () => {
    const [notification, setNotification] = useRecoilState(notificationState)
    let newNotificationArray = []

    const createNotification = (message, isSuccess = false) => {
        newNotificationArray = [
            ...notification,
            {
                id: notification.length,
                message,
                isSuccess,
            }
        ]
        setNotification(newNotificationArray)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))
        const isValid = validateAnyQuestionForm(data)

        if (isValid === true) {
            const TG_CHAT_ID = process.env.REACT_APP_TG_CHAT_ID
            const TG_URL_API = process.env.REACT_APP_TG_URL_API

            let message = '<b>Запит "Залишились питання"</b>\n'
            message += `<b>Ім'я: </b> ${data.name}\n`
            message += `<b>Номер телефону: </b> ${data.number}\n`
            message += `<b>Текст: </b> ${data.messageText}`

            axios.post(TG_URL_API, {
                chat_id: TG_CHAT_ID,
                parse_mode: 'html',
                text: message,
            }).then(() => {
                e.target.reset()
                createNotification('Дані отримано. Ми Вам зателефонуємо.', true)
            }).catch((error) => {
                createNotification('Схоже сталася помилка. Дані НЕ отримано.', false)

                console.error(error)
            })
        }
        else {
            isValid.map((errorMessage, i) => {
                newNotificationArray.push({
                    id: notification.length + i,
                    message: errorMessage,
                    isSuccess: false,
                })
            })
            setNotification([
                ...notification,
                ...newNotificationArray,
            ])
            newNotificationArray = []
        }
    }

    useEffect(() => {
        const deleteNotification = (keys) => {
            keys.map((key) => {
                setNotification(
                    notification.filter((item) => {
                        item.id !== key
                    })
                )
                console.log(notification)
            })
        }

        const timeoutId = setTimeout(() => deleteNotification(Object.keys(notification)), 5000)

        return () => clearTimeout(timeoutId)
    }, [notification, setNotification])

    return (
        <div className={styles.anyQuestionsContainer}>
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