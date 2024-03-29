import { useEffect, useState } from 'react'
import styles from './Navigation.module.sass'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SubNavigation from '@components/SubNavigation/SubNavigation'

const aboutUsLinks = ['/about-us', '/responses', '/partners', '/promotions']

const servicesLinks = [
  '/services',
  '/services/economy',
  '/services/eurorepair',
  '/services/business',

  '/smart-house',
  '/smart-house/climate',
  '/smart-house/lighting',
  '/smart-house/security',

  '/design-repair',
  '/commercial-property',
  '/apartment-design',
  '/apartment-design/project',
  '/apartment-design/visualisation',
  '/apartment-design/placement',
]

const noSubMenu = ['/', 'calculator', 'contacts']

const aboutUsLinksNav = [
  {
    link: '/about-us',
    name: 'Про компанію',
  },
  {
    link: '/responses',
    name: 'Відгуки',
  },
  {
    link: '/partners',
    name: 'Партнери',
  },
  {
    link: '/promotions',
    name: 'Акції',
  },
]

const servicesLinksNav = [
  {
    link: '/services',
    name: 'Ремонт під ключ',
  },
  {
    link: '/design-repair',
    name: 'Дизайнерський ремонт',
  },
  {
    link: '/commercial-property',
    name: 'Ремонт комерційної нерухомості',
  },
  {
    link: '/apartment-design',
    name: 'Дизайн квартир',
  },
  {
    link: '/smart-house',
    name: 'Розумний будинок',
  },
]

const Navigation = () => {
  const [isSideBar, setSideBar] = useState(false)
  const [subNavType, setSubNavType] = useState(null)

  const location = useLocation()

  const toggleBurgerNav = () => setSideBar(!isSideBar)

  useEffect(() => {
    if (noSubMenu.includes(location.pathname)) {
      return setSubNavType(null)
    }
    if (aboutUsLinks.includes(location.pathname)) {
      return setSubNavType('aboutUs')
    }
    if (servicesLinks.includes(location.pathname)) {
      return setSubNavType('services')
    }
  }, [location])

  return (
    <>
      <div
        className={
          isSideBar ? `${styles.openedMenuContainer}` : `${styles.navContainer}`
        }
        style={{
          backgroundColor:
            location.pathname !== '/' ? '#0d0d0d' : null,
        }}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <svg
              width="84"
              height="46"
              viewBox="0 0 94 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M56.5676 55L61.2383 33.6417L66.816 55H82.2792L93.9787 1.85361H80.1933L77.5178 20.1737L75.0237 37.9496L71.0332 20.1737L67.7683 1.85361H52.9399L56.4316 15.3216L55.2525 20.1737L50.6725 37.9496L47.0901 20.1737L44.6868 1.85361H29.5863L42.238 55H56.5676Z"
                fill="#DB0000"
              />
              <path
                d="M18.048 55V33.3243H29.7021V55H44.7119V1.85361H29.7021V22.8945H18.048V1.85361H3.03823V55H18.048Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className={styles.centerContainer}>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive || aboutUsLinks.includes(location.pathname)
                      ? styles.activeLink
                      : undefined
                  }>
                  Про нас
                </NavLink>
              </li>

              <div className={styles.subNavigationContainer}>
                <ul>
                  {aboutUsLinksNav.map((item) => {
                    return (
                      <li key={item.name}>
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            isActive ? styles.activeSubLink : styles.subLink
                          }>
                          {item.name}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive || servicesLinks.includes(location.pathname)
                      ? styles.activeLink
                      : undefined
                  }>
                  Наші послуги
                </NavLink>
              </li>

              <div className={styles.subNavigationContainer}>
                <ul>
                  {servicesLinksNav.map((item) => {
                    return (
                      <li key={item.name}>
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            isActive ? styles.activeSubLink : styles.subLink
                          }>
                          {item.name}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <li>
                <NavLink
                  to="/calculator"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : undefined
                  }>
                  Калькулятор
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : undefined
                  }>
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.phoneContainer}>
          <a href="tel:+38970000000">+38 97 000 00 00</a>
        </div>

        {isSideBar ? (
          <div className={styles.close}>
            <svg
              onClick={toggleBurgerNav}
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6.5L6 18.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6.5L18 18.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div className={styles.burgerMenu}>
            <svg
              onClick={toggleBurgerNav}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 10H3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 6H3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 14H3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 18H3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <section className={styles.subNavContainer}>
        <SubNavigation type={subNavType} />
      </section>
    </>
  )
}

export default Navigation
