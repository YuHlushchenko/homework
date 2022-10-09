import React from 'react'
import styles from './SubNavigation.module.sass'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const SubNavigation = ({ type }) => {
  const aboutUs = [
    {
      linkName: 'про компанію',
      path: '/about-us',
    },
    {
      linkName: 'відгуки',
      path: '/responses',
    },
    {
      linkName: 'партнери',
      path: '/partners',
    },
    {
      linkName: 'акції',
      path: '/promotions',
    },
  ]

  const services = [
    {
      linkName: 'ремонт під ключ',
      path: '/services',
    },
    {
      linkName: 'дизайнерський ремонт',
      path: '/design-repair',
    },
    {
      linkName: 'ремонт комерційної нерухомості',
      path: '/commercial-property',
    },
    {
      linkName: 'дизайн квартир',
      path: '/apartment-design',
    },
    {
      linkName: 'розумний будинок',
      path: '/smart-house',
    },
  ]

  return (
    <div className={styles.subNavigationContainer}>
      <nav>
        <ul>
          {type === 'aboutUs'
            ? aboutUs.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.activeLink} ${styles.link} ${styles.linkAboutUs}`
                          : `${styles.link} ${styles.linkAboutUs}`
                      }>
                      {item.linkName}
                    </NavLink>
                  </li>
                )
              })
            : services.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.activeLink} ${styles.link}`
                          : styles.link
                      }>
                      {item.linkName}
                    </NavLink>
                  </li>
                )
              })}
        </ul>
      </nav>
    </div>
  )
}

SubNavigation.propTypes = {
  type: PropTypes.string,
}

export default SubNavigation
