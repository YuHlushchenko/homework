import React, { useRef, useState, useEffect } from 'react'
import styles from './TableItem.module.sass'
import PropTypes from 'prop-types'
import autoAnimate from '@formkit/auto-animate'

const TableItem = ({ tableData }) => {
    const [showMore, setShowMore] = useState(false)
    const ref = useRef(null)

    const showMoreHandler = () => setShowMore(!showMore)

    useEffect(() => {
        ref.current && autoAnimate(ref.current)
    }, [ref])

    return (
        <div className={styles.tableContainer}>
            <div className={styles.line}></div>
            <div
                className={showMore ? `${styles.table} ${styles.tableOpened}` : `${styles.table}`}
                ref={ref}
            >
                {
                    tableData?.map((item, index) => {
                        if (index <= 5) {
                            return <div
                                key={index}
                                className={(index + 1) % 2 === 0 ? `${styles.cell} ${styles.bg}` : `${styles.cell}`}
                            >
                                <div className={styles.cellTextContainer}>
                                    <p>{item}</p>
                                </div>

                                <div className={styles.iconContainer}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        } else if (showMore && index >= 6 || window.innerWidth > 850) {
                            return <div
                                key={index}
                                className={(index + 1) % 2 === 0 ? `${styles.cell} ${styles.bg}` : `${styles.cell}`}
                            >
                                <div className={styles.cellTextContainer}>
                                    <p>{item}</p>
                                </div>

                                <div className={styles.iconContainer}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        }
                    })
                }
            </div>

            <div className={showMore ? `${styles.showMoreIconContainer} ${styles.showMoreIconOpened}` : `${styles.showMoreIconContainer}`}>
                <button
                    type='button'
                    onClick={() => showMoreHandler()}
                >
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3712 0.986467L10.9999 10.1215L1.62869 0.986467C1.46126 0.822925 1.2365 0.731367 1.00244 0.731367C0.768393 0.731367 0.543628 0.822925 0.376194 0.986467C0.295124 1.0659 0.230717 1.16071 0.186749 1.26535C0.14278 1.36998 0.120132 1.48234 0.120132 1.59584C0.120132 1.70934 0.14278 1.8217 0.186749 1.92634C0.230717 2.03097 0.295124 2.12578 0.376194 2.20522L10.3456 11.9252C10.5206 12.0959 10.7555 12.1914 10.9999 12.1914C11.2444 12.1914 11.4792 12.0959 11.6543 11.9252L21.6237 2.20709C21.7053 2.1276 21.7702 2.03256 21.8145 1.92757C21.8588 1.82259 21.8817 1.70979 21.8817 1.59584C21.8817 1.48189 21.8588 1.36909 21.8145 1.26411C21.7702 1.15913 21.7053 1.06408 21.6237 0.984591C21.4563 0.821049 21.2315 0.729492 20.9974 0.729492C20.7634 0.729492 20.5386 0.821049 20.3712 0.984591V0.986467Z" fill="black" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

TableItem.propTypes = {
    tableData: PropTypes.array,
}

export default TableItem