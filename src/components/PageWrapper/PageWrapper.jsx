import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '@components/Navigation/Navigation'
import Footer from '@components/Footer/Footer'

const PageWrapper = ({ children }) => {
  console.log(children)
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.element,
}

export default PageWrapper
