import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './RepairTypesItem.module.sass'
import autoAnimate from '@formkit/auto-animate'

// const tablesData = {

// }

const RepairTypesItem = ({ itemData }) => {
    const [dropDown, setDropDown] = useState(false)
    const parent = useRef(null)

    const dropDownHandler = () => setDropDown(!dropDown)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    return (
        <div className={styles.repairTypesItemContiner}>
            <div className={itemData.isReverse ? `${styles.topContentContainer} ${styles.reverse}` : `${styles.topContentContainer}`}>
                <div
                    className={styles.bgContainer}
                    style={{
                        backgroundImage: `url(${itemData.imgSrc})`,
                    }}>
                </div>
                <div className={styles.mainContentContainer}>
                    <h3>{itemData.title}</h3>
                    <div className={styles.priceContainer}>
                        <p>Вартість ремонту:</p>
                        <h4>{itemData.price}</h4>
                    </div>

                    <div className={styles.timeContainer}>
                        <p>Термін виконання:</p>
                        <h4>{itemData.time}</h4>
                    </div>

                    <button
                        type='button'
                        className={dropDown ? `${styles.dropDownContainer} ${styles.droppedDown}` : `${styles.dropDownContainer}`}
                        onClick={() => dropDownHandler()}
                    >
                        <p>Роботи які входять в тариф</p>
                        <div className={styles.dropDownIconContainer}>
                            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3712 0.986467L10.9999 10.1215L1.62869 0.986467C1.46126 0.822925 1.2365 0.731367 1.00244 0.731367C0.768393 0.731367 0.543628 0.822925 0.376194 0.986467C0.295124 1.0659 0.230717 1.16071 0.186749 1.26535C0.14278 1.36998 0.120132 1.48234 0.120132 1.59584C0.120132 1.70934 0.14278 1.8217 0.186749 1.92634C0.230717 2.03097 0.295124 2.12578 0.376194 2.20522L10.3456 11.9252C10.5206 12.0959 10.7555 12.1914 10.9999 12.1914C11.2444 12.1914 11.4792 12.0959 11.6543 11.9252L21.6237 2.20709C21.7053 2.1276 21.7702 2.03256 21.8145 1.92757C21.8588 1.82259 21.8817 1.70979 21.8817 1.59584C21.8817 1.48189 21.8588 1.36909 21.8145 1.26411C21.7702 1.15913 21.7053 1.06408 21.6237 0.984591C21.4563 0.821049 21.2315 0.729492 20.9974 0.729492C20.7634 0.729492 20.5386 0.821049 20.3712 0.984591V0.986467Z" fill="black" />
                            </svg>
                        </div>
                    </button>

                    <div className={styles.linkBttnContainer}>
                        <Link
                            to={itemData.bttnLink}
                        >
                            <button type='button'>
                                Дивитися всі роботи
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div 
                ref={parent}
                className={dropDown ? `${styles.bottomContentContainer} ${styles.bottomContentContainerOpened}` : `${styles.bottomContentContainer}`}>
                {
                    dropDown && <div className={styles.tableContainer}>
                        
                    </div>
                }
            </div>
        </div>
    )
}

RepairTypesItem.propTypes = {
    itemData: PropTypes.object,
}

export default RepairTypesItem