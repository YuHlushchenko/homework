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
            path: '/services'
        },
        {
            linkName: 'дизайнерський ремонт',
            path: '/designrepair'
        },
        {
            linkName: 'ремонт комерційної нерухомості',
            path: '/commercialproperty'
        },
        {
            linkName: 'дизайн квартир',
            path: '/apartmentdesign'
        },
        {
            linkName: 'розумний будинок',
            path: '/smarthouse'
        },
    ]

    return (
        <div
            className={styles.subNavigationContainer}
        >
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
                                            isActive ? `${styles.activeLink} ${styles.link} ${styles.linkAboutUs}` : `${styles.link} ${styles.linkAboutUs}`
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