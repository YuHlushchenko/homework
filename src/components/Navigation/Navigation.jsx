import React from 'react'
import styles from './Navigation.module.sass'
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link to='/'>
          <svg width="84" height="46" viewBox="0 0 94 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.5676 55L61.2383 33.6417L66.816 55H82.2792L93.9787 1.85361H80.1933L77.5178 20.1737L75.0237 37.9496L71.0332 20.1737L67.7683 1.85361H52.9399L56.4316 15.3216L55.2525 20.1737L50.6725 37.9496L47.0901 20.1737L44.6868 1.85361H29.5863L42.238 55H56.5676Z" fill="#DB0000" />
            <path d="M18.048 55V33.3243H29.7021V55H44.7119V1.85361H29.7021V22.8945H18.048V1.85361H3.03823V55H18.048Z" fill="white" />
          </svg>
        </Link>
      </div>

      <div className={styles.centerContainer}>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/aboutUs'
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
              >
                Про нас
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/services'
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
              >
                Наші послуги
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/calculator'
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
              >
                Калькулятор
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/contacts'
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
              >
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.searchContainer}>
          <input type='text' placeholder='Пошук...' />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#FBFBF6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className={styles.phoneContainer}>
        <a href="tel:+38970000000">+38 97 000 00 00</a>
      </div>

      <Routes>
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </div>
  )
}

export default Navigation