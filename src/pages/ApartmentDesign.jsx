import PageWrapper from '@components/PageWrapper/PageWrapper'
import MoreDetailsContainer from '@components/MoreDetailsContainer/MoreDetailsContainer'
import styles from '../styles/apartmentDesign.module.sass'

const ApartmentDesign = () => {
  return (
    <PageWrapper>
      <div className={styles.apartmentDesignContainer}>
        <h2>ДИЗАЙН КВАРТИР</h2>

        <section className={styles.moreDetailsContainer}>
          <MoreDetailsContainer option={'apartmentDesign'} />
        </section>

        <div className={styles.mainTextContainer}>
          <p>
            Професійна розробка дизайн-проекту інтер&apos;єру - це складна і
            ретельна праця, завдяки якій створюється унікальна обстановка, що
            враховує ваші власні уявлення та задумки Вашого простору. Дизайнери,
            які мають професійну освіту, створюють незвичайні рішення для
            оформлення об&apos;єктів. Як правило, перелік робіт включає в себе
            декілька варіантів планувань, концептуальних варіантів стилістичного
            рішення, реалістичні 3D-візуалізації, детальний план розміщення
            меблів і предметів інтер&apos;єру, робочі креслення для
            будівельників, відомості оздоблювальних матеріалів і освітлювального
            обладнання, а також авторський нагляд. Ретельно продуманий і
            виконаний кожний етап дає максимально ефективний результат -
            комфортну і затишну атмосферу.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ApartmentDesign
