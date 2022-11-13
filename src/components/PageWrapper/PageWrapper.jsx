import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '@components/Navigation/Navigation'
import Footer from '@components/Footer/Footer'
import ToTopButton from '@components/UI/ToTopButton/ToTopButton'
import NotificationsContainer from '@components/NotificationsContainer/NotificationsContainer'
import Notification from '../Notification/Notification'
import { useRecoilValue } from 'recoil'
import { notificationState } from '../../atoms'

const PageWrapper = ({ children }) => {
  const notification = useRecoilValue(notificationState)
  return (
    <>
      <Navigation />
      <NotificationsContainer>
        {
          notification && notification.map((item) => {
            return <Notification
              key={item.id}
              notificationData={item}
            />
          })
        }
      </NotificationsContainer>
      {children}
      <ToTopButton />
      <Footer />
    </>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.element,
}

export default PageWrapper
