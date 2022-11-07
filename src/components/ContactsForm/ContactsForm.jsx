import { useState } from 'react'
import Button from '@components/UI/Button/Button'
import Notification from '@components/Notification/Notification'
import styles from './ContactsForm.module.sass'
import axios from 'axios'
import { useValidation } from '@hooks/useValidation'

const useInput = (initialValue, validatiions) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validatiions)

    const onBlur = () => {
        setDirty(true)
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value,
        isDirty,
        onChange,
        handleClear: () => setValue(''),
        onBlur,
        handleBLurClear: () => setDirty(false),
        ...valid
    }
}

const ContactsForm = () => {
    const userName = useInput('', { isEmpty: true, minLength: 3 })
    const userNumber = useInput('', { isEmpty: true, minLength: 10, isNumber: false })
    const userMessage = useInput('', { isEmpty: true, minLength: 10 })

    const [showNotification, setShowNotification] = useState(false)
    const [notification, setNotification] = useState({
        message: '',
        isSuccess: false,
    })

    const formSubmit = (e, name, number, messageText) => {
        e.preventDefault()

        const TG_CHAT_ID = process.env.REACT_APP_TG_CHAT_ID
        const TG_URL_API = process.env.REACT_APP_TG_URL_API

        let message = '<b>Запит "Відправити повідомлення"</b>\n'
        message += `<b>Ім'я: </b> ${name} \n`
        message += `<b>Номер телефону: </b> ${number} \n`
        message += `<b>Текст: </b> ${messageText}`

        axios.post(TG_URL_API, {
            chat_id: TG_CHAT_ID,
            parse_mode: 'html',
            text: message,
        }).then(() => {
            userName.handleClear()
            userName.handleBLurClear()
            userNumber.handleClear()
            userNumber.handleBLurClear()
            userMessage.handleClear()
            userMessage.handleBLurClear()
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
        <div className={styles.contactsFormContainer}>
            {
                showNotification && <Notification
                    textNotification={notification}
                    setShowNotification={setShowNotification}
                />
            }
            <div className={styles.leftContainer}>
                <h2>КОНТАКТИ</h2>

                <div className={styles.contactInfoContainer}>
                    <div className={styles.contactInfo}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5 20.3125H34.375C34.3738 19.0697 33.8795 17.8781 33.0007 16.9993C32.1219 16.1205 30.9303 15.6262 29.6875 15.625V12.5C31.7587 12.5025 33.7444 13.3264 35.209 14.791C36.6736 16.2556 37.4975 18.2413 37.5 20.3125Z" fill="black" />
                            <path d="M43.7505 20.3125H40.6255C40.6222 17.4127 39.4687 14.6326 37.4183 12.5822C35.3678 10.5317 32.5877 9.37832 29.688 9.37501V6.25001C33.4163 6.25415 36.9907 7.73706 39.6271 10.3734C42.2634 13.0097 43.7463 16.5842 43.7505 20.3125ZM31.7708 33.5656L35.2708 30.0656C35.7393 29.597 36.335 29.2762 36.984 29.1429C37.6331 29.0096 38.3071 29.0696 38.9223 29.3156L43.1848 31.0219C43.8131 31.2733 44.3516 31.7071 44.7309 32.2675C45.1103 32.8278 45.313 33.489 45.313 34.1656V41.9172C45.3141 42.3779 45.2211 42.834 45.0398 43.2576C44.8585 43.6811 44.5927 44.0632 44.2586 44.3805C43.9246 44.6978 43.5292 44.9435 43.0969 45.1027C42.6645 45.2619 42.2043 45.3311 41.7442 45.3063C11.8661 43.4469 5.83171 18.1406 4.71139 8.45001C4.65713 7.97626 4.70379 7.49638 4.84829 7.04195C4.99279 6.58751 5.23187 6.16882 5.54979 5.81341C5.86771 5.458 6.25727 5.17393 6.69285 4.97987C7.12844 4.78582 7.60017 4.68618 8.07702 4.68751H15.6911C16.3678 4.68749 17.0289 4.89022 17.5893 5.26954C18.1496 5.64887 18.5835 6.18739 18.8348 6.81564L20.5395 11.0781C20.7855 11.6934 20.8456 12.3673 20.7123 13.0164C20.579 13.6655 20.2581 14.2612 19.7895 14.7297L16.2895 18.2297C16.2895 18.2297 18.2301 31.8734 31.7708 33.5656Z" fill="black" />
                        </svg>

                        <a href='tel:+38970000000'>+38 97 000 00 00</a>
                    </div>
                    <div className={styles.contactInfo}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.935 13.215L22.685 23.2875C23.315 23.625 24.13 23.785 24.95 23.785C25.77 23.785 26.585 23.625 27.215 23.2875L45.965 13.215C47.1875 12.5575 48.3425 10 46.1 10H3.8025C1.56 10 2.715 12.5575 3.935 13.215ZM46.5325 18.7225L27.215 28.79C26.365 29.235 25.77 29.2875 24.95 29.2875C24.13 29.2875 23.535 29.235 22.685 28.79C21.835 28.345 4.8525 19.4425 3.465 18.72C2.49 18.21 2.5 18.8075 2.5 19.2675V37.5C2.5 38.55 3.915 40 5 40H45C46.085 40 47.5 38.55 47.5 37.5V19.27C47.5 18.81 47.51 18.2125 46.5325 18.7225Z" fill="black" />
                        </svg>

                        <a href='mailto:homework@gmail.com'>homework@gmail.com</a>
                    </div>
                    <div className={styles.contactInfo}>
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.9997 50.7502C25.9473 48.1465 23.118 45.2922 20.5413 42.2169C16.6747 37.5987 12.083 30.7208 12.083 24.1668C12.0813 20.8197 13.0727 17.5472 14.9315 14.7637C16.7904 11.9801 19.4332 9.81054 22.5256 8.52956C25.618 7.24858 29.0208 6.91376 32.3035 7.56747C35.5863 8.22118 38.6013 9.83404 40.967 12.2019C42.5421 13.77 43.7905 15.6349 44.6401 17.6887C45.4896 19.7424 45.9234 21.9443 45.9163 24.1668C45.9163 30.7208 41.3247 37.5987 37.458 42.2169C34.8814 45.2922 32.0521 48.1465 28.9997 50.7502ZM28.9997 16.9168C27.0769 16.9168 25.2328 17.6807 23.8732 19.0403C22.5135 20.4 21.7497 22.244 21.7497 24.1668C21.7497 26.0897 22.5135 27.9337 23.8732 29.2934C25.2328 30.653 27.0769 31.4169 28.9997 31.4169C30.9225 31.4169 32.7666 30.653 34.1262 29.2934C35.4858 27.9337 36.2497 26.0897 36.2497 24.1668C36.2497 22.244 35.4858 20.4 34.1262 19.0403C32.7666 17.6807 30.9225 16.9168 28.9997 16.9168Z" fill="black" />
                        </svg>

                        <a href='https://goo.gl/maps/3hDCgabCxnpcQowQA' target="_blank" rel="noreferrer">м. Івано-Франківськ, <br /> вул. Василіянок 1</a>
                    </div>
                </div>
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={(e) => formSubmit(e, userName.value, userNumber.value, userMessage.value)}>
                    {
                        (userName.isDirty && userName.isEmpty) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Поле не може бути порожнім.</span>
                    }
                    {
                        (userName.isDirty && userName.minLengthError) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Не менше трьох символів.</span>
                    }
                    <input
                        type="text"
                        placeholder='Ваше Ім’я'
                        required="required"
                        minLength={3}
                        maxLength={40}
                        value={userName.value}
                        onChange={(e) => userName.onChange(e)}
                        onBlur={userName.onBlur}
                    />
                    {
                        (userNumber.isDirty && userNumber.isEmpty) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Поле не може бути порожнім.</span>
                    }
                    {
                        (userNumber.isDirty && userNumber.minLengthError) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Не менше десяти символів.</span>
                    }
                    {
                        (userNumber.isDirty && userNumber.numberError) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Неправильний формат даних.</span>
                    }
                    <input
                        type="number"
                        name="phone"
                        placeholder='+38 09 000 00 00'
                        required="required"
                        value={userNumber.value}
                        onChange={(e) => userNumber.onChange(e)}
                        onBlur={userNumber.onBlur}
                    />
                    {
                        (userMessage.isDirty && userMessage.isEmpty) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Поле не може бути порожнім.</span>
                    }
                    {
                        (userMessage.isDirty && userMessage.minLengthError) && <span style={{ color: '#DB0000', paddingBottom: '5px' }}>Не менше десяти символів.</span>
                    }
                    <textarea
                        type="text"
                        placeholder='Повідомлення...'
                        required="required"
                        minLength={5}
                        value={userMessage.value}
                        onChange={(e) => userMessage.onChange(e)}
                        onBlur={userMessage.onBlur}
                    />
                    <div className={styles.btnContainer}>
                        <Button
                            value='Відправити повідомлення'
                            btnStyle={
                                (!userName.isDirty || userName.inputValid) &&
                                (!userNumber.isDirty || userNumber.inputValid) &&
                                (!userMessage.isDirty || userMessage.inputValid)
                                    ?
                                    'red'
                                    :
                                    'disabled'
                            }
                            type={'submit'}
                            disabled={
                                (userName.isDirty && !userName.inputValid) ||
                                (userNumber.isDirty && !userNumber.inputValid) ||
                                (userMessage.isDirty && !userMessage.inputValid)
                            }
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactsForm