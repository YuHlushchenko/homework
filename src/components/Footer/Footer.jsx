import styles from './Footer.module.sass'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button'

const navLinks = [
    {
        link: '/about-us',
        linkName: 'Про нас',
    },
    {
        link: '/services',
        linkName: 'Наші послуги',
    },
    {
        link: '/calculator',
        linkName: 'Калькулятор',
    },
    {
        link: '/contacts',
        linkName: 'Контакти',
    }
]

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.topContainer}>
                <div className={styles.topLeftContainer}>
                    <div className={styles.logoContainer}>
                        <a href="/">
                            <svg width="131" height="98.5" viewBox="0 0 94 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.5676 55L61.2383 33.6417L66.816 55H82.2792L93.9787 1.85361H80.1933L77.5178 20.1737L75.0237 37.9496L71.0332 20.1737L67.7683 1.85361H52.9399L56.4316 15.3216L55.2525 20.1737L50.6725 37.9496L47.0901 20.1737L44.6868 1.85361H29.5863L42.238 55H56.5676Z" fill="#DB0000" />
                                <path d="M18.048 55V33.3243H29.7021V55H44.7119V1.85361H29.7021V22.8945H18.048V1.85361H3.03823V55H18.048Z" fill="white" />
                            </svg>
                        </a>
                    </div>

                    <div className={styles.aboutUsContainer}>
                        <span>про нас</span>
                        <p>Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obc em ipsum dolor sit amet. Est voluptatem dolorem sedem ipsum dolor sit amet. Est voluptatem dolorem sed obc</p>
                    </div>
                </div>

                <div className={styles.topRightContainer}>
                    <div className={styles.anchorsContainer}>
                        <span>меню</span>
                        <ul>
                            {navLinks.map((item, index) => {
                                return <li key={index}>
                                    <NavLink
                                        to={item.link}
                                        style={({ isActive }) =>
                                            isActive ? { color: '#DB0000' } : null
                                        }
                                    >
                                        {item.linkName}
                                    </NavLink>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className={styles.contactInfoContainer}>
                        <a href="tel:+38970000000">
                            <div className={styles.btnContainer}>
                                <Button
                                    value={'ЗАТЕЛЕФОНУВАТИ'}
                                />
                            </div>
                        </a>

                        <div className={styles.numberContainer}>
                            <span>Прийом дзвінків 10:00-18:00</span>
                            <a href='tel:+38 00 000 00 00'><span>+38 00 000 00 00</span></a>
                        </div>

                        <div className={styles.addressContainer}>
                            <a href='https://goo.gl/maps/3hDCgabCxnpcQowQA' target="_blank" rel="noreferrer"><span>м. Івано-Франківськ, Василіянок 1</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <span>HomeWork 2022</span>
                <a href='/#'>
                    Політика конфеденціності
                </a>
            </div>
        </div>
    )
}

export default Footer