import React from 'react'
import styles from './ChooseUs.module.sass'

const blocksData = [
  {
    title: 'lorem',
    text: 'Lorem ipsum dolor sit amet. Est voluptatem dolorem sed obc',
  },
  {
    title: 'lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad fuga repellendus libero consequuntur ducimus aperiam pariatur labore! Eius ex vero ad dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
  },
  {
    title: 'lorem ipsum',
    text: 'Lorem ipsum dolor sit consequuntur ducimus aperiam pariatur labore! Eius ex vero ad dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
  },
  {
    title: 'lorem',
    text: 'Lorem ipsum dolor s dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
  },
  {
    title: 'lorem ipsum dolor',
    text: 'Lorem ipsum dolor s dolorum repellat! Nesciunt rem ducimus  dolor s dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
  },
  {
    title: 'lorem ipsum dolor repellat',
    text: 'Lorem dolorum repellat! Nesciunt rem ducimus sequi non iusto?',
  },
]

const ChooseUs = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.bgCover}>
        <h2>ось чому варто обрати нас</h2>
        <div className={styles.blocksContainer}>
          {blocksData.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.block}>
                  <div className={styles.redStripe}></div>
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
