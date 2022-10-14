import React from 'react'
import styles from './RepairTypesContainer.module.sass'
import RepairTypesItem from '../RepairTypesItem/RepairTypesItem'

const dataRepair = {
    economy: {
        imgSrc: '/servicesPageImgs/moreDetails/img1.png',
        title: 'Економ варіант',
        price: '300 грн м',
        time: '45-50 днів',
        bttnLink: '/services/economy',
        isReverse: false,
        // tableName: 'economyTable',
    },

    eurorepair: {
        imgSrc: '/servicesPageImgs/moreDetails/img2.png',
        title: 'Економ варіант',
        price: '300 грн м',
        time: '45-50 днів',
        bttnLink: '/services/eurorepair',
        isReverse: true,
        // tableName: 'economyTable',
    },

    business: {
        imgSrc: '/servicesPageImgs/moreDetails/img3.png',
        title: 'бізнес варіант',
        price: '800 грн м',
        time: '45-50 днів',
        bttnLink: '/services/business',
        isReverse: false,
        // tableName: 'economyTable',
    },
}

const dataKeys = Object.keys(dataRepair)

const RepairTypesContainer = () => {
    return (
        <div className={styles.repairTypesContainer}>
            <h2>Види ремонту які ми виконуємо</h2>
            <p>Ми проводимо ремонтно-будівничі роботи в квартирах будь-якого типу, площі і технічного стану</p>
            <div className={styles.mainContentContainer}>
                {
                    dataKeys.map((item, index) => {
                        console.log(dataRepair[item])
                        return <div
                            key={index}
                            className={styles.repairTypesItemContainer}
                        >
                            <RepairTypesItem
                                itemData={dataRepair[item]}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RepairTypesContainer