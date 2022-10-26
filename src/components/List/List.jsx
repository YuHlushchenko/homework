import React, { useState } from 'react'
import styles from './List.module.sass'
import PropTypes from 'prop-types'

const List = ({ list }) => {
    const [active, setActive] = useState(0)

    const clickHandler = (index) => {
        setActive(index)
    }

    return (
        <div className={styles.container}>
            {
                list.map((item, index) => {
                    return (
                        <button
                            onClick={() => clickHandler(index)}
                            key={index}
                            className={active === index ? `${styles.active}` : `${styles.inactive}`}
                            >
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )
}

List.propTypes = {
    list: PropTypes.array
}

export default List