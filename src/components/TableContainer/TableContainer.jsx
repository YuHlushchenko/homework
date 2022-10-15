import React from 'react'
import styles from './TableContainer.module.sass'
import PropTypes from 'prop-types'
import TableItem from '../TableItem/TableItem'

const TableContainer = ({ data }) => {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.titleContainer}>
                <h2>{data?.title}</h2>
                {data?.description && <p>{data?.description}</p>}
            </div>

            <section className={styles.table}>
                <TableItem tableData={data?.tableData} />
            </section>

            <div className={styles.textContainer}>
                {data?.text && <p>{data?.text}</p>}
            </div>
        </div>
    )
}

TableContainer.propTypes = {
    data: PropTypes.object,
}

export default TableContainer