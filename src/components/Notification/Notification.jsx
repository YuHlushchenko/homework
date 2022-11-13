import React from 'react'
import PropTypes from 'prop-types'
import styles from './Notification.module.sass'

const Notification = ({ notificationData }) => {
    return (
        <div
            className={styles.notificationContainer}
            style={notificationData.isSuccess ? { backgroundColor: '#00c04b' } : { backgroundColor: '#DB0000' }}
        >
            <p>{notificationData.message}</p>

            <div className={styles.lineProgress}></div>
        </div>
    )
}

Notification.propTypes = {
    notificationData: PropTypes.object,
}

export default Notification