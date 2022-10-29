import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '@components/Navigation/Navigation'
import Footer from '@components/Footer/Footer'
import ToTopButton from '@components/UI/ToTopButton/ToTopButton'

const PageWrapper = ({ children }) => {
  return (
    <>
      <Navigation />
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
