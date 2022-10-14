import React from 'react'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/smartHouse.module.sass'
import PageWrapper from '@components/PageWrapper/PageWrapper'

const SmartHouse = () => {
  return (
    <PageWrapper>
      <div className={styles.smartHouseContainer}>
        <h2>розумний будинок</h2>
        <section className={styles.moreDetailsContainer}>
          <MoreDetailsContainer option={'smartHouse'} />
        </section>

        <section></section>

        <div className={styles.mainTextContainer}>
          <h2> Навіщо потрібен розумний будинок? </h2>
          <p>
            Останнім часом, технології розумного будинку стрімко розвиваються, а розумні пристрої зустрічаються мало не на кожному кроці. Так що основним питанням, яке задає собі споживач, стає - &quot;Навіщо мені все це потрібно?&quot; Давайте розбиратися, навіщо насправді людині може знадобитись &quot;Розумний будинок&quot;?
          </p>
          <p>
            Розумний будинок - це система пристроїв, кожне з яких виконує свою функцію. Всі ці &quot;Інтелектуальні&quot; системи встановлюються не просто заради примхи, а й для серйозної економії. Технології «Розумного будинку» вже сьогодні дозволяють економити і електроенергію, і воду, і газ. Крім того, подібні системи підвищують рівень комфорту і безпеки.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default SmartHouse
