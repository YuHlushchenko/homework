import React from 'react'
import styles from './ChooseUs.module.sass'

const blocksData = [
    {
        title: 'Ремонт',
        text: 'Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obc',
    },
    {
        title: 'Ремонт Ремонт',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad fuga repellendus libero consequuntur ducimus aperiam pariatur labore! Eius ex vero ad dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
    },
    {
        title: 'Ремонт Ремонт',
        text: 'Lorem ipsum dolor sit consequuntur ducimus aperiam pariatur labore! Eius ex vero ad dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
    },
    {
        title: 'Ремонт',
        text: 'Lorem ipsum dolor s dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
    },
    {
        title: 'Ремонт Ремонт Ремонт',
        text: 'Lorem ipsum dolor s dolorum repellat! Nesciunt rem ducimus  dolor s dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
    },
    {
        title: 'Ремонт Ремонт Ремонт',
        text: 'Lorem dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
    },
]

const ChooseUs = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.bgCover}>
                <h2>ОСЬ ЧОМУ ВАРТО ОБРАТИ НАС</h2>
                <div className={styles.blocksContainer}>
                    {
                        blocksData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={styles.block}>
                                        <div className={styles.redStripe}></div>
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ChooseUs