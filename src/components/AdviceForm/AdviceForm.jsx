import React from 'react'
import styles from './AdviceForm.module.sass'

const AdviceForm = ({ imgUrl }) => {
    return (
        <div className={styles.adviceForm}>
            <div
                className={styles.imgContainer}
                style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>

            <div className={styles.formContainer}>
                <form>
                    <div className={styles.inputsContainer}>
                        <input
                            type="text"
                            placeholder='Ваше Ім’я'
                        />
                        <input
                            type="number"
                            placeholder='+38 09 000 00 00'
                        />
                    </div>

                    <div className={styles.bttnContainer}>
                        <button type='submit'>
                            Консультація фахівця
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AdviceForm