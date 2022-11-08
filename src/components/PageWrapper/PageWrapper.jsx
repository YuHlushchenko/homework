import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '@components/Navigation/Navigation'
import Footer from '@components/Footer/Footer'
import ToTopButton from '@components/UI/ToTopButton/ToTopButton'
import { useRecoilValue } from 'recoil'
import { showNotificationState } from '../../atoms'
import Notification from '../Notification/Notification'

const PageWrapper = ({ children }) => {
  const showNotification = useRecoilValue(showNotificationState)
  return (
    <>
      <Navigation />
      {
        showNotification && <Notification />
      }
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
