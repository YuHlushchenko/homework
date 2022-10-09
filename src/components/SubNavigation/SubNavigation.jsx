import React from 'react'
import styles from './SubNavigation.module.sass'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const links = {
  aboutUs: [
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
  ],
  services: [
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
  ],
}

const SubNavigation = ({ type }) => {
  return (
    type && (
      <div className={styles.subNavigationContainer}>
        <nav>
          <ul>
            {links[type].map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${isActive && styles.activeLink} ${styles.link} ${
                        type === 'aboutUs' && styles.linkAboutUs
                      }`
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
  )
}

SubNavigation.propTypes = {
  type: PropTypes.string,
}

export default SubNavigation
