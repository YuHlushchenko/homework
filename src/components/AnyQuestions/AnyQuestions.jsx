import React from 'react'
import styles from './AnyQuestions.module.sass'
import Button from '../UI/Button/Button'

const AnyQuestions = () => {
    return (
        <div className={styles.anyQuestionsContainer}>
            <div className={styles.bgCover}>
                <div className={styles.formContainer}>
                    <h2>залишились питання?</h2>
                    <p>Ми проводимо ремонтно-будівничі роботи в квартирах будь-якого типу, площі</p>
                    <form>
                        <input
                            type="text"
                            placeholder='Ваше Ім’я'
                            required="required"
                            minLength={3}
                            maxLength={40}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder='+38 09 000 00 00'
                            required="required"
                        />
                        <textarea
                            type="text"
                            placeholder='Повідомлення...'
                            required="required"
                            minLength={5}
                        />
                        <Button
                            inlineStyle={
                                window.innerWidth <= 1550
                                    ?
                                    window.innerWidth <= 1320
                                        ?
                                        window.innerWidth <= 1050
                                            ?
                                            window.innerWidth <= 600
                                                ?
                                                {
                                                    width: '100%',
                                                    fontSize: '14px',
                                                    padding: '10px 15px'
                                                }
                                                :
                                                {
                                                    width: '400px'
                                                }
                                            :
                                            {
                                                width: '450px'
                                            }
                                        :
                                        {
                                            width: '650px',
                                            padding: '20px'
                                        }
                                    :
                                    {
                                        width: '700px',
                                        padding: '25px'
                                    }
                            }
                            value='Відправити повідомлення'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AnyQuestions