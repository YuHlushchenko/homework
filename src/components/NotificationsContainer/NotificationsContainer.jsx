import React from 'react'
import PropTypes from 'prop-types'
import styles from './NotificationsContainer.module.sass'

const NotificationsContainer = ({ children }) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}

NotificationsContainer.propTypes = {
    children: PropTypes.array,
}

export default NotificationsContainer