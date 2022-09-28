import React from 'react'
import styles from './SubNavigation.module.sass'
import { NavLink } from "react-router-dom"

const SubNavigation = ({ type }) => {

    const aboutUs = [
        {
            linkName: 'про компанію',
            path: '/aboutus'
        },
        {
            linkName: 'відгуки',
            path: '/responses'
        },
        {
            linkName: 'партнери',
            path: '/partners'
        },
        {
            linkName: 'акції',
            path: '/promotions'
        },
    ]

    const services = [
        {
            linkName: 'ремонт під ключ',
            path: '/'
        },
        {
            linkName: 'дизайнерський ремонт',
            path: '/'
        },
        {
            linkName: 'ремонт комерційної нерухомості',
            path: '/'
        },
        {
            linkName: 'дизайн квартир',
            path: '/services'
        },
        {
            linkName: 'розумний будинок',
            path: '/'
        },
    ]

    return (
        <div className={styles.subNavigationContainer}>
            <nav>
                <ul>
                    {type === 'aboutUs'
                        ?
                        aboutUs.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive ? `${styles.activeLink} ${styles.link} ${styles.linkAboutUs}`  : `${styles.link} ${styles.linkAboutUs}`
                                        }
                                    >
                                        {item.linkName}
                                    </NavLink>
                                </li>
                            )
                        })
                        :
                        services.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive ? `${styles.activeLink} ${styles.link}` : styles.link
                                        }
                                    >
                                        {item.linkName}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default SubNavigation