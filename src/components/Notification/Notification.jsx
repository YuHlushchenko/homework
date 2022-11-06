import React from 'react'
import PropTypes from 'prop-types'
import styles from './Notification.module.sass'

const Notification = ({ textNotification, setShowNotification }) => {
    return (
        <div
            className={styles.notificationContainer}
            style={textNotification.isSuccess ? { backgroundColor: '#00c04b'} : { backgroundColor: '#DB0000'}}
            
        >
            <p>{textNotification.message}</p>
            <div className={styles.closeBtnContainer}>
                <button type='button' onClick={() => setShowNotification(false)}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6.5L6 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6.5L18 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={styles.lineProgress}></div>
        </div>
    )
}

Notification.propTypes = {
    textNotification: PropTypes.object,
    setShowNotification: PropTypes.func,
}

export default Notification